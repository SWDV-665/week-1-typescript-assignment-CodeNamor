class Grocery {
    groceryItem: string;

    constructor(public name: string, public quantity: string, public category: string){
        this.groceryItem = name + ", " + quantity + ", " + category 
    }
}

interface Item {
    name:     string;
    quantity: string;
    category: string;
}

function itemList(item : Item) {
    return item.name + item.quantity + item.category;
}

type groceryItem = Array<Grocery>;

var gi: groceryItem = [
    new Grocery("Bread ", "1 ", "Grain"),
    new Grocery("Milk ", "1 ", "Dairy"),
    new Grocery("Eggs ", "Dozen", "Poultry")
]

document.body.innerHTML = itemList(gi[0])
document.body.innerHTML = itemList(gi[1])
document.body.innerHTML = itemList(gi[2])


