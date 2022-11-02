 import './basket.css'

 const Basket = (props) =>{
    //props basketState - array
    //array items : price, image, id

    const buildBasketJSX = () =>{
        let total = 0;
        const basketJSX = props.basketState.map((item) =>{
            total += item.price;
            return (
                <>
                    <div>
                        <div>
                            <image></image>
                        </div>
                        <div>
                            <price></price>
                        </div>
                    </div>
                    <div>
                        total: {total}
                    </div>
                </>
            )
        });
        
        return basketJSX;
      
    }


    return (
        
        <div className="basket">
            {buildBasketJSX}
        </div>
    
    )
 }

 export default Basket
