'use client'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartItemsCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsOpen(true)
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [cartItems.length])

  const closeSidebar = () => setIsOpen(false)

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 15 ? 0 : 4.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (!isOpen || cartItems.length === 0) return null

  return (
    <div className="cart-sidebar-overlay" onClick={closeSidebar}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-sidebar-header">
          <h3>Cart ({getCartItemsCount()} items)</h3>
          <button className="close-sidebar" onClick={closeSidebar}>×</button>
        </div>
        
        <div className="cart-sidebar-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-sidebar-item">
              <div 
                className="cart-item-image"
                style={{backgroundImage: `url(${item.image})`}}
              ></div>
              <div className="cart-item-details">
                <div className="cart-item-title">{item.title}</div>
                <div className="cart-item-author">{item.author}</div>
                <div className="cart-item-price">{item.price}</div>
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <button 
                className="remove-item"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="cart-sidebar-summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          {subtotal < 15 && (
            <div className="shipping-notice">
              Add ${(15 - subtotal).toFixed(2)} for FREE shipping!
            </div>
          )}
          <Link href="/cart" className="view-cart-btn">
            View Full Cart
          </Link>
          <button className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>

      <style jsx>{`
        .cart-sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          justify-content: flex-end;
        }
        .cart-sidebar {
          background: white;
          width: 400px;
          height: 100vh;
          display: flex;
          flex-direction: column;
          box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        }
        .cart-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #eee;
        }
        .cart-sidebar-header h3 {
          margin: 0;
          color: var(--primary-color);
        }
        .close-sidebar {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
        }
        .cart-sidebar-items {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }
        .cart-sidebar-item {
          display: flex;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .cart-item-image {
          width: 60px;
          height: 80px;
          background-size: cover;
          background-position: center;
          border-radius: 4px;
        }
        .cart-item-details {
          flex: 1;
        }
        .cart-item-title {
          font-weight: bold;
          margin-bottom: 5px;
          color: var(--primary-color);
        }
        .cart-item-author {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }
        .cart-item-price {
          color: var(--price-color);
          font-weight: bold;
          margin-bottom: 10px;
        }
        .cart-item-quantity {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cart-item-quantity button {
          background: #f0f0f0;
          border: 1px solid #ddd;
          width: 25px;
          height: 25px;
          border-radius: 3px;
          cursor: pointer;
        }
        .cart-item-quantity span {
          padding: 0 10px;
        }
        .remove-item {
          background: none;
          border: none;
          color: #ff4444;
          cursor: pointer;
          font-size: 18px;
        }
        .cart-sidebar-summary {
          padding: 20px;
          border-top: 1px solid #eee;
        }
        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          font-weight: bold;
        }
        .shipping-notice {
          background: #fff3cd;
          color: #856404;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 15px;
          text-align: center;
          font-size: 0.9rem;
        }
        .view-cart-btn, .checkout-btn {
          display: block;
          width: 100%;
          padding: 12px;
          text-align: center;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .view-cart-btn {
          background: white;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }
        .checkout-btn {
          background: var(--primary-color);
          color: white;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .cart-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
