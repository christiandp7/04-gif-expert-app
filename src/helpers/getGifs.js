export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JvBm02Lp0iTMFI17qH9x02gNu1R0VEaH&q=${encodeURI(category)}&limit=5`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })
  // console.log(data)
  return gifs
}