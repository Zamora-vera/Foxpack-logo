export const APP_STORE_URL = "https://apps.apple.com/do/app/foxpack/id6502532570";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.jtejeda.FoxPack&hl=es_DO";

export type Platform = "ios" | "android" | "desktop";

export const DETECTION_ORDER: Platform[] = ["ios", "android", "desktop"];

export const detectPlatform = (): Platform => {
  if (typeof navigator === "undefined") return "desktop";

  const ua = navigator.userAgent || "";
  const maxTouchPoints = navigator.maxTouchPoints ?? 0;

  // iPadOS 13+ se identifica como Macintosh pero sí tiene pantalla táctil.
  const isIPadOs = /Macintosh|Mac OS X/.test(ua) && maxTouchPoints > 1;
  if (/iPad|iPhone|iPod/.test(ua) || isIPadOs) return "ios";

  if (/Android/i.test(ua)) return "android";

  return "desktop";
};

export const isInAppBrowser = (): boolean => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /FBAN|FBAV|FB_IAB|Instagram|Line\/|WhatsApp|Twitter|Snapchat|TikTok|Pinterest/i.test(ua);
};

export const readPlatformOverride = (): Platform | null => {
  if (typeof window === "undefined") return null;
  const value = new URLSearchParams(window.location.search).get("os");
  if (value === "ios" || value === "android" || value === "desktop") return value;
  return null;
};

export const storeUrlFor = (platform: Platform): string =>
  platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;

export const storeNameFor = (platform: Platform): string =>
  platform === "ios" ? "App Store" : "Google Play";

export const storeShortNameFor = (platform: Platform): string =>
  platform === "ios" ? "iOS" : "Android";
