import './App.css'
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Header/Profile/Profile.jsx';
import NavBar from './components/Header/NavBar/NavBar.jsx';
import Diary from './components/Header/MyDiary/Diary.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Login from './components/Login/Login.jsx';

function App() {


  return (
    <>

      <NavBar />

      <Routes>
      
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile' element={<Profile />}/> 
      <Route path='/diary' element={<Diary />}/>
      <Route path='/*' element={<NotFound />}/>

      </Routes>

    </>
  )
}

export default App
