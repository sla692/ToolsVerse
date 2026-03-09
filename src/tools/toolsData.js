// All tools data with their information
export const toolsData = [
  // Calculators
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    category: 'Calculators',
    icon: '🎂',
    description: 'Calculate your exact age in years, months, and days',
    keywords: 'age calculator, birthday calculator, how old am I',
    component: 'AgeCalculator'
  },
  {
    id: 'percentage-calculator',
    title: 'Percentage Calculator',
    category: 'Calculators',
    icon: '📊',
    description: 'Calculate percentages, percentage change, and percentage increase/decrease',
    keywords: 'percentage calculator, percent off, percentage difference',
    component: 'PercentageCalculator'
  },
  {
    id: 'bmi-calculator',
    title: 'BMI Calculator',
    category: 'Calculators',
    icon: '⚖️',
    description: 'Calculate your Body Mass Index (BMI) and health category',
    keywords: 'BMI calculator, body mass index, BMI calculator metric',
    component: 'BMICalculator'
  },
  {
    id: 'simple-interest',
    title: 'Simple Interest Calculator',
    category: 'Calculators',
    icon: '💰',
    description: 'Calculate simple interest on your investments or loans',
    keywords: 'simple interest calculator, interest calculation, loan calculator',
    component: 'SimpleInterest'
  },
  {
    id: 'days-between',
    title: 'Days Between Dates',
    category: 'Calculators',
    icon: '📅',
    description: 'Calculate the number of days between two dates',
    keywords: 'days between dates, date calculator, days difference',
    component: 'DaysBetween'
  },
  
  // Text Tools
  {
    id: 'word-counter',
    title: 'Word Counter',
    category: 'Text',
    icon: '📝',
    description: 'Count words, characters, sentences, and paragraphs in real-time',
    keywords: 'word counter, character counter, word count tool',
    component: 'WordCounter'
  },
  {
    id: 'character-counter',
    title: 'Character Counter',
    category: 'Text',
    icon: '🔤',
    description: 'Count characters including and excluding spaces',
    keywords: 'character counter, character count, text length',
    component: 'CharacterCounter'
  },
  {
    id: 'case-converter',
    title: 'Case Converter',
    category: 'Text',
    icon: '🔤',
    description: 'Convert text to uppercase, lowercase, title case, and more',
    keywords: 'case converter, text converter, uppercase lowercase',
    component: 'CaseConverter'
  },
  {
    id: 'space-remover',
    title: 'Space Remover',
    category: 'Text',
    icon: '✂️',
    description: 'Remove extra spaces from your text',
    keywords: 'space remover, extra spaces, trim text',
    component: 'SpaceRemover'
  },
  {
    id: 'text-reverser',
    title: 'Text Reverser',
    category: 'Text',
    icon: '🔄',
    description: 'Reverse your text, word by word or character by character',
    keywords: 'text reverser, reverse text, backwards text',
    component: 'TextReverser'
  },
  
  // Generators
  {
    id: 'password-generator',
    title: 'Password Generator',
    category: 'Generators',
    icon: '🔐',
    description: 'Generate strong, secure passwords with custom options',
    keywords: 'password generator, random password, secure password',
    component: 'PasswordGenerator'
  },
  {
    id: 'name-generator',
    title: 'Name Generator',
    category: 'Generators',
    icon: '👤',
    description: 'Generate random first names and full names',
    keywords: 'name generator, random name, name ideas',
    component: 'NameGenerator'
  },
  {
    id: 'username-generator',
    title: 'Username Generator',
    category: 'Generators',
    icon: '@',
    description: 'Generate cool and unique usernames for social media and gaming',
    keywords: 'username generator, cool usernames, username ideas',
    component: 'UsernameGenerator'
  },
  {
    id: 'random-number',
    title: 'Random Number Generator',
    category: 'Generators',
    icon: '#️⃣',
    description: 'Generate random numbers within a specified range',
    keywords: 'random number generator, number generator, random integer',
    component: 'RandomNumber'
  },
  {
    id: 'color-generator',
    title: 'Color Generator',
    category: 'Generators',
    icon: '🎨',
    description: 'Generate random HEX, RGB, and HSL colors',
    keywords: 'color generator, hex color, random color, color codes',
    component: 'ColorGenerator'
  },
  
  // Converters
  {
    id: 'celsius-fahrenheit',
    title: 'Celsius to Fahrenheit',
    category: 'Converters',
    icon: '🌡️',
    description: 'Convert temperatures between Celsius and Fahrenheit',
    keywords: 'celsius to fahrenheit, temperature converter, temperature conversion',
    component: 'CelsiusFahrenheit'
  },
  {
    id: 'kilometers-miles',
    title: 'Kilometers to Miles',
    category: 'Converters',
    icon: '📏',
    description: 'Convert distances between kilometers and miles',
    keywords: 'kilometers to miles, distance converter, km to miles',
    component: 'KilometersMiles'
  },
  {
    id: 'mb-to-gb',
    title: 'MB to GB Converter',
    category: 'Converters',
    icon: '💾',
    description: 'Convert file sizes between MB and GB',
    keywords: 'MB to GB, file size converter, data size converter',
    component: 'MBtoGB'
  },
  {
    id: 'jpg-to-png',
    title: 'JPG to PNG Converter',
    category: 'Converters',
    icon: '🖼️',
    description: 'Convert images from JPG format to PNG (frontend simulation)',
    keywords: 'jpg to png, image converter, image format converter',
    component: 'JPGtoPNG'
  },
  {
    id: 'png-to-jpg',
    title: 'PNG to JPG Converter',
    category: 'Converters',
    icon: '🖼️',
    description: 'Convert images from PNG format to JPG (frontend simulation)',
    keywords: 'png to jpg, image converter, image format converter',
    component: 'PNGtoJPG'
  }
]

export const toolsByCategory = {
  'Calculators': toolsData.filter(t => t.category === 'Calculators'),
  'Text': toolsData.filter(t => t.category === 'Text'),
  'Generators': toolsData.filter(t => t.category === 'Generators'),
  'Converters': toolsData.filter(t => t.category === 'Converters')
}

export const getTool = (id) => {
  return toolsData.find(tool => tool.id === id)
}

export const getRelatedTools = (toolId, limit = 4) => {
  const currentTool = getTool(toolId)
  if (!currentTool) return []
  
  return toolsData
    .filter(t => t.id !== toolId && t.category === currentTool.category)
    .slice(0, limit)
}

export const getPopularTools = () => {
  return toolsData.slice(0, 6)
}
