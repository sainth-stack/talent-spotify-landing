/**
 * Landing API configuration — migrated from legacy `talentspotify-landing-new/src/const.js`.
 * Override via NEXT_PUBLIC_* env vars in `.env.local`.
 */

/** API base (no trailing path). Use ai.talentspotify.com — ai.talentspotifyapp.com 301-redirects and breaks CORS preflight. */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://ai.talentspotify.com/api";

/** Careers/jobs API base — same as legacy `landingApiBase`. */
export const LANDING_API_BASE =
  process.env.NEXT_PUBLIC_LANDING_API_BASE ?? `${API_BASE_URL}/landing`;

/** Full URL for request-demo POST — same as legacy `baseURL`. */
export const REQUEST_DEMO_URL =
  process.env.NEXT_PUBLIC_REQUEST_DEMO_URL ?? `${LANDING_API_BASE}/requestDemo`;

/** Company ID for career-page job applications — same as legacy `companyIdForLanding`. */
export const COMPANY_ID_FOR_LANDING =
  process.env.NEXT_PUBLIC_COMPANY_ID_FOR_LANDING ?? "6396f7d703546500086f0200";

/** App login URL — same as legacy `loginPage`. */
export const LOGIN_PAGE =
  process.env.NEXT_PUBLIC_LOGIN_PAGE ?? "https://ai.talentspotify.com";

export const LANDING = {
  requestDemo: REQUEST_DEMO_URL,
  contactUs: `${LANDING_API_BASE}/contactus`,
  career: `${LANDING_API_BASE}/career`,
  emailSignup: `${LANDING_API_BASE}/emailsignup`,
  jobs: `${LANDING_API_BASE}/jobs`,
  jobApply: (jobId: string) => `${LANDING_API_BASE}/jobs/${jobId}/apply`,
} as const;

/** Cloudinary unsigned upload (same as legacy BrowseFilesNormal) — resume → `cvURL`. */
export const CLOUDINARY = {
  cloudName: "dbqm9svvp",
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? "ma7nge92",
  uploadUrl:
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL ??
    "https://api.cloudinary.com/v1_1/dbqm9svvp/raw/upload",
} as const;

export const MAX_CV_BYTES = 5 * 1024 * 1024;

export type ApiResult = { success: boolean; message?: string };

export type ApiJob = {
  _id: string;
  title: string;
  location?: string;
  description?: string;
  department?: string;
  status?: string;
};
