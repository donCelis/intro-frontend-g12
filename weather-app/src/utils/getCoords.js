export const getCoords = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve(coords)
      },
      (error) => {
        reject(error)
      },
      {
        enableHighAccuracy: true
      }
    )
  })
}
