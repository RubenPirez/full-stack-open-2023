### https://fullstackopen.com/es

INICIAR PROYECTO EN REACT CON VITE

**Automatic Start**

Sustituir "project-name" por el nombre del proyecto\
npm create vite@latest project-name -- --template react\
npm install\
npm run dev

**Manual Start**

npm create vite@latest

-> nombre del proyecto -> React -> JavaScript + SWC o TypeScript + SWC

-> seguir las indicaciones -> entrar en la carpeta del proyecto ->\

npm install\
npm run dev

main.jsx -> PUNTO DE ENTRADA DE LA APLICACIÓN

### Install resources in main project (dependencies)
**__Start Json Server__**

npx json-server --port 3001 --watch db.json

**Install Axios**

npm install axios

**Add json server like devPendencies and add script**
```

npm install json-server --save-dev

"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "server": "json-server -p3001 --watch db.json"
    },
```


