const accountId = 144553
let  accountEmail ="hitesh@google.com"
var accountPassword ="12345" // it's not recommended to use var to declare a variable
// to avoid the scope issues scope = {}
accountCity ="Jaipur"
let accountState;

// accountId  = 2 not allowed

accountEmail = "hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block space and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])


