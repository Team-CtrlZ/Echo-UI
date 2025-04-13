export function deepMerge<T>(base: T, override?: Partial<T>): T {
  if (!override) return base;
  return {
    ...base,
    ...Object.fromEntries(
      Object.entries(base as object).map(([key, value]) => {
        if (typeof value === "object" && override[key as keyof T]) {
          return [key, deepMerge(value, override[key as keyof T] as any)];
        }
        return [key, override[key as keyof T] ?? value];
      })
    )
  } as T;
}
