
function newUser(em,pass){
    this._em = em ;
    this._pass = pass;

    Object.defineProperty(this,'em',{
        get : function () {
            return this._em.toUpperCase();
        },
        set : function(value){
            this._em = value;
        }
    })
}

const usertwo = new newUser("xyz@mail.in","123")
console.log(usertwo.em);