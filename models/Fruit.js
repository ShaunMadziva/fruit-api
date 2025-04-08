const fruits = require("../fruits.json");
//console.log(fruits);

class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.family = fruit.family;
    this.order = fruit.order;
    this.name = fruit.name;
    this.id = fruit.id;
    this.nutritions = fruit.nutritions;
  }
  static showAll() {
    // if (!fruits) {
    //   throw new Error("No fruits found");
    // }
    // return fruits;\
    return fruits.map((fruit) => new Fruit(fruit));
  }

  static show(name) {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw new Error("Fruit not found");
    }
  }

  static create(data) {
    const newFruit = data;
    //console.log(newFruit);

    newFruit.id = fruits.length + 1;
    fruits.push(newFruit);
    return new Fruit(newFruit);
  }

  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );

    if (updatedFruit) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;

      return new Fruit(updatedFruit);
    } else {
      throw "Fruit not found";
    }
  }

  destroy() {
    const deletedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() == this.name.toLowerCase()
    );

    if (deletedFruit) {
      const index = fruits.indexOf(deletedFruit);
      fruits.splice(index, 1);
    } else {
      throw "Fruit not found";
    }
  }
}

module.exports = Fruit;
