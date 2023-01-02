import axios from 'axios'

export const ProductsApi = (setProducts, setReload) => {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/products`)
    .then((response) => {
      setReload(false)
      setProducts(response.data)
    })
    .catch((error) => {
      setProducts(null)
      console.log(error)
    })
}

export const ProductApi = (setProduct, id, setReload) => {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
    .then((response) => {
      setReload(false)
      setProduct(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
