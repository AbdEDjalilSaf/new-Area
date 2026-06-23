/**
 * Check if the viewport is desktop-sized.
 * Used to conditionally render the custom cursor.
 */
export function isDesktop() {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768;
}

/**
 * Clamp a number between min and max.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Simple CSS class name merger (minimal cn utility).
 */
export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}