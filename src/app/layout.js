import './globals.css'
export const metadata = {
  title: 'New & Preowned Books | Buy Cheap Books Online at LovedBooks',
  description: 'Buy new and preowned books at LovedBooks',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
