module.exports = {
   root: true,
   parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaFeatures: {
         jsx: true;
       },
   },
   plugins: [
     '@typescript-eslint',
   ],
   extends: [
     'eslint:recommended',
     'plugin:@typescript-eslint/recommended',
   ],
 }