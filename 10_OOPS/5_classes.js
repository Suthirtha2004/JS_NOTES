//ES6 after
//the constructor is called right after the object is initialized from class
class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userone = new User("Archer","abc@mail.in","123")
console.log(userone.encryptPassword());
console.log(userone.changeUsername())


//BEHIND

function user(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPass = function(){
    return `${this.password}abc`
}

user.prototype.setUser = function(){
    return `${this.username.toUpperCase()}`
}

const usertwo = new user("Knight","xyz@mail.com","345")
console.log(usertwo.encryptPass())
console.log(usertwo.setUser())


