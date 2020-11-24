export const removeProtocolFromUrl = (url: string): string =>
  url.replace(/^https?:\/\//i, '//')

export const removeHtmlTagsFromString = (htmlString: string): string =>
  htmlString.replace(/(<([^>]+)>)/gi, '')

export const checkDeviceIsMobile = (): boolean => {
  return (
    typeof navigator !== 'undefined' &&
    /Android|Mobi/i.test(navigator.userAgent)
  )
}
