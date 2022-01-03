import './App.css';
import {BrowserRouter as Router ,Route ,Routes ,Navigate} from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import PageEr from './Component/PageEr';
import Student from './Component/Student';
import Contact from './Component/Contact';
import { Contextdata } from './Component/Context';
import Studentdesc from './Component/Studentdesc';

function App() {
  return (
    
    <Router>
      <Contextdata>
    <div className="App">
      <Header/>
        <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student-desc' element={<Studentdesc/>}/>
        <Route path='/*' element={<PageEr/>}/>
        </Routes>
    </div>
    </Contextdata>
    </Router>
  );
}

export default App;
