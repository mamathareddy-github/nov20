//Question-1
class Book{
    title;
    author;
    isbn;
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    checkOut(){
        console.log(this.title ,"checkout done" );
    }
    returnBook(){
        console.log(this.title, "Book returned");
    }
    updateTitle(newTitle){
        this.title=newTitle;
    }
}
var book1 =new Book('hory','john', '800');
book1.checkOut();
book1.returnBook();
book1.updateTitle('Hory');
console.log(book1);

// Question-2

class Ecommerce{
    name;
    price;
    category;
    constructor(name,price,category){
        this.name=name;
        this.price=price;
        this.category=category;
    }
    applyDiscount(amount){
        this.price=amount;
    }
    getPriceAfterDiscount(){
        console.log(this.price,'price  after discount');
    }
}
var myntra = new Ecommerce('myntra','1000','costomer');
myntra.applyDiscount(1000);
myntra.getPriceAfterDiscount();
console.log(myntra);

// Question -3

class BankAccount{
    accountHolderName;
    accountNumber;
    balance;
    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
    }
    deposit(ammount){
        this.balace=this.balance + ammount;
        console.log('deposit done');
    }
    withdraw(ammount){
        console.log(this.accountNumber,'withdraw done');
    }
    getBalance(){
        console.log("Available balance is",this.balance);
    }
}
var hdfc = new BankAccount('Mamatha','1256789','18000');
hdfc.deposit(500);
hdfc.withdraw(500);
hdfc.getBalance();
console.log(hdfc);

// Question-4

class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model,licensePlate,mileage){
        this.model=model;
        this.licensePlate=licensePlate;
        this.mileage=mileage;
    }
    drive(miles){
        console.log('thar mileage is',this.mileage);
        this.mileage=miles+this.mileage;
    }
    getMileage(){
        console.log('Thar mileage of',this.licensePlate,'is','200');
    }
}
var thar = new Vehicle ('mahindra','TS123' ,'200');
thar.drive(70);
thar.getMileage();
console.log(thar);

// Question-5

class section{
    name;
    grade;
    constructor(name,grade){
        this.name=name;
        this.grade=grade;
    }
    setGrade(newGrade){
        this.grade=newGrade;
    }
    getGrade(){
        console.log(this.name,'current garde ', this.grade);
    }
}
var Student = new section('Mamatha','c');
Student.setGrade('a');
Student.getGrade();
console.log(Student);