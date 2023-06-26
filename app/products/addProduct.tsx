'use client'

import { SyntheticEvent, useState } from 'react'
import type { Brand } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [isOpen, setisOpen] = useState(false)

  const handleModal = () => {
    setisOpen(!isOpen)
  }

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [brand, setBrand] = useState('')

  // Sayfayı yenilemek için ('next/navigation' sınıfından olmalı)
  const router = useRouter()

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    // Dahili api ile axios kullanarak, product oluşturma
    await axios.post('/api/products/', {
      title: title,
      price: Number(price),
      brandId: Number(brand),
    })

    // Form alanlarını temizliyoruz.
    setTitle('')
    setPrice('')
    setBrand('')

    // Sayfayı yenile
    router.refresh()
  }

  return (
    <div>
      <button className='btn btn-bordered btn-primary' onClick={() => handleModal()}>
        Add New
      </button>
      <div className={isOpen ? 'modal modal-open' : 'modal'}>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Add New Product</h3>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='w-full form-control'>
              <label className='font-bold label'>Brand</label>
              <select
                className='w-full select select-bordered'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option disabled>Marka Seçiniz</option>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
