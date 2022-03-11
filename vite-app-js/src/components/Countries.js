import getFlags from '../services'

const Countries = async () => {
  const asyncGetFlags = async () => {
    const data = await getFlags()
    return await `
      <p>${data[0].name.official}</p>
    `
  }
  asyncGetFlags()
}

export default Countries
