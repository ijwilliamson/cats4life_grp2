import './CheckoutForm.css'

const CheckoutForm = () => {
    
    return (
        <div className="cF">
        <h1>Check out</h1>
        <form>
            <frm-group>
                <section>
                    <label htmlFor="fName">First name </label>
                    <input id="fName"  type="text"/>
                </section>
                
                <section>
                    <label htmlFor="sName">Surname </label>
                    <input id="sName"  type="text"/>
                </section>

            </frm-group>

            <section>
                    <label htmlFor="address1">Address </label>
                    <input id="address1"  type="text"/>
                </section>

        </form>
     </div>
    )

}

export default CheckoutForm