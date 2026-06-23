import { CLOUDINARY, LANDING, type ApiResult } from "./api-config";

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
  return postJson<ApiResult>(LANDING.requestDemo, {
    firstName,
    secondName,
    businessEmail: fields.workEmail.trim(),
    phoneNumber: fields.phone.trim(),
    sizeOfOrganization: fields.companySize,
    region: fields.region ?? "Asia Pacific",
  });
}

export async function submitEmailSignup(email: string): Promise<ApiResult> {
  return postJson<ApiResult>(LANDING.emailSignup, { email: email.trim() });
}

export async function submitContactUs(fields: {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}): Promise<ApiResult> {
  return postJson<ApiResult>(LANDING.contactUs, fields);
}

export async function submitCareerApplication(fields: {
  name: string;
  linkedinURL: string;
  email: string;
  phone: string;
  cvURL: string;
}): Promise<ApiResult> {
  return postJson<ApiResult>(LANDING.career, fields);
}

export async function uploadCvToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY.uploadPreset);

  const res = await fetch(CLOUDINARY.uploadUrl, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("CV upload failed");
  const data = (await res.json()) as { secure_url?: string };
  if (!data.secure_url) throw new Error("CV upload failed");
  return data.secure_url;
}
