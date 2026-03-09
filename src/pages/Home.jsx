import { useState, useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { toCamelCase } from '../utils/helpers'
import ToolCard from '../components/ToolCard'
import { toolsData, toolsByCategory } from '../tools/toolsData'
import '../styles/Pages.css'

export default function Home() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTools = useMemo(() => {
    let filtered = toolsData

    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory)
    }

    if (searchTerm) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(tool => {
        const titleTranslated = t(`tools.${tool.id.replace(/-/g, '')}.title`).toLowerCase()
        return titleTranslated.includes(search) || tool.keywords.includes(search)
      })
    }

    return filtered
  }, [selectedCategory, searchTerm, language, t])

  const popularTools = toolsData.slice(0, 6)
  const categories = Object.keys(toolsByCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>{t('home.title')}</h1>
            <h2>{t('home.subtitle')}</h2>
            <p>{t('home.description')}</p>
            <div className="search-container">
              <input
                type="text"
                placeholder={t('home.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setSelectedCategory(null)
                }}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tools */}
      <section id="popular" className="section">
        <div className="container">
          <h2 className="section-title">⭐ {t('home.popular')}</h2>
          <div className="grid">
            {popularTools.map((tool) => (
              <ToolCard
                key={tool.id}
                id={tool.id}
                icon={tool.icon}
                title={t(`tools.${toCamelCase(tool.id)}.title`)}
                description={t(`tools.${toCamelCase(tool.id)}.description`)}
                category={t(`categories.${tool.category.toLowerCase()}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="section">
        <div className="container">
          <h2 className="section-title">📂 {t('home.categories')}</h2>
          <div className="categories-container">
            <button
              className={`category-btn ${!selectedCategory ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(null)
                setSearchTerm('')
              }}
            >
              {t('home.allTools')} ({toolsData.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category)
                  setSearchTerm('')
                }}
              >
                {t(`categories.${category.toLowerCase()}`)} ({toolsByCategory[category].length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section">
        <div className="container">
          <div className="grid">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <ToolCard
                  key={tool.id}
                  id={tool.id}
                  icon={tool.icon}
                  title={t(`tools.${toCamelCase(tool.id)}.title`)}
                  description={t(`tools.${toCamelCase(tool.id)}.description`)}
                  category={t(`categories.${tool.category.toLowerCase()}`)}
                />
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-dark)' }}>
                  {language === 'en' ? 'No tools found matching your search.' : 'No se encontraron herramientas que coincidan con tu búsqueda.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ backgroundColor: 'rgba(0, 212, 255, 0.05)' }}>
        <div className="container">
          <h2 className="section-title">✨ {language === 'en' ? 'Features' : 'Características'}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>{t('home.features.fast')}</h3>
              <p>{t('home.features.fastDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>{t('home.features.private')}</h3>
              <p>{t('home.features.privateDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎁</div>
              <h3>{t('home.features.free')}</h3>
              <p>{t('home.features.freeDesc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>{language === 'en' ? 'Completely Free' : 'Completamente Gratuito'}</h3>
              <p>{language === 'en' ? 'No ads, no premium features. All tools are free forever' : 'Sin anuncios, sin funciones premium. Todas las herramientas son gratis para siempre'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
