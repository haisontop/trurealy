import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation"
import Home from './pages/Home/Home';

function App() {
  return (
     <div>
          <BrowserRouter>
               <Routes>
                  <Route path='/' element={<Home />} />

               </Routes>
          </BrowserRouter>
     </div>
  );
}

export default App;
