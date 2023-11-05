export function limitCharacters(str: string, limit: number) {
  if (str.length <= limit) return str
  return `${str.slice(0, limit - 3)}...`
}
