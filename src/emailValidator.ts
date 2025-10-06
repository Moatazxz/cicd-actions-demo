const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length === 0) return false;
  return EMAIL_RE.test(trimmed);
}
