import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Login,
  Signup,
  Activation,
  Home,
  Products,
  BestSelling,
  EventsPage,
  FAQ,
} from './routes/Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

import { loadUser } from './redux/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

// new router v6.4
// const router = createBrowserRouter([
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/sign-up',
//     element: <Signup />,
//   },
//   {
//     path: '/activation/:url',
//     element: <Activation />,
//   },
// ])

// const queryClient = new QueryClient()

const App = () => {
  const { loading } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser()) // proveriti
  }, [])
  return (
    <>
      {loading ? null : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route
              path="/activation/:activation_token"
              element={<Activation />}
            />
            <Route path="/products" element={<Products />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </BrowserRouter>
      )}
    </>
  )
}
export default App
