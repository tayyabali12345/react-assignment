import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductApi } from '../../api/product.jsx'
import Spinner from '../../components/shared/Spinner.js'
import { Show } from '../../components/product/Product.jsx'

const ProductShow = () => {
  const [reload, setReload] = useState(true)
  const [product, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    ProductApi(setProduct, params.id, setReload)
  }, [params.id])

  const renderProduct = () => {
    if (reload){
      return <Spinner />
    }
    return <Show product={product} />
  }

  return (
    renderProduct()
  )
}

export default ProductShow
