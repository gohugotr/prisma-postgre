'use client'

import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

type Product = {
  id: number
  title: string
  price: number
  brandId: number
}

const DeleteProduct = ({ product }: { product: Product }) => {
  const [isOpen, setisOpen] = useState(false)

  // Sayfayı yenilemek için ('next/navigation' sınıfından olmalı)
  const router = useRouter()

  const handleDelete = async (productId: number) => {
    await axios.delete(`/api/products/${productId}`)
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
      <button className='btn btn-error btn-sm' onClick={() => handleModal()}>
        Delete
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>
            {product.title} ürününü silmek istediğinizden emin misiniz?
          </h3>
          <div className='modal-action'>
            <button type='button' className='btn' onClick={() => handleModal()}>
              No
            </button>
            <button
              type='button'
              onClick={() => handleDelete(product.id)}
              className='btn btn-primary'
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteProduct
