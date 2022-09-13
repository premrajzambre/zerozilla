import Navbar from "./components/NavBar/Navbar";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Register from "./components/authentication/Register";
import PrivateComponent  from "./components/private/PrivateComponent";
import Login from "./components/authentication/login";

function App() {
  return (
    <div className="App">
        <h1>ZerZilla</h1>
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route element = {<PrivateComponent />}>
                    <Route path="/" element={<p>Home</p>}></Route>
                    <Route path="/agency" element={<p>Agancy</p>}></Route>
                    <Route path="/updateAgency" element={<p>Add Agency</p>}></Route>
                    <Route path="/addAgency" element={<p>Update Agancy</p>}></Route>
                    <Route path="/" element={<p>Logout</p>}></Route>
                    <Route path="/profile" element={<p>Profile</p>}></Route>
                </Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer></Footer>
    </div>
  );
}

export default App;
