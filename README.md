# ToolsVerse

Free Online Tools for Everyone - A modern React + Vite application with 20 free online tools.

## 🚀 Features

- **20 Free Tools** across 4 categories:
  - 5 Calculators (Age, Percentage, BMI, Simple Interest, Days Between)
  - 5 Text Tools (Word Counter, Character Counter, Case Converter, Space Remover, Text Reverser)
  - 5 Generators (Password, Name, Username, Random Number, Color)
  - 5 Converters (Celsius-Fahrenheit, Kilometers-Miles, MB-GB, JPG-PNG, PNG-JPG)

- **Modern Design**: Dark theme with cyan accent colors, fully responsive
- **Fast Performance**: Built with Vite for instant development and production builds
- **Privacy First**: All calculations happen in your browser - no data sent to servers
- **SEO Optimized**: Meta tags, semantic HTML, and fast loading times
- **Mobile Friendly**: Responsive design works perfectly on all devices

## 📋 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 5
- **Router**: React Router v6
- **Styling**: Pure CSS with modern features (CSS Grid, Flexbox, Gradients)
- **No Backend Required**: All tools run client-side with JavaScript

## 🛠️ Installation

1. Clone or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

## 🚀 Running the Project

### Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173/`

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ToolsVerse/
├── src/
│   ├── components/          # Reusable components
│   │   ├── ToolCard.jsx
│   │   └── ToolCard.css
│   ├── layout/              # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── ToolPage.jsx
│   │   └── NotFound.jsx
│   ├── tools/               # Tool implementations
│   │   ├── toolsData.js     # Tool configurations
│   │   ├── AgeCalculator.jsx
│   │   ├── PercentageCalculator.jsx
│   │   ├── BMICalculator.jsx
│   │   ├── SimpleInterest.jsx
│   │   ├── DaysBetween.jsx
│   │   ├── WordCounter.jsx
│   │   ├── CharacterCounter.jsx
│   │   ├── CaseConverter.jsx
│   │   ├── SpaceRemover.jsx
│   │   ├── TextReverser.jsx
│   │   ├── PasswordGenerator.jsx
│   │   ├── NameGenerator.jsx
│   │   ├── UsernameGenerator.jsx
│   │   ├── RandomNumber.jsx
│   │   ├── ColorGenerator.jsx
│   │   ├── CelsiusFahrenheit.jsx
│   │   ├── KilometersMiles.jsx
│   │   ├── MBtoGB.jsx
│   │   ├── JPGtoPNG.jsx
│   │   └── PNGtoJPG.jsx
│   ├── styles/              # Global and page styles
│   │   ├── ToolStyles.css
│   │   └── Pages.css
│   ├── App.jsx              # Main app component
│   ├── App.css
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## ✨ Available Tools

### Calculators
- **Age Calculator**: Calculate age in years, months, and days
- **Percentage Calculator**: Calculate percentages and percentage changes
- **BMI Calculator**: Calculate Body Mass Index with health categories
- **Simple Interest Calculator**: Calculate simple interest on loans/investments
- **Days Between**: Calculate days between two dates

### Text Tools
- **Word Counter**: Count words, characters, sentences, paragraphs
- **Character Counter**: Count characters with/without spaces
- **Case Converter**: Convert text between different cases (UPPER, lower, Title, camelCase, snake_case, etc.)
- **Space Remover**: Remove extra spaces from text
- **Text Reverser**: Reverse text, words, lines, or sentences

### Generators
- **Password Generator**: Generate strong, secure passwords
- **Name Generator**: Generate random first and last names
- **Username Generator**: Generate cool usernames for social media
- **Random Number Generator**: Generate random numbers in a range
- **Color Generator**: Generate random colors in HEX and RGB formats

### Converters
- **Celsius to Fahrenheit**: Convert temperature units
- **Kilometers to Miles**: Convert distance units
- **MB to GB**: Convert file sizes
- **JPG to PNG**: Convert image formats (client-side)
- **PNG to JPG**: Convert image formats with quality control

## 🎨 Design Features

- **Modern Color Scheme**: Dark blue primary, cyan accents
- **Responsive Grid Layout**: Auto-fit grid that scales on all devices
- **Smooth Animations**: Transitions and hover effects
- **Accessibility**: Semantic HTML, proper contrast ratios
- **Performance**: Optimized CSS, minimal bundle size
- **Search Functionality**: Search tools by name or keywords
- **Category Filtering**: Browse tools by category

## 🔒 Privacy & Security

- All computations happen in your browser
- No data is sent to external servers
- No cookies or tracking
- No user accounts required
- Completely free to use

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Future Enhancements

- More tools (QR code generator, PDF converter, etc.)
- Dark/Light theme toggle
- Tool favorites/bookmarks
- Export results to files
- API integration for more complex tools
- Analytics and usage tracking (optional)
- Multi-language support
- Progressive Web App (PWA) features

## 📄 License

Open source project - feel free to use, modify, and distribute.

## 💬 Feedback

For suggestions, bug reports, or feature requests, please feel free to submit an issue or contact the project maintainers.

## 🙏 Credits

Built with React, Vite, and a focus on user experience and privacy.

---

**ToolsVerse** - Free Online Tools for Everyone ✨
