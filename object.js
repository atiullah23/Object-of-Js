class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setbrand(brand){
        // this.setbrandName =>object property hai 
        this.setbrandName=brand;//brand=>aur yeh arguments hai jo isme assign kiya jayega
    }
}

let Fortuner=new ToyotaCar();
Fortuner.setbrand("Tata");