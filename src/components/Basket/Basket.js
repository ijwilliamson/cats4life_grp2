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
    let total = 0;
    const basketJSX = props.basketState.map((item) => {
      total += item.price;
      return (
        <>
          <div  className="basketItems">
            <div>{/* <image></image> */}</div>
            <div>{/* <price></price> */}</div>
          </div>
          <div>total: {total}</div>
        </>
      );
    });

    return basketJSX;
  };

  const overlayClass = () =>{
    return (props.visible) ? "overlay" : "overlay hidden" 
  }

  return (
    <div className={overlayClass()}>
      <div className="basket">
        {buildBasketJSX()}
        <div className="footer">
        <button onClick={props.toggle}>Back to store</button>
        <button className="primary">Checkout now</button>
        
      </div>
      </div>
      
    </div>
  
  )
};

export default Basket;
