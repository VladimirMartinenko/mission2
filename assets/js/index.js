function Car(manufacturer,model,color,speed,maxSpeed,releaseYear,fuelConsumption,volume) {
    
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.speed = speed;
  this.maxSpeed = maxSpeed;
  this.releaseYear=releaseYear;
  this.fuelConsumption=fuelConsumption;
  this.volume=volume;
 };
 
 
 function CarPrototype(){
   this.accelerate = function(){
     if(this.speed<200){
     return this.speed+=20;}
     else{this.speed = 200}
   };
   this.brake = function(){
     if(this.speed>0){
     return this.speed-=10}
     else{return this.speed = 0}
   };
   this.stopped = function(){
     return this.speed = 0
   };
 };
Car.prototype = new CarPrototype();

const car1 = new Car('bmw','320i','red',0,200, 2021,8.3,60);