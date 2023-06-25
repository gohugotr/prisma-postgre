export const metadata = {
  title: 'Products',
  description: 'Product List',
}

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-10 py-10">{children}</div>
}

export default ProductLayout
