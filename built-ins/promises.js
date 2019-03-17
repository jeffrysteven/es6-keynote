const mySundae = new Promise(function (resolve, reject) {
    // sundae creation code
    const sundae = {};
    // request ice cream
    // get cone
    // generous portion into cone!
    if ( /* iceCreamConeIsEmpty(flavor) */ ) {
        reject(`Sorry, we're out of that flavor :-(`);
    }
    resolve(sundae);
});

mySundae.then(function(sundae) {
    console.log(`Time to eat my delicious ${sundae}`);
}, function(msg) {
    console.log(msg);
    self.goCry(); // :´(
});