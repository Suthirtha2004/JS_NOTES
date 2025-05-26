class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){ //This prevents access to the objects craeted and it caanot be used
        return `123`
    }
}

const Userone = new User("Archer")
//console.log(Userone.createId()) - static not accessible by objects

class Coder extends User{
    constructor(username,email){
        super(username);
        this.email = email;

    }
}

const Usertwo = new Coder("Knight","abc@mail")
Usertwo.logMe()
//console.log(Usertwo.createId()) - static cannot be accessed by the other child classes