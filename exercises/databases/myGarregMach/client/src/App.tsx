import { Home } from './pages/Home';
import { Login } from './pages/Login';

import { Navigate, Route, Routes } from 'react-router-dom';
import { StaffProfile } from './pages/StaffProfile';
import { ViewStudents } from './pages/ViewStudents';

function App() {
  const gId = localStorage.getItem('gId');
  return (
    <Routes>
      <Route path="/" element={ gId ? <Navigate replace to={"/home"}></Navigate> : <Login/> }></Route>
      <Route path="/home" element={<Home/> }></Route>
      <Route path="/login" element={<Navigate replace to={"/"}/>}></Route>
      <Route path="/staffProfile" element={<StaffProfile/>}/>
      <Route path="/viewStudents" element={<ViewStudents/>} />
    </Routes>
  );
}

export default App
