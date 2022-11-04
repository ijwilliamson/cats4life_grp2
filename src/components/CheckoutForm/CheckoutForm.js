import './CheckoutForm.css'

const CheckoutForm = () => {
    
    return (
        <div className="cF">
        <h1>Check out</h1>
        <form>
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
            

        </form>
     </div>
    )

}

export default CheckoutForm