import {
  CLOUDINARY,
  COMPANY_ID_FOR_LANDING,
  LANDING,
  LANDING_BRAND,
  MAX_CV_BYTES,
  type ApiJob,
  type ApiResult,
} from "./api-config";

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => null)) as T | null;
  if (!res.ok) {
    const msg =
      data && typeof data === "object" && "message" in data
        ? String((data as { message: unknown }).message)
        : "Request failed";
    throw new Error(msg);
  }
  return data as T;
}

function withLandingBrand<T extends Record<string, unknown>>(body: T): T & { brand: string } {
  return { ...body, brand: LANDING_BRAND };
}

/** Split full name into first/second — legacy popup sent both fields separately. */
function splitName(fullName: string): { firstName: string; secondName: string } {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length <= 1) return { firstName: parts[0] ?? "", secondName: "" };
  return { firstName: parts[0], secondName: parts.slice(1).join(" ") };
}

/** Same payload shape as legacy requestDemoPopup → axios.post(..., childData.data). */
export async function submitRequestDemo(fields: {
  fullName: string;
  workEmail: string;
  phone: string;
  companySize: string;
  region?: string;
}): Promise<ApiResult> {
  const { firstName, secondName } = splitName(fields.fullName);
  return postJson<ApiResult>(
    LANDING.requestDemo,
    withLandingBrand({
      fullName: fields.fullName.trim(),
      firstName,
      secondName,
      businessEmail: fields.workEmail.trim(),
      phoneNumber: fields.phone.trim(),
      sizeOfOrganization: fields.companySize,
      region: fields.region ?? "Asia Pacific",
    })
  );
}

export async function submitEmailSignup(email: string): Promise<ApiResult> {
  return postJson<ApiResult>(LANDING.emailSignup, withLandingBrand({ email: email.trim() }));
}

export async function submitContactUs(fields: {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}): Promise<ApiResult> {
  return postJson<ApiResult>(LANDING.contactUs, withLandingBrand(fields));
}

/** General career interest — POST /landing/career */
export async function submitCareerApplication(fields: {
  name: string;
  linkedinURL: string;
  email: string;
  phone: string;
  cvURL: string;
}): Promise<ApiResult> {
  return postJson<ApiResult>(LANDING.career, withLandingBrand(fields));
}

/** Open jobs from admin portal — GET /landing/jobs */
export async function fetchOpenJobs(): Promise<ApiJob[]> {
  const res = await fetch(LANDING.jobs);
  const json = (await res.json().catch(() => null)) as {
    success?: boolean;
    data?: ApiJob[];
  } | null;
  if (json?.success && Array.isArray(json.data)) return json.data;
  return [];
}

/** Per-job application — POST /landing/jobs/:id/apply (legacy Careers page). */
export async function submitJobApplication(
  jobId: string,
  fields: {
    name: string;
    email: string;
    phone: string;
    company: string;
    linkedinURL: string;
    cvURL: string;
  }
): Promise<ApiResult> {
  return postJson<ApiResult>(
    LANDING.jobApply(jobId),
    withLandingBrand({
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      company: fields.company.trim(),
      linkedinURL: fields.linkedinURL.trim(),
      cvURL: fields.cvURL.trim(),
      ...(COMPANY_ID_FOR_LANDING ? { companyId: COMPANY_ID_FOR_LANDING } : {}),
    })
  );
}

export async function uploadCvToCloudinary(file: File): Promise<string> {
  if (file.size > MAX_CV_BYTES) {
    throw new Error("File must be 5MB or smaller.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY.uploadPreset);

  const res = await fetch(CLOUDINARY.uploadUrl, {
    method: "POST",
    body: formData,
  });
  const data = (await res.json().catch(() => null)) as {
    secure_url?: string;
    error?: { message?: string };
  } | null;
  if (!res.ok || !data?.secure_url) {
    throw new Error(
      typeof data?.error?.message === "string" ? data.error.message : "CV upload failed"
    );
  }
  return data.secure_url;
}
