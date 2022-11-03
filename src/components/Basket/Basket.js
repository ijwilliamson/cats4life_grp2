import "./Basket.css";

const Basket = (props) => {
  //props 
  //basketState - array
  //visible - bool
  //toggle - fn

  const buildBasketJSX = () => {
    
    if(typeof props.basketState === "undefined"){
      // if the basketState does not exist then return no items
      console.log("no items")
      return (<div className="basketItems"><p>There are no cats in your basket</p></div>)
    }

    console.log(props.basketState)
    
    let basketJSX = props.basketState.map((item) => {
      

      return (
        <>
          <div className="basketItems">
            <div className="photo"><img src={item.url} width="100px" alt={item.name}/></div>
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </div>
          
        </>
      );


    });

    return basketJSX;
  };

  const overlayClass = () =>{
    return (props.visible) ? "overlay" : "overlay hidden" 
  }

  const calcTotal = () => {
    let total = 0;
    for (let i=0;i<props.basketState.length; i++){
        total = ((total*10) + (Number(props.basketState[i].price)*10))/10
        console.log(total)
    }
    return total.toFixed(2);
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
          <button className="cat-description-btn" onClick={props.toggle}>Back to store</button>
          <button className="cat-description-btn">Checkout now</button>
        </div>
      </div>
    </div>
  
  )
};

export default Basket;
