const user = {    // this thing is known as object.
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);   // (this) keyword is used for current context,it helps to access the variable from the current context.
        console.log(this);
        
        
    }

}

 //user.welcomeMessage()
 //user.username = "sam"  // current context/value got changed here.
 //actually the username in previous context is not hard coded that's why we can change it outside of the previous conntext.
 //user.welcomeMessage()

//  console.log(this);

function one(){
    console.log(this);
    
}

one()
