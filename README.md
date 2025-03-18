# Criação do projeto Next.js

Este projeto é uma integração com o Google Gemini para realizar entrevistas automatizadas. A seguir estão os passos para configurar o ambiente de desenvolvimento:

## Passos para configuração

### 1. Criação do projeto Next.js
```bash
npx create-next-app@latest --typescript --use-npm
```

### 2. Acesse o diretório do projeto
```bash
cd nome-do-projeto
```

### 3. Instale o TailwindCSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 4. Instale tsx
```bash
npm install tsx --save-dev
```

### 5. Rodar migrate
```bash
prisma migrate dev
```

### 5. Preencha o banco de dados com os dados iniciais
```bash
npx prisma db seed
```

### 6. Rodar o frontend
```bash
npm run dev
```

### 7. Link da aplicação na Vercel
```bash
https://vocegpt-omega.vercel.app/
```