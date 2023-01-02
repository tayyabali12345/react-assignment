
import Table from 'react-bootstrap/Table'
import { Product } from '../../components/product/Display.jsx'

export function Show (props) {
  const { products } = props
  return (
    <Table striped bordered hover size='sm'>
    <thead>
      <tr>
      <th>Product image</th>
        <th>Product Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <Product product={product} showButton key={product.id} />
      ))}
    </tbody>
    </Table>
  )
}
