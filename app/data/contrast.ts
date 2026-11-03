/** Text accents for light surfaces; decorative brand colors stay unchanged. */
export function readableAccent(color: string): string {
  const colors: Record<string, string> = {
    "#d96c57": "#c0432b", "#2d8a7a": "#0f766e", "#14b8a6": "#0f766e",
    "#f59e0b": "#b45309", "#a855f7": "#7e22ce", "#f43f5e": "#be123c",
  };
  return colors[color.toLowerCase()] || color;
}
