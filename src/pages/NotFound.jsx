import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../styles/Pages.css'

export default function NotFound() {
  const { t } = useLanguage()
  
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.description')}</p>
        <Link to="/" className="btn-back">
          {t('notFound.backHome')}
        </Link>
      </div>
    </div>
  )
}
