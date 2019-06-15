# React With Typescript

Guide how to bootstrap a react app with create-react-app + install aditional
packages and types using npm.

1. Choose your desired path to place your project and there use (on a terminal)
   the command to create a new app:
   $ create-react-app <output-folder-name> --typescript

2. $ cd <output-project-folder>

3. (optional) $ npm start

4. Checkout and edit the ~/tsconfig.json

5. Adding Eslint to the project:
   $ npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-prettier eslint-plugin-prettier prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript

6. Create a ~/.eslintrc.js (optionally you can copy this repo eslintrc.js)

7. Editor options (For VS Code):
   "eslint.autoFixOnSave": true,
   "eslint.validate": [
     "javascript",
     "javascriptreact",
     { "language": "javascript", "autoFix": true },
     { "language": "javascriptreact", "autoFix": true }
   ],

8. $ npm install redux react-redux

9. $ npm install --save-dev @types/react-redux

10. $ npm install typesafe-actions

11. $ npm install axios redux-saga

12. $ npm install -D @types/redux-saga

