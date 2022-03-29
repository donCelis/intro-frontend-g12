export const useConvertDate = (lang = 'en') => {
  const optionsDay = { weekday: 'short' }
  const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' }

  const convert = (date, options) =>
    Intl.DateTimeFormat(lang, options).format(new Date(date * 1000))

  const convertDay = (date) => convert(date, optionsDay)
  const convertDate = (date) => convert(date, optionsDate)

  return { convertDate, convertDay }
}
