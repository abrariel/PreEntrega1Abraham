import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer"
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenido a Savia Jabonera" />} />
          <Route exact path="/catalogue" element={<ItemListContainer greeting="Bienvenido a Savia Jabonera"/>} />
          
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route 
            exact 
            path="/item/:id" 
            element={<ItemDetailContainer />} 
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App;