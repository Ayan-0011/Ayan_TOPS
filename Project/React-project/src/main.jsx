import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './Context/DataContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from "react-scroll-to-top";



// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <DataProvider>
      <CartProvider>
        <App />
        <ScrollToTop color='white' smooth style={{ backgroundColor: '#fa2d37', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, borderRadius: 50, padding: 10 }} />
        <ToastContainer
          position="bottom-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </CartProvider>
    </DataProvider>
  </ClerkProvider>)
//  {/* </StrictMode>, */}

