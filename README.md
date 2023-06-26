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
- Test veri girişini `npx prisma studio` üzerinden yapabiliriz.

## Prisma ile Products Verisini Çekme

```javascript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      price: true,
      brandId:true,
      brand: true,
    },
  })
  return res
}

const Product = async () => {
  const products = await getProducts()

  return (
    ....
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.brand.name}</td>
            </tr>
          ))}
        </tbody>
```

{/* <UpdateProduct brands={brands} product={product} /> */}