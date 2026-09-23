"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.2
class Circle {
    radius;
    constructor(radius = 1.0) {
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    toString() {
        return `Circle[radius = ${this.radius}]`;
    }
}
// let c1: Circle = new Circle(1.1);
// console.log(c1);   // toString()
// let c2: Circle = new Circle(); // default constructor
// console.log(c2);
// // Test setter and getter
// c1.setRadius(2.2);
// console.log(c1);    // toString()
// console.log("radius is: " + c1.getRadius());
// // Test getArea() and getCircumference()
// console.log("area is: ", c1.getArea());
// console.log("circumference is: ", c1.getCircumference());
// let c3: Circle = new Circle();
// 1.3
// 1.6
class Account {
    id;
    name;
    balance = 0;
    constructor(id = "", name = "", balance = 0) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBalance() {
        return this.balance;
    }
    credit(amount) {
        this.balance += amount;
        return this.balance;
    }
    debit(amount) {
        if (amount <= this.balance)
            this.balance -= amount;
        else {
            console.log(`Amount exceeded balance`);
        }
        return this.balance;
    }
    transferTo(another, amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            another.balance += amount;
        }
        else {
            console.log(`Amount exceeded balance`);
        }
        return this.balance;
    }
    toString() {
        return `Account[id = ${this.id}, name = ${this.name}, balance = ${this.balance}]`;
    }
}
// let a1 = new Account(`A101`, `Tan Ah Teck`, 88);
// console.log(a1.toString());
// let a2 = new Account(`A102`, `Kumar`);
// console.log(a2.toString());
// console.log(`id:`, a1.getId());
// console.log(`name:`, a1.getName());
// console.log(`balance:`, a1.getBalance());
// a1.credit(100);
// console.log(a1);
// a1.debit(50);
// console.log(a1);
// a1.debit(500);
// console.log(a1);
// a1.transferTo(a2, 100);
// console.log(a1.toString());
// console.log(a2.toString());
// 1.7
// let day: number = ;
// class Date{
//     // private day: number;
//     // private month: number;
//     // private year: number;
//     constructor(day = 0, month = 0, year = 0){
//     }
// }
// enum genderType{
//     male = "m",
//     female = "f"
// };
// 2.1
class Author {
    name;
    email;
    gender; //genderType;
    constructor(name = "", email = "", gender = 'm') {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getGender() {
        return this.gender;
    }
    toString() {
        return `Author[name = ${this.name}, email = "${this.email}, gender = ${this.gender}"]`;
    }
}
class Book {
    name;
    author;
    price;
    qty = 0;
    constructor(name = "", author = new Author(), price = 0.0, qty = 0) {
        this.name = name;
        this.author = author;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getAuthor() {
        return this.author;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        return `Book[name = ${this.name}, ${this.author.toString()}, price = ${this.price}, qty = ${this.qty}]`;
    }
}
// let ahTeck = new Author("Tan Ah Teck", "ahteck@nowhere.com", 'm');
// console.log(ahTeck.toString());
// let dummyBook = new Book("Java for dummy", ahTeck, 19.95, 99); 
// console.log(dummyBook.toString());
// 2.2
// class Author2{
//     private name: string;
//     private email: string;
//     constructor(name = "", email = ""){
//         this.name = name;
//         this.email = email;
//     }
//     getName(): string{
//         return this.name;
//     }
//     getEmail(): string{
//         return this.email;
//     }
//     setEmail(email: string): void{
//         this.email = email;
//     }
//     toString(): string{
//         return `Author[name = ${this.name}, email = "${this.email}]`;
//     }
// }
class MultiAuthorBook {
    name;
    authors;
    price;
    qty = 0;
    constructor(name = "", authors = [], price = 0.0, qty = 0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        return `Book[name = ${this.name}, authors = {${this.authors.map(a => `${a.toString()}, `)}}, price = ${this.price}, qty = ${this.qty}]`;
    }
    getAuthorNames() {
        return `${this.authors.map(a => a.getName())}, `;
    }
}
let authors = new Array(2);
authors[0] = new Author("Tan Ah Teck", "ahteck@nowhere.com", 'm');
authors[1] = new Author("Paul Tan", "Paul@nowhere.com", 'm');
let javaDummy = new MultiAuthorBook("Java for Dummy", authors, 19.99, 99);
console.log(javaDummy.toString());
console.log(javaDummy.getAuthorNames());
//# sourceMappingURL=main.js.map