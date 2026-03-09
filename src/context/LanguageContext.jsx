import { createContext, useContext, useState } from 'react'
import { translations } from '../translations/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Try to get saved language from localStorage
    const saved = localStorage.getItem('toolsverse-language')
    return saved || 'en'
  })

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('toolsverse-language', newLanguage)
  }

  const t = (path) => {
    const keys = path.split('.')
    let value = translations[language]
    
    for (const key of keys) {
      value = value?.[key]
    }
    
    return value || path
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
