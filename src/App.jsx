import { Toaster } from 'react-hot-toast'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  return (
    <>
      
      <h1 className='text-4xl mt-2 text-center font-bold'>Course Registration</h1>
      <Home></Home>
      <Toaster position='top-center'></Toaster>


      
    </>
  )
}

export default App
