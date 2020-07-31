import React from 'react';
import './App.css';
import Product from './components/product.jsx';
import axios from 'axios';

function App() {
  const [state, setState] = React.useState({ stockList:[] })
  const [cart, setCart] = React.useState({ cart:[], totalAmount:0 })

  var getData = async () => {
    await axios.get("/read")
    .then(response =>{
      JSON.parse(response.data).map((item) => {
        let a = state.stockList;
        a.push(item);
        setState({...state}, {stockList:a});
      })
      console.log(state);
    }).catch(err => { console.log("Error occured!"); throw err });
  }

  var handleAddToCart = (doc) => {
    if(doc.inStock) {
      setCart(prevCart =>({
        cart: [...prevCart.cart, doc],
        totalAmount: parseInt(prevCart.totalAmount + doc.price)
      }));
      console.log(cart);
    }
    else {
      alert("Product Not Available!")
    }
  }

  var resetCart = () => {
    if(cart.totalAmount>0) {
      setCart({cart:[], totalAmount:0})
    }
  }

  React.useEffect(() => {
    getData();
  } ,[]);
  
  return (
    <React.Fragment>
    <div>
    {cart.totalAmount > 0 ?
      <p><strong>Total Amount:</strong> {cart.totalAmount}</p> :
      null}
    {cart.totalAmount>0 ? <button onClick={resetCart}>Clear cart!</button> : null}
    </div>
    <div>
      {state.stockList.map((stockItem => {
        return(
          <Product
            title={stockItem.title}
            inStock={stockItem.inStock}
            url={stockItem.url}
            desc={stockItem.desc}
            price={stockItem.price}
            handleAddToCart={handleAddToCart}
          />
        );
      }))}
    </div>
    </React.Fragment>
  )
}

export default App;
