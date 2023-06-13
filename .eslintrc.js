module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  overrides: [
    {
      files: ['**/*.test.js'], // Застосовуємо правило тільки до файлів з розширенням .test.js
      rules: {
        'no-console': 'off' // Вимикаємо правило no-console для тестових файлів
      }
    }
  ],
  plugins: ['jest']
};
