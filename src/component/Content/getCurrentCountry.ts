export const getCountryFromIP = async (): Promise<string> => {
  try {
    const res = await fetch('https://ipinfo.io/json')
    const data = await res.json()
    if (data.country) return data.country.toUpperCase()
    throw new Error('IP-based geolocation failed')
  } catch (error) {
    throw new Error('IP-based geolocation failed')
  }
}

export const getCountryFromBrowserLang = () => {
  const userLang = navigator.language || navigator.languages[0] // e.g., "en-US", "es-CO"
  const countryCode = userLang.split('-')[1] // Extract country part (e.g., "US", "CO")

  if (countryCode) {
    return countryCode.toUpperCase() // Ensure uppercase format
  }
}
