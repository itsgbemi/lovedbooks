'use client'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart()

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleRemoveItem = (productId) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      removeFromCart(productId)
    }
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 15 ? 0 : 4.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <main>
        <div className="container">
          <div className="empty-cart">
            <h1>Your Cart is Empty</h1>
            <p>Looks like you haven't added any books to your cart yet.</p>
            <Link href="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="breadcrumb">
        <div className="container">
          <Link href="/">Home</Link> &gt; 
          <span>Shopping Cart</span>
        </div>
      </div>

      <div className="cart-page">
        <div className="container">
          <div className="cart-header">
            <h1>Shopping Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</h1>
            <button onClick={clearCart} className="clear-cart-btn">
              Clear Cart
            </button>
          </div>

          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <div 
                      className="book-image" 
                      style={{backgroundImage: `url(${item.image})`}}
                    ></div>
                  </div>
                  
                  <div className="item-details">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-author">by {item.author}</p>
                    <p className="item-condition">Condition: {item.condition}</p>
                    
                    <div className="item-actions">
                      <div className="quantity-controls">
                        <label>Qty:</label>
                        <div className="quantity-selector">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleRemoveItem(item.id)}
                        className="remove-item-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="item-price">
                    <div className="price">{item.price}</div>
                    <div className="item-total">
                      ${(parseFloat(item.price.replace('from $', '')) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                <div className="summary-row">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                {subtotal < 15 && (
                  <div className="shipping-notice">
                    Add ${(15 - subtotal).toFixed(2)} more for FREE shipping!
                  </div>
                )}

                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
                
                <Link href="/" className="continue-shopping-link">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
