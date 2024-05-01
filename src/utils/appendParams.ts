export const appendParams = (URL: string, params: { [paramName: string]: any }) => {
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue !== undefined) {
      if (typeof paramValue === "boolean") {
        paramValue = paramValue ? 1 : 0
      }
      URL += `&${paramName}=${paramValue}`
    }
  })
  return URL
}
