function getHome(){
    //var y = process.argv[2]
    var x= ["Mansion", "Apartment", "Shack", "House",process.argv[2],"Homeless Shelter"]
    var getHomeq = x[Math.floor(Math.random()*x.length)];
    return getHomeq
    //return y
}
function getChildrenCount(){
    var rando = Math.random();
    var rando100 = rando*100;
    var randoInteger = Math.floor(rando100);
    return randoInteger || process.argv[3]

}
function getCar(){
    //var y = process.argv[2]
    var b= ["lamborghini", "ferrari", "bugatti", "fiat", process.argv[4],"Toyota","Nissan","Honda","SmartCar"];
    var getCarq = b[Math.floor(Math.random()*b.length)];
    return getCarq
    //return y */
}
function NameOfSpouse(){
    //var y = process.argv[2]
    var c= ["Mary", "Susie", "Sarah", "fiat", process.argv[5],"Sharkeisha",];
    var getSpouseq = c[Math.floor(Math.random()*c.length)];
    return getSpouseq
    //return y */
}
function mash(){ 
    return "You will live in a " + getHome() +" , and you will have " + getChildrenCount() + " kids,and you'll drive a " +getCar() + "and your wife name will be "+ NameOfSpouse()
}
if(process.argv[2] != undefined && process.argv[3] != undefined && process.argv[4] != undefined && process.argv[5] != undefined){
    console.log(mash());
}