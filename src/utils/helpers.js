// Helper function to convert kebab-case to camelCase
export const toCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}
