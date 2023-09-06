import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import { Routes, Route } from 'react-router-dom';
import Student from '../pages/student';

function MyRouter(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/About us" element={<About/>}/>
            <Route path="/contact us" element={<Contact />}/>
            <Route path="/Student" element={<Student/>}/>

        </Routes>
    );
}

export default MyRouter;