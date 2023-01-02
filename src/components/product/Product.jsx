import MyImage from '../../assets/images/product_def.png';

export function Show (props) {
  const { product } = props

  const renderimage = () => {
    if (!product.product_images_list.length) {
     return <img src={MyImage} alt="logo" />
    }

     return product.product_images_list.map((image, index) => (
        <img src={image} alt='ssa' key={index} />
      ))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5 bg-light'>
          <h3 className='text-center'>Product Details</h3>
          <div className='card d-inline '>
          {renderimage()}
            <div className='card-body'>
              <h4 className='card-title'>{product.name}</h4>
              <p className='card-text'>{product.description}</p>
              <h5 className='card-text'>Price: <b>{product.price}</b></h5>
              <a href='/' className='btn btn-primary'>Explore More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
