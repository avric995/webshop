import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Signup, Activation, Home } from './routes/Routes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

import { loadUser } from './redux/actions/userActions'
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser) // proveriti
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/activation/:activation_token" element={<Activation />} />
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
  )
}
export default App
