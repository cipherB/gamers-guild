export const slug = (title:string) => {
  return title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/\s+/g,'-').toLowerCase()
}