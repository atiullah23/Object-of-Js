//you are creating a website for your college. create a class User with 2 properties, name and email.it also has a method called viewData()
// that allows user to view website data
let DATA="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("website data=",DATA);
    }
}
// Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website DataTransfer.
class admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="Some new value";
    }
}

let student1=new User("Er Ashmir Khan","ashmirvlog8786@gmail.com");
let student2=new User("Osiullah Musalman","osiullahmuslaman@gmail.com");
let student3=new User("Abdullah Musalman","abdullahmuslaman@gmail.com");

let admin1=new admin("admin","admin@gmail.com");