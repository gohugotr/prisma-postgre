# Prisma öğren

```bash
npm run dev
# or
yarn dev
```

```bash
npx create-next-app@latest
npm i daisyui axios
```

- tailwind.config.js
  plugins: [require('daisyui')],

```bash
npm i -D prisma
npm i @prisma/client
npx prisma init
```

Bu şekilde prisma başlatılıyor `npx prisma init`

- prisma ile modelleri oluştur
- `npx prisma migrate dev`ile model postgres üzerindeki db'de oluşturuluyor.

