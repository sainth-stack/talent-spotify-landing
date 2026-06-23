/** Production backend — single base URL for all landing APIs (same host as requestDemo). */
const API_BASE = "https://ai.talentspotifyapp.com/api";

export const LANDING = {
  requestDemo: `${API_BASE}/landing/requestDemo`,
  contactUs: `${API_BASE}/landing/contactus`,
  career: `${API_BASE}/landing/career`,
  emailSignup: `${API_BASE}/landing/emailsignup`,
} as const;

/** Cloudinary CV upload — same as legacy BrowseFilesNormal. */
export const CLOUDINARY = {
  cloudName: "dbqm9svvp",
  uploadPreset: "ma7nge92",
  uploadUrl: "https://api.cloudinary.com/v1_1/dbqm9svvp/raw/upload",
} as const;

export type ApiResult = { success: boolean; message?: string };
