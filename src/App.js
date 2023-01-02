import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NotFound } from './components/notFound.js'
import ProductIndex from './pages/product/list'
import ProductShow from './pages/product/Show'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProductIndex />} />
        <Route exact path='/product/:id' element={<ProductShow />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
