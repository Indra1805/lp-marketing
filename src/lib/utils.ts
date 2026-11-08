export function cn(...values: (string | false | null | undefined)[]) { return values.filter(Boolean).join(' '); }
export function titleCase(value: string) { return value.replace(/-/g,' ').replace(/\b\w/g, c => c.toUpperCase()); }
