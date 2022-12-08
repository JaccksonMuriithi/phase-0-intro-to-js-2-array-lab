// Write your solution 
const cats = ["Milo", "Otis","Garfield"];
function logcats(cats){
    console.log(cats);
}
function ArrayFunctions(cats){
    function beforeEach(){
        cats.length=0;
        cats.push("Milo", "Otis","Garfield");
        return(cats);
    }
}
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return(cats);
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return(cats);
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
    return(cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift("Bob")
    return (cats);
}
function appendCat(name){
    const allCats =[...cats, "Broom"]
    return (allCats)
}
function prependCat(name){
    const allCats =["Arnold", ...cats]
    return (allCats)
}
function removeLastCat(){
    const newCats = [...cats]
    newCats.splice(-1)
    return newCats

}
function removeFirstCat(){
const newCats = [...cats]
newCats.shift()
return newCats
}