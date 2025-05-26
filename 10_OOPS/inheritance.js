class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }
}

class Coder extends User{
    constructor(username,email,password){
        super(username); // Goes to the parent class which it is extending and sets the username from there
        this.email=email;
        this.password = password;
    }

    codingWork(){
        console.log(`Coding Work has started by ${this.username}`)
    }
}

const Userone = new Coder("Archer","abc.mail.in","123")
Userone.codingWork()

const UserTwo = new User("Kngiht"); // This has no access to coding work
UserTwo.logMe()
Userone.logMe()

//To check instance of objects

console.log(Userone instanceof Coder);