
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from './pages/Landing';
import Login from './pages/Login';
import Home from './pages/Home';
import History from './pages/History';
import Calendar from './pages/Calendar';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
