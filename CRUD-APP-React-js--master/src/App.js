import Navbar from "./Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Adduser from "./component/Adduser";
import Update from "./component/Update";
import Notfound from "./component/Notfound";
import Toggle from 'react-bootstrap-toggle';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/adduser" element={<Adduser/>}/>
      <Route exact path="/edit/:id" element={<Update/>}/>
      <Route  element={<Notfound/>}/>
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
