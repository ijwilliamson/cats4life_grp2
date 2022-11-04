import "./Basket.css";
import { useNavigate } from 'react-router-dom';
const Basket = (props) => {
  //props 
  //basketState - array
  //visible - bool
  //toggle - fn

  const nav = useNavigate();

  const buildBasketJSX = () => {
    
    if(typeof props.basketState === "undefined" || props.basketState.length===0){
      // if the basketState does not exist then return no items
    
      return (<div className="basketItems"><p>There are no cats in your basket</p></div>)
    }
    
    // build the basket JSX by mapping each item in the basket
    let basketJSX = props.basketState.map((item, index) => {
    
      return (
        
          <div className="basketItems" key={index}>
            <div className="photo"><img src={item.url} width="100px" alt={item.name}/></div>
            <div className="name">{item.name}</div>
            <div className="price">£{item.price}</div>
          </div>
          
      );

    });

    return basketJSX;
  };

  const clearBasket = () => {
    // remove all items from the basket
    props.setBasketState([]);
    // Clear local storage
    const _LocalStorageKey = "cats4life.basket";
    localStorage.setItem(_LocalStorageKey, JSON.stringify([]));
  }

  const overlayClass = () =>{
    // Get the class to use for the overlay so that it hides and shows
    return (props.visible) ? "overlay" : "overlay hidden" 
  }

  const calcTotal = () => {
    // Get the total for the basket
    let total = 0;
    for (let i=0;i<props.basketState.length; i++){
        total = ((total*10) + (Number(props.basketState[i].price)*10))/10
       
    }
    return total.toFixed(2);
  }

  const handleCheckoutClick = () => {
    
    
    nav("/checkout");
    props.toggle();
  }

  return (
    <div className={overlayClass()}>
      <div className="basket">
        
        <div className="basketItems basketHeader">
          <div className="photo">Photograph</div>
          <div className="name">Name</div>
          <div className="price">Price</div>
        </div>
        
        <div className="allItems">
          {buildBasketJSX()}
        </div>

        <div className="basketItems total">
            <div className="photo"></div>
            <div className="name"></div>
            <div className="price">Total: £{calcTotal()}</div>
        </div>

        <div className="footer">
          <button className="cat-description-btn" onClick={clearBasket}>Clear Basket</button>
          <div> 
            <button className="cat-description-btn" onClick={props.toggle}>Back to store</button>
            <button className="cat-description-btn" onClick={handleCheckoutClick}>Checkout now</button>
          </div> 
        </div>

      </div>
    </div>
  
  
  )
};

export default Basket;
