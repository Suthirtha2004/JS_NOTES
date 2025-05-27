class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){ //Suppose a person wants to get our password
        return `${this._password.toUpperCase()}Archy`; //only getter gets it so we need setter
    }

    set password(value){
        this._password = value;

    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        return this._email = value;
    }
}

//_email and _password are like private properties

const userone = new User("abc@in","123abc")
console.log(userone.password);
console.log(userone.email);

