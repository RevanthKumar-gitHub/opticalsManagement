import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from './components/pages/ProtectedRoutes';
import Login from './components/pages/Login';
import PageNotFound from './components/pages/PageNotFound';

function App() {
  
  return (
    <div className='font-primary'>
      <Routes>
        <Route>
          <Route path='/' element={<Navigate to={"/app"}/>}/>
          <Route path='/app/*' element={<ProtectedRoutes/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
