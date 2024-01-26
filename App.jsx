import 'preline/preline'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import router from './router.js'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
