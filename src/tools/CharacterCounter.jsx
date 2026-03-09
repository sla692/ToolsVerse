import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function CharacterCounter() {
  const { t } = useLanguage()
  const [text, setText] = useState('')

  const stats = {
    total: text.length,
    noSpaces: text.replace(/\s/g, '').length,
    letters: (text.match(/[a-zA-Z]/g) || []).length,
    digits: (text.match(/[0-9]/g) || []).length,
    spaces: (text.match(/\s/g) || []).length,
    special: text.replace(/[a-zA-Z0-9\s]/g, '').length
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.characterCounter.title')}</h2>
      <p className="tool-description">{t('tools.characterCounter.description')}</p>

      <div className="tool-input-group">
        <label htmlFor="text">{t('forms.enterText')}</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('forms.pasteText')}
          className="tool-textarea"
        />
      </div>

      <div className="tool-result">
        <div className="result-item">
          <span className="result-label">{t('forms.totalCharacters')}</span>
          <span className="result-value">{stats.total}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.withoutSpaces')}</span>
          <span className="result-value">{stats.noSpaces}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.letters')}</span>
          <span className="result-value">{stats.letters}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.digits')}</span>
          <span className="result-value">{stats.digits}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.spaces')}</span>
          <span className="result-value">{stats.spaces}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.specialCharacters')}</span>
          <span className="result-value">{stats.special}</span>
        </div>
      </div>
    </div>
  )
}
