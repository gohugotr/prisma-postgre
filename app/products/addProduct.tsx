const AddProduct = () => {
  return (
    <div>
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Add New Product</h3>
          <form>
            <div className='w-full form-control'>
              <label className='font-bold label'>Product Name</label>
              <input className='input input-bordered' placeholder='Product Name' />
            </div>
            <div className='w-full form-control'>
              <label className='font-bold label'>Price</label>
              <input className='input input-bordered' placeholder='Price' />
            </div>
            <div className='w-full form-control'>
              <label className='font-bold label'>Brand</label>
              <select className='w-full max-w-xs select select-bordered'>
                <option disabled selected>
                  Marka Seçiniz
                </option>
                <option>Apple</option>
                <option>Nike</option>
                <option>Samsung</option>
              </select>
            </div>
            <div className='modal-action'>
              <button type='button' className="btn">Close</button>
              <button type='submit' className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
