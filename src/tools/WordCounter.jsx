import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

export default function WordCounter() {
  const { t } = useLanguage()
  const [text, setText] = useState('')

  const stats = {
    characters: text.length,
    charactersNoSpaces: text.replace(/\s/g, '').length,
    words: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
    lines: text === '' ? 0 : text.split('\n').length,
    sentences: text.split(/[.!?]+/).filter(s => s.trim().length > 0).length,
    paragraphs: text.split(/\n\n+/).filter(p => p.trim().length > 0).length
  }

  const readingTime = Math.ceil(stats.words / 200) // Average reading speed 200 words per minute

  return (
    <div className="tool-container">
      <h2>{t('tools.wordCounter.title')}</h2>
      <p className="tool-description">{t('tools.wordCounter.description')}</p>

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
          <span className="result-label">{t('forms.characters')}</span>
          <span className="result-value">{stats.characters}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.charactersNoSpaces')}</span>
          <span className="result-value">{stats.charactersNoSpaces}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.words')}</span>
          <span className="result-value">{stats.words}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.sentences')}</span>
          <span className="result-value">{stats.sentences}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.paragraphs')}</span>
          <span className="result-value">{stats.paragraphs}</span>
        </div>
        <div className="result-item">
          <span className="result-label">{t('forms.readingTime')}</span>
          <span className="result-value">{readingTime} min</span>
        </div>
      </div>
    </div>
  )
}
