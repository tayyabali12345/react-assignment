
import { Link } from 'react-router-dom'
import MyImage from '../../assets/images/product_def.png';

export function Product ({ product, showButton }) {
  const renderimage = () => {
    if (!product.product_images_list.length) {
      return <img src={MyImage} alt="logo" />
    }

     return product.product_images_list.map((image, index) => (
       <img src={image} alt='ssa' key={index} height = {"100px"} width={"100px"}  />
      ));
  }

  return (
    <tr>
      <td>{renderimage()}</td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        {showButton && <Link to={'/product/' + product.id} className='btn btn-primary show-btn mx-4'> Show </Link>}
      </td>
    </tr>
  )
}
