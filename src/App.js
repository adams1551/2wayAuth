import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './components/dashboard'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import PhooneVerify from './components/phoneVerify'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path = '/' element= {<LogIn />} />
          <Route path = '/register' element= {<SignUp />} />
          <Route path = '/dashboard' element= {<Dashboard />} />
          <Route path = '/phone-verify' element= {<PhooneVerify />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
