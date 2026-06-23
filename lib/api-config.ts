/** Hardcoded endpoints — same URLs as legacy landing (no env required). */
export const LANDING = {
  requestDemo:
    "https://talent-spotify-backend.vercel.app/api/landing/requestDemo",
  contactUs:
    "https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/contactus",
  career:
    "https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/career",
  emailSignup:
    "https://talent-spotify-backend-git-common-dev-talentspotify.vercel.app/api/landing/emailsignup",
} as const;

/** Cloudinary CV upload — same as legacy BrowseFilesNormal. */
export const CLOUDINARY = {
  cloudName: "dbqm9svvp",
  uploadPreset: "ma7nge92",
  uploadUrl: "https://api.cloudinary.com/v1_1/dbqm9svvp/raw/upload",
} as const;

export type ApiResult = { success: boolean; message?: string };
