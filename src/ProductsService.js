
const categories = [
{ id: 1, name: "Solido"  }, 
{ id: 2, name: "En Crema"  }, 
]

const items = [
    { id: 1, name: "Calendula", description: "Fragancia", category: categories[0] },
    { id: 2, name: "Lavanda", description: "Fragancia2", category: categories[1] },
]

export const getItems = categoryId => new Promise (resolve => {

    resolve(categoryId ? items.filter(item => item.id === item.category.id) : items)

})