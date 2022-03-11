const getFlags = async () => {
  const req = await window.fetch('https://restcountries.com/v3.1/all')
  const res = await req.json()
  return res
}
export default getFlags
