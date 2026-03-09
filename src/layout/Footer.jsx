import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('footer.about')}</h3>
          <p>{t('footer.aboutDesc')}</p>
        </div>
        
        <div className="footer-section">
          <h3>{t('footer.categories')}</h3>
          <ul>
            <li><a href="/#calculators">{t('categories.calculators')}</a></li>
            <li><a href="/#text-tools">{t('categories.text')}</a></li>
            <li><a href="/#generators">{t('categories.generators')}</a></li>
            <li><a href="/#converters">{t('categories.converters')}</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>{t('footer.quickLinks')}</h3>
          <ul>
            <li><a href="#privacy">{t('footer.privacyPolicy')}</a></li>
            <li><a href="#terms">{t('footer.termsService')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} ToolsVerse. {t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
