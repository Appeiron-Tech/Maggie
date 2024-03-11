/* eslint-disable @typescript-eslint/no-explicit-any */
export function removeUndefined(obj: any): any {
  const cleanObj = JSON.parse(JSON.stringify(obj))
  Object.keys(cleanObj).forEach((key) => cleanObj[key] === undefined && delete cleanObj[key])
  return cleanObj
}

export const slugifyStr = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
