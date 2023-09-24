import { Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SignInPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>

    </>
  )
}

export default App
