module.exports = {
  parserOptions: {
    ecmaVersion: 2021, // Versión de ECMAScript que estás utilizando
    sourceType: 'module', // Si usas import/export
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Si usas Prettier
    'plugin:next/recommended', // Agregar el plugin de Next.js
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    browser: true, // Si trabajas en el navegador
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React que estás utilizando
    },
  },
  rules: {
    'react/prop-types': 'off', // Si no usas PropTypes
    'no-unused-vars': 'warn', // Puedes cambiarlo según tus preferencias
    'react/react-in-jsx-scope': 'off', // Desactiva la regla si usas React 17+
    'jsx-a11y/img-redundant-alt': 'off', // Si no te importa la advertencia de alt redundante
    'no-dupe-keys': 'off', // Si deseas desactivar las duplicaciones de claves de objetos
  },
};
