import CartWidget from './CartWidget'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <h3 align="center">Savia Jabonera</h3>
      <Tabs isFitted variant='enclosed' size='md' align='center'>
  <TabList mb='1em'>
    <Tab>Inicio</Tab>
    <Tab>Nuestros Productos</Tab>
    <Tab>¿Cómo comprar?</Tab>
    <Tab>Preguntas Frecuentes</Tab>
    <Tab>Contacto</Tab>
    <Tab>Sobre nosotros</Tab>
    <CartWidget/>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p></p>
    </TabPanel>
    <TabPanel>
      <p></p>
    </TabPanel>
  </TabPanels>
  
</Tabs>

    </div>
  )
}

export default NavBar