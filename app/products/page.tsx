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
  //console.log(products)

  return (
    <div>
      <table className='table w-full'>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th className='text-center'>Actions</th>
          </tr>
        </thead>
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
      </table>
    </div>
  )
}

export default Product
