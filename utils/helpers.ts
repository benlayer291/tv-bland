export const removeProtocolFromUrl = (url: string): string =>
  url.replace(/^https?:\/\//i, '//')

export const removeHtmlTagsFromString = (htmlString: string): string =>
  htmlString.replace(/(<([^>]+)>)/gi, '')
