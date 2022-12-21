// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.price * eachItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="total-order">
              <span className="order-tag">Order Total: </span>Rs {total}/-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <div>
              <button type="button" className="checkout-button d-sm-none">
                Checkout
              </button>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
