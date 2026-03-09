import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Navbar.css'

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">⚙️ ToolsVerse</span>
        </Link>
        <div className="navbar-center">
          <a href="/#categories" className="nav-link">{t('navbar.tools')}</a>
          <a href="/#popular" className="nav-link">{t('navbar.popular')}</a>
        </div>
        <div className="navbar-right">
          <span className="tagline">{t('navbar.tagline')}</span>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
          </button>
        </div>
      </div>
    </nav>
  )
}
