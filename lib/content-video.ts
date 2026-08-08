const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtu.be",
]);

const AUDIO_EXTENSIONS = new Set(["m4a", "mp3", "wav", "ogg", "aac", "flac"]);
const VIDEO_EXTENSIONS = new Set(["mp4", "webm", "ogg", "mov", "m4v"]);

export function getYouTubeVideoId(src: string): string | null {
  try {
    const url = new URL(src);
    if (!YOUTUBE_HOSTS.has(url.hostname)) return null;

    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    if (url.pathname.startsWith("/embed/")) {
      return url.pathname.split("/")[2] || null;
    }

    if (url.pathname.startsWith("/shorts/")) {
      return url.pathname.split("/")[2] || null;
    }

    return url.searchParams.get("v");
  } catch {
    return null;
  }
}

export function getYouTubeEmbedUrl(src: string): string | null {
  const id = getYouTubeVideoId(src);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}`;
}

function getExtension(src: string): string {
  const path = src.split("?")[0]?.split("#")[0] ?? src;
  const parts = path.split(".");
  return parts.length > 1 ? (parts.pop() ?? "").toLowerCase() : "";
}

export function isAudioSource(src: string): boolean {
  return AUDIO_EXTENSIONS.has(getExtension(src));
}

export function isVideoSource(src: string): boolean {
  return VIDEO_EXTENSIONS.has(getExtension(src));
}
