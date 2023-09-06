import './App.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Activation from './pages/Activation'

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/activation/:activation_token" element={<Activation />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
