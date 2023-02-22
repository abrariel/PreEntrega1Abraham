import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter , Stack , Heading , Divider , ButtonGroup , Button} from '@chakra-ui/react'
import { getItem } from "../ProductsService"

const ItemDetailContainer = () => {
  const { id } = useParams()

  const [item, setItem] = useState({ category: {} })
  
  useEffect(() => {
    async function fetchData () {
      setItem(await getItem(id))
    }

    fetchData()
  }, [id])

  return (
    <div>
      <Card>
        <CardHeader>{item.name}</CardHeader>
        <CardBody>
          <p>Categoria: {item.category.name}</p>  
          <p>Descripcion: {item.description}</p>
          <p>Precio: {item.price}</p>
          <img src={item.image} alt="" />

        </CardBody> 
      </Card>
    </div>
  )
}


export default ItemDetailContainer