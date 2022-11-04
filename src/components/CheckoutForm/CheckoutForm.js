import './CheckoutForm.css'
import { useNavigate } from 'react-router-dom';
const CheckoutForm = () => {
    const nav = useNavigate();

    const handleFormSubmit =(event) =>{
        event.preventDefault();
       
        nav("/");
    
    }


    return (
        <div className="cF">
        <h1>Check out</h1>
        <form onSubmit={handleFormSubmit}>
            <hor-group>
                <section>
                    <label htmlFor="fName">First name </label>
                    <input id="fName"  type="text"/>
                </section>
                
                <section>
                    <label htmlFor="sName">Surname </label>
                    <input id="sName"  type="text"/>
                </section>

            </hor-group>
           
            <ver-group>
                <section>
                    <label htmlFor="address1">Address </label>
                    <input id="address1"  type="text"/>
                </section>
                <section>
                    <label htmlFor="address1"></label>
                    <input id="address2"  type="text"/>
                </section>
                <section>
                    <label htmlFor="address1"></label>
                    <input id="address3"  type="text"/>
                </section>
                <section>
                    <label htmlFor="town">Town / City</label>
                    <input id="town"  type="text"/>
                </section>
                <section>
                    <label htmlFor="postcode">Postcode</label>
                    <input id="postcode"  type="text"/>
                </section>
            </ver-group>
            <ver-group>
            <section>
                    <label htmlFor="tel">Telephone </label>
                    <input id="tel"  type="text"/>
                </section>
                <section>
                    <label htmlFor="mobile">Mobile</label>
                    <input id="mobile"  type="text"/>
                </section>
                <section>
                    <label htmlFor="email">Email</label>
                    <input id="email"  type="text"/>
                </section>
                <section>
                    <label htmlFor="cEmail">Confirm Email</label>
                    <input id="cEmail"  type="text"/>
                </section>
            </ver-group>
            <div className="footer">
          
         
            <button className="cat-description-btn" type='submit' >Back to store</button>
            <button className="cat-description-btn" type='button'>Pay now</button>
           
        </div>
        </form>
     </div>
    )

}

export default CheckoutForm