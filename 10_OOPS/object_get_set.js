const User = {
    _email : 'abc@google.in',
    _password : "abcd",


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}
//Getter setter are special methods are working on the properties whetther those are private and public in nayure it just fetches and set the value it doesnt take underscore in count
const userone = Object.create(User);
console.log(userone.email);