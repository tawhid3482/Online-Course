import dollar from '../../assets/images/dollar-sign 1.png'
import book from '../../assets/images/Frame.png'
const Cart = ({ cart, handleCart }) => {

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure><img className="h-40" src={cart.img} alt={cart.course_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cart.course_name}</h2>
                    <p>{cart.details}</p>
                    <div className="flex gap-2">
                    <img src={dollar} alt="" />
                        <p>  Price: {cart.price}</p>
                        <img src={book} alt="" />
                        <p>Credit: {cart.credit}hr</p>
                    </div>
                    <div className="card-actions w-f justify-center">
                        <button onClick={() => handleCart(cart)} className="btn btn-primary">Select</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;