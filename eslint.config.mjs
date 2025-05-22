import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  { files: ['src/**/*.{js,mjs,cjs,jsx}', 'webpack.config.js'], plugins: { js }, extends: ['js/recommended'],
    rules: {  
      'babel/new-cap': 0,
      'new-cap': [0, {'newIsCap': false, 'capIsNew': false}],
      'no-console': 'off',
      'quotes': [
        'error',
        'single',
      ],
      'indent': ['error', 2],
      // we want to avoid useless spaces
      'no-multi-spaces': ['error'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
    },
    languageOptions: { 
      globals: globals.browser,
      sourceType: "commonjs"
    }
  },
  pluginReact.configs.flat.recommended
]);
