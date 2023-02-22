
const categories = [
{ id: "1", name: "Solido"  }, 
{ id: "2", name: "Acondicionador"  }, 
]

const items = [
    { id: "1", name: "Calendula", description: "Jabon", category: categories[0], price: 575, image:"https://i.ibb.co/KsqbBb4/JABON-CALENDULA.png" }, 
    { id: "2", name: "Lavanda", description: "En crema", category: categories[1], price: 500, image: "https://i.ibb.co/NTY5xyM/Acondicionador-Crema.png" },
]

export const getItems = categoryId => new Promise (resolve => {
    resolve(categoryId ? items.filter(item => categoryId === item.category.id) : items)

})

export const getItem = itemId => new Promise (resolve => {
    console.log("itemId", itemId)
    resolve(items.find(item => item.id === itemId))
})