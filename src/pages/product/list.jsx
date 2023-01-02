import { useState, useEffect } from 'react'
import Spinner from '../../components/shared/Spinner.js'
import { Show } from '../../components/product/Products.jsx'
import { ProductsApi } from '../../api/product.jsx'

const ProductIndex = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setReload] = useState(true)

  useEffect(() => {
    ProductsApi(setProducts, setReload)
  }, [])

  const renderProducts = () => {
    if (isLoading) {
      return (<Spinner />);
    }
    return (<Show products={products}/>)
  }

  return (
    <div className='container'>
      <h2 className='text-center pt-4 pb-4'>All Products</h2>
      {renderProducts()}
    </div>
  )
}

export default ProductIndex
