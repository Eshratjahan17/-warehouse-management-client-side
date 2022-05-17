import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './pages/AddItems/AddItems';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';
import Headers from './pages/Headers/Headers';
import Home from './pages/Home/Home';
import ItemDetails from './pages/ItemDetails/ItemDetails';
import Login from './pages/Login/Login';
import ManageInventoryItems from './pages/ManageInventoryItems/ManageInventoryItems';
import MyItems from './pages/MyItems/MyItems';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Reviwes from './pages/Reviwes/Reviwes';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Headers></Headers>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageinventory"
          element={<ManageInventoryItems></ManageInventoryItems>}
        ></Route>
        <Route path="/addnewitem" element={<AddItems></AddItems>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/footer" element={<Footer></Footer>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/reviwes" element={<Reviwes></Reviwes>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
