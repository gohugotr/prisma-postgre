'use client'

import { SyntheticEvent, useState } from 'react'
import type { Brand } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

type Product = {
  id: number
  title: string
  price: number
  brandId: number
}

const UpdateProduct = ({ brands, product }: { brands: Brand[]; product: Product }) => {
  const [isOpen, setisOpen] = useState(false)
  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [brand, setBrand] = useState(product.brandId)

  // Sayfayı yenilemek için ('next/navigation' sınıfından olmalı)
  const router = useRouter()

  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault()

    // Dahili api ile axios kullanarak, product oluşturma
    await axios.patch(`/api/products/${product.id}`, {
      title: title,
      price: Number(price),
      brandId: Number(brand),
    })

    // Sayfayı yenile
    router.refresh()
    // Modal formu kapat (Add Product Modal Form)
    setisOpen(false)
  }

  const handleModal = () => {
    setisOpen(!isOpen)
  }

  return (
    <div>
      <button className='btn btn-info btn-sm' onClick={() => handleModal()}>
        Güncelle
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>{product.title} ürününü güncelle</h3>
          <form onSubmit={handleUpdate}>
            <div className='w-full form-control'>
              <label className='font-bold label'>Product Name</label>
              <input
                className='input input-bordered'
                placeholder='Product Name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='w-full form-control'>
              <label className='font-bold label'>Price</label>
              <input
                className='input input-bordered'
                placeholder='Price'
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className='w-full form-control'>
              <label className='font-bold label'>Brand</label>
              <select
                className='w-full select select-bordered'
                value={brand}
                onChange={(e) => setBrand(Number(e.target.value))}
              >
                {brands.map((brand) => {
                  return (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className='modal-action'>
              <button type='button' className='btn' onClick={() => handleModal()}>
                Close
              </button>
              <button type='submit' className='btn btn-primary'>
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct
