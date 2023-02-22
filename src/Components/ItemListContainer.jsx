import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter , Stack , Heading , Divider , ButtonGroup , Button} from '@chakra-ui/react'
import { getItems } from "../ProductsService"

const ItemListContainer = ({greeting}) => {
  const { category } = useParams();

  const [items, setItems] = useState([])
  
  useEffect(() => {
    async function fetchData () {
      const items = await getItems(category)
      setItems(items)
    }

    fetchData()
  }, [category])

  return (
    <div>
       <h1 align="center">{greeting}</h1> 
      
      {
        items.map(item => <Item key={item.id} item={item}/>)
      }

    </div>
  )
}


const Item = ({item}) => (
  <Card>
    <CardHeader>{item.name}</CardHeader>
    <CardBody>Categoria: {item.category.name}</CardBody> 
    <CardFooter>
      <Link to={`/item/${item.id}`}>
        <Button>Ver detalles</Button>
      </Link>
    </CardFooter>
  </Card>
)

export default ItemListContainer