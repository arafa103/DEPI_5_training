// 1.2
class Circle{
    private radius: number;
    constructor(radius: number = 1.0){
        this.radius = radius;
    }
    getRadius(): number{
        return this.radius;
    }
    setRadius(radius: number){
        this.radius = radius;
    }
    getArea(): number{
        return Math.PI *this.radius**2;
    }
    getCircumference(): number{
        return 2*Math.PI*this.radius;
    }
    toString(): string{
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
class Account{
    private id: string;
    private name: string;
    private balance = 0;

    public constructor(id = "", name = "", balance = 0){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    public getId(): string{
        return this.id;
    }
    public getName(): string{
        return this.name;
    }
    public getBalance(): number{
        return this.balance;
    }
    public credit(amount: number): number{
        this.balance += amount;
        return this.balance;
    }
    public debit(amount: number): number{
        if(amount <= this.balance) this.balance -= amount;
        else{
            console.log(`Amount exceeded balance`);
        }
        return this.balance;
    }
    public transferTo(another: Account, amount: number): number{
        if(amount <= this.balance){
            this.balance -= amount;
            another.balance += amount;
        }
        else{
            console.log(`Amount exceeded balance`);
        }
        return this.balance;
    }
    public toString(): string{
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




// 1.7 - no internet, search is needed
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
class Author{
    private name: string;
    private email: string;
    private gender: string; //genderType;

    constructor(name = "", email = "", gender = 'm'){
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName(): string{
        return this.name;
    }
    getEmail(): string{
        return this.email;
    }
    setEmail(email: string): void{
        this.email = email;
    }
    getGender(): string{
        return this.gender;
    }
    toString(): string{
        return `Author[name = ${this.name}, email = "${this.email}, gender = ${this.gender}"]`;
    }
}

class Book{
    private name: string;
    private author: Author;
    private price: number;
    private qty = 0;

    constructor(name = "", author = new Author(), price = 0.0, qty = 0){
        this.name = name;
        this.author = author;
        this.price = price
    }
    getName(): string{
        return this.name;
    }
    getAuthor(): Author{
        return this.author;
    }
    getPrice(): number{
        return this.price;
    }
    setPrice(price: number): void{
        this.price = price;
    }
    getQty(): number{
        return this.qty;
    }
    setQty(qty: number): void{
        this.qty = qty;
    }
    toString(): string{
        return `Book[name = ${this.name}, ${this.author.toString()}, price = ${this.price}, qty = ${this.qty}]`;
    }
}

// let ahTeck = new Author("Tan Ah Teck", "ahteck@nowhere.com", 'm');
// console.log(ahTeck.toString());
// let dummyBook = new Book("Java for dummy", ahTeck, 19.95, 99); 
// console.log(dummyBook.toString());





// 2.2
class MultiAuthorBook{
    private name: string;
    private authors: Array<Author>;
    private price: number;
    private qty = 0;

    constructor(name = "", authors: Author[] = [], price = 0.0, qty = 0){
        this.name = name;
        this.authors = authors;
        this.price = price
        this.qty = qty
    }
    getName(): string{
        return this.name;
    }
    getAuthors(): Array<Author>{
        return this.authors;
    }
    getPrice(): number{
        return this.price;
    }
    setPrice(price: number): void{
        this.price = price;
    }
    getQty(): number{
        return this.qty;
    }
    setQty(qty: number): void{
        this.qty = qty;
    }
    toString(): string{
        return `Book[name = ${this.name}, authors = {${this.authors.map(a => `${a.toString()}, `)}}, price = ${this.price}, qty = ${this.qty}]`;
    }
    getAuthorNames(): string{
        return `${this.authors.map(a => a.getName())}, `;
    }
}

// testing
// let authors: Author[] = new Array(2);
// authors[0] = new Author("Tan Ah Teck", "ahteck@nowhere.com", 'm');
// authors[1] = new Author("Paul Tan", "Paul@nowhere.com", 'm');
// let javaDummy = new MultiAuthorBook("Java for Dummy", authors, 19.99, 99);
// console.log(javaDummy.toString());
// console.log(javaDummy.getAuthorNames());