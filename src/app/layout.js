import './globals.css'
import { CartProvider } from '../context/CartContext'
import CartSidebar from '../components/CartSidebar'

export const metadata = {
  title: 'New & Preowned Books | Buy Cheap Books Online at LovedBooks',
  description: 'Buy new and preowned books at LovedBooks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}
