function createUser (pName, pAge){
    return{
        name:pName,
        age:pAge,
        displayInfo:function(){
            document.write("სახელი" + this.name + "ასაკი" + "this.age");
        };
    };
};
var Tom = createUser("Tom", 26);
Tom.displayInfo();

var Giorgi = craeteUser("Giorgi", 24);
Giorgi.displayInfo();

function createUser (pName, pAge){
    return{name:pName,
    age:pAge,
displayInfo:function(){
    document.write(this.name + "მანქანის მარკა" + car.name + "</br>");
}
}
};

function createcar(mName, myear){
    return{
        name:mName,
        year:myear
    }
}
var Tom= createUser("tom", 26);
Tom.displayInfo()

var tesla = createCar("tesla", 2008);
Tom.driveCar(tesla);