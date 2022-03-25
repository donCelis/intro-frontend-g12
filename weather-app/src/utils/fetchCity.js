const { APP_API_KEY } = import.meta.env

export const fetchCity = async (city) => {
  const URI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APP_API_KEY}&cnt=4&lang=es&units=metric`
  const req = await window.fetch(URI)
  const res = await req.json()

  return res
}
