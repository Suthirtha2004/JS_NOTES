function SetUseranme(username){
    //complex calcualtion
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    SetUseranme.call(this,username);  //WIll hold the reference of the function because if not done the reference will be vanished

    this.email = email;
    this.password = password;
}

const userone = new createUser("Archer","abc@mail.in","123")
console.log(userone)