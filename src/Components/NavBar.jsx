import { Link } from "react-router-dom";
import CartWidget from './CartWidget'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
const NavBar = () => {
  return (
    <div>
      <h3 align="center">Savia Jabonera</h3>
      <Tabs isFitted variant='enclosed' size='md' align='center'>
  <TabList mb='1em'>
    <Tab>Catalogo</Tab>
    <Tab>Nuestros Productos</Tab>
    <Tab>¿Cómo comprar?</Tab>
    <Tab>Preguntas Frecuentes</Tab>
    <Tab>Contacto</Tab>
    <Tab>Sobre nosotros</Tab>
    <CartWidget/>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Menu>
        <MenuButton
          as={Button}
          size="lg"
          variant="outline"
          colorScheme="blue"
          rightIcon={<ChevronDownIcon />}
          m="5"
        >
          Categorias
        </MenuButton>
        <MenuList className="menu-list">
          <Link to={`/category/1`}>
            <MenuItem>Solidos</MenuItem>
          </Link>
          <Link to={`/category/2`}>
            <MenuItem>En crema</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </TabPanel>
  </TabPanels>
  
</Tabs>

    </div>
  )
}

export default NavBar