class Toyotacar{
    constructor(brand,mileage){
        console.log("Creating a new  car");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}

let Fortuner=new Toyotacar("fortuner",10);
console.log(Fortuner);
let Tata= new Toyotacar("Kia",20);
console.log(Tata);