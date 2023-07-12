export const getVideoCode=(link) => {
     link = link.replace("https://www.youtube.com/watch?v=", "")
     return link
}