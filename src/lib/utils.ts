export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/** Convert a hex color to an `rgb(r g b / a)` string for translucent fills. */
export function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.substring(0, 2), 16)
  const g = parseInt(h.substring(2, 4), 16)
  const b = parseInt(h.substring(4, 6), 16)
  return `rgb(${r} ${g} ${b} / ${a})`
}
