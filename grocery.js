var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, category) {
        this.name = name;
        this.quantity = quantity;
        this.category = category;
        this.groceryItem = name + ", " + quantity + ", " + category;
    }
    return Grocery;
}());
function itemList(item) {
    return item.name + item.quantity + item.category;
}
var gi = [
    new Grocery("Bread ", "1 ", "Grain"),
    new Grocery("Milk ", "1 ", "Dairy"),
    new Grocery("Eggs ", "Dozen", "Poultry")
];
document.body.innerHTML = itemList(gi[0]);
document.body.innerHTML = itemList(gi[1]);
document.body.innerHTML = itemList(gi[2]);
