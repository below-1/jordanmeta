export default function commitDisplayURL(url: string) {
  const newUrl = url.replace('api.', '').replace('repos/', '')
  return newUrl
}