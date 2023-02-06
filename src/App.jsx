import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Savia Jabonera" />
    </div>
  )
}

export default App;