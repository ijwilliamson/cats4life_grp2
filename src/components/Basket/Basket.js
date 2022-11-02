import "./Basket.css";

const Basket = (props) => {
  //props basketState - array

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

  return (
    <div className="overlay">
      <div className="basket">
        {buildBasketJSX()}
        <div className="footer">
        <button></button>
        <button></button>
      </div>
      </div>
      
    </div>
  
  )
};

export default Basket;
