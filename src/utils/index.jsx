export const getVideoCode=(link) => {
     link = link?.replace("https://www.youtube.com/watch?v=", "")
     if(link?.includes('=PL')){
          return link?.split("&")[0]
     }else{
          return link
     }
}

