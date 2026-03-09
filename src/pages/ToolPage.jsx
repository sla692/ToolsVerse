import { useParams } from 'react-router-dom'
import { getTool, getRelatedTools } from '../tools/toolsData'
import { useLanguage } from '../context/LanguageContext'
import { toCamelCase } from '../utils/helpers'
import ToolCard from '../components/ToolCard'
import '../styles/Pages.css'

// Import all tool components
import AgeCalculator from '../tools/AgeCalculator'
import PercentageCalculator from '../tools/PercentageCalculator'
import BMICalculator from '../tools/BMICalculator'
import SimpleInterest from '../tools/SimpleInterest'
import DaysBetween from '../tools/DaysBetween'
import WordCounter from '../tools/WordCounter'
import CharacterCounter from '../tools/CharacterCounter'
import CaseConverter from '../tools/CaseConverter'
import SpaceRemover from '../tools/SpaceRemover'
import TextReverser from '../tools/TextReverser'
import PasswordGenerator from '../tools/PasswordGenerator'
import NameGenerator from '../tools/NameGenerator'
import UsernameGenerator from '../tools/UsernameGenerator'
import RandomNumber from '../tools/RandomNumber'
import ColorGenerator from '../tools/ColorGenerator'
import CelsiusFahrenheit from '../tools/CelsiusFahrenheit'
import KilometersMiles from '../tools/KilometersMiles'
import MBtoGB from '../tools/MBtoGB'
import JPGtoPNG from '../tools/JPGtoPNG'
import PNGtoJPG from '../tools/PNGtoJPG'

const toolComponents = {
  'age-calculator': AgeCalculator,
  'percentage-calculator': PercentageCalculator,
  'bmi-calculator': BMICalculator,
  'simple-interest': SimpleInterest,
  'days-between': DaysBetween,
  'word-counter': WordCounter,
  'character-counter': CharacterCounter,
  'case-converter': CaseConverter,
  'space-remover': SpaceRemover,
  'text-reverser': TextReverser,
  'password-generator': PasswordGenerator,
  'name-generator': NameGenerator,
  'username-generator': UsernameGenerator,
  'random-number': RandomNumber,
  'color-generator': ColorGenerator,
  'celsius-fahrenheit': CelsiusFahrenheit,
  'kilometers-miles': KilometersMiles,
  'mb-to-gb': MBtoGB,
  'jpg-to-png': JPGtoPNG,
  'png-to-jpg': PNGtoJPG
}

export default function ToolPage() {
  const { toolId } = useParams()
  const { t } = useLanguage()
  const tool = getTool(toolId)
  const relatedTools = getRelatedTools(toolId)

  if (!tool) {
    return (
      <div className="tool-container">
        <h2>{t('notFound.title')}</h2>
        <p className="tool-description">{t('notFound.description')}</p>
      </div>
    )
  }

  const ToolComponent = toolComponents[toolId]

  if (!ToolComponent) {
    return (
      <div className="tool-container">
        <h2>{t('notFound.title')}</h2>
        <p className="tool-description">This tool is currently unavailable.</p>
      </div>
    )
  }

  return (
    <>
      <ToolComponent />

      {relatedTools.length > 0 && (
        <div className="related-tools" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 40px' }}>
          <h3>{t('common.relatedTools')}</h3>
          <div className="related-tools-grid">
            {relatedTools.map((relatedTool) => (
              <ToolCard
                key={relatedTool.id}
                id={relatedTool.id}
                icon={relatedTool.icon}
                title={t(`tools.${toCamelCase(relatedTool.id)}.title`)}
                description={t(`tools.${toCamelCase(relatedTool.id)}.description`)}
                category={t(`categories.${relatedTool.category.toLowerCase()}`)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Ad space */}
      <div style={{
        maxWidth: '900px',
        margin: '60px auto 0',
        padding: '40px',
        background: 'rgba(0, 212, 255, 0.05)',
        borderTop: '1px solid var(--color-border)',
        borderRadius: '0 0 12px 12px',
        textAlign: 'center'
      }}>
        <p style={{ color: 'var(--color-text-dark)' }}>{t('common.advertisement')}</p>
        <p style={{ color: 'var(--color-accent)', fontWeight: '600' }}>{t('common.adSpace')}</p>
      </div>
    </>
  )
}
