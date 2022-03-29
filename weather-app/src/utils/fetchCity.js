const { APP_API_KEY } = import.meta.env

export const fetchCity = async ({ lat = 0, lon = 0 }) => {
  const URI = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APP_API_KEY}&cnt=4&lang=en&units=metric`
  const req = await window.fetch(URI)
  const res = await req.json()

  return res
}
