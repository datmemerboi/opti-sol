import React from 'react';

export default function Product(props) {
  const [product, setProduct] = React.useState({show:false})

  var handleClick = (event) => {
    setProduct(prev =>({
      show : !(prev.show)
    }))
  }
  var handleAddToCart = (event) => {
    props.handleAddToCart(props)
  }
  return(
    <div className="item" key={props.title}>
    <h3>{props.title}</h3>
    {
      props.inStock ?
      <span className="green">Current Available</span> :
      <span className="red">Not Available</span>
    }
    { product.show ? <React.Fragment>
      <p><strong>Price:</strong> {props.price}</p>
      <p><a href={props.url}>{props.url}</a></p>
      </React.Fragment> :
      null
    }
    <br/>
    <button className="btn" onClick={handleClick}>Expand</button>
    <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}
