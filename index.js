let configuration = {
    frontContent: "Happy Birthday, Odin One-Eye!",
    insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
    closing: {
        "Thor": "Admiration, respect, and love",
        "Loki": "Your son"
    },
    signatories: [
        "Thor",
        "Loki"
    ]
}
//There are  5 ways to resolve this
//1 change forEach callback function as arrow function so that forEcah callback function take 
//    parent function execution contex as execution contex 
//2  or , add 'bind(this)' at the end of forEach callback function line 30
//3  or use closure to access "this" like line 24 and remove "this" in line 28 (change "this" in line 28 to "outerContex")
//4   use "configaration"(above object) insted of "this" in line 28
//5   or below methord, add 'this' end of forEach callback function line 30
let printCard = function () {

    console.log(this.frontContent)
    console.log(this.insideContent)
    //  let outerContex=this

    this.signatories.forEach(function(signatory){

        let message = `${this.closing[signatory]}, ${signatory}`
        console.log(message)
    }, this)
}

printCard.call(configuration)
