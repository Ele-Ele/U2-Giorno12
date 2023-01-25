class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static theOldest(pA, pB) {
    if (pA.age > pB.age) {
      return "la prima persona è più vecchia della seconda";
    } else if (pB.age > pA.age) {
      return "la seconda persona è più vecchia della prima";
    }
  }
}

let allP = [
  new Person("Mario", 34),
  new Person("Carlo", 22),
  new Person("Luigi", 66),
];

console.log(Person.theOldest(allP[2], allP[0]));
