import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../styles/ToolStyles.css'

const nouns = ['shadow', 'tiger', 'dragon', 'phoenix', 'witch', 'wizard', 'knight', 'wizard', 'ninja', 'pirate', 'cyborg', 'ghost', 'spirit', 'demon', 'angel', 'rogue', 'sage', 'sage', 'monk', 'warrior']
const adjectives = ['silent', 'fierce', 'swift', 'mystic', 'dark', 'bright', 'wild', 'cool', 'epic', 'ancient', 'cosmic', 'digital', 'cyber', 'quantum', 'stellar', 'solar', 'lunar', 'royal', 'lucky', 'supreme']
const verbs = ['strike', 'hunt', 'kill', 'destroy', 'rule', 'reign', 'soar', 'fly', 'strike', 'blast', 'smash', 'crash', 'rage', 'storm', 'shock', 'rock', 'roll', 'shake', 'quake']

export default function UsernameGenerator() {
  const { t } = useLanguage()
  const [usernames, setUsernames] = useState([])
  const [count, setCount] = useState(5)
  const [style, setStyle] = useState('adjnoun')

  const generateUsernames = () => {
    const generated = []
    for (let i = 0; i < count; i++) {
      let username
      if (style === 'adjnoun') {
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)]
        const noun = nouns[Math.floor(Math.random() * nouns.length)]
        const num = Math.floor(Math.random() * 999)
        username = `${adj}${noun}${num}`
      } else if (style === 'nounverb') {
        const noun = nouns[Math.floor(Math.random() * nouns.length)]
        const verb = verbs[Math.floor(Math.random() * verbs.length)]
        const num = Math.floor(Math.random() * 999)
        username = `${noun}${verb}${num}`
      } else {
        const words = [adjectives, nouns, verbs]
        username = words.map(w => w[Math.floor(Math.random() * w.length)]).join('') + Math.floor(Math.random() * 99)
      }
      generated.push(username)
    }
    setUsernames(generated)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(usernames.join('\n'))
    alert(t('common.copiedToClipboard'))
  }

  const styleOptions = {
    adjnoun: t('forms.adjectiveNoun'),
    nounverb: t('forms.nounVerb'),
    mixed: t('forms.mixed')
  }

  return (
    <div className="tool-container">
      <h2>{t('tools.usernameGenerator.title')}</h2>
      <p className="tool-description">{t('tools.usernameGenerator.description')}</p>

      <div className="tool-input-row">
        <div className="tool-input-group">
          <label htmlFor="style">{t('forms.style')}:</label>
          <select id="style" value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="adjnoun">{styleOptions.adjnoun}</option>
            <option value="nounverb">{styleOptions.nounverb}</option>
            <option value="mixed">{styleOptions.mixed}</option>
          </select>
        </div>
        <div className="tool-input-group">
          <label htmlFor="count">{t('forms.numberOfUsernames')}</label>
          <input
            id="count"
            type="number"
            min="1"
            max="50"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </div>
      </div>

      <button onClick={generateUsernames} className="btn-primary">{t('common.generate')}</button>

      {usernames.length > 0 && (
        <div>
          <div className="tool-result" style={{ marginBottom: '20px' }}>
            {usernames.map((username, idx) => (
              <div key={idx} className="result-item">
                <span className="result-value" style={{ fontSize: '1.2rem' }}>@{username}</span>
              </div>
            ))}
          </div>
          <button onClick={copyToClipboard} className="btn-secondary" style={{ width: '100%' }}>
            {t('common.copyAll')}
          </button>
        </div>
      )}
    </div>
  )
}
