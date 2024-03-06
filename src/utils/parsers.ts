/* eslint-disable @typescript-eslint/no-explicit-any */
export function removeUndefined(obj: any): any {
  const cleanObj = JSON.parse(JSON.stringify(obj))
  Object.keys(cleanObj).forEach((key) => cleanObj[key] === undefined && delete cleanObj[key])
  return cleanObj
}
