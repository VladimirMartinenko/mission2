function Car(manufacturer,model,color,speed,maxSpeed,releaseYear,fuelConsumption,volume) {
    if(typeof manufacturer !== "string" || typeof model !== "string" || typeof color !== "string" ) {
      throw new TypeError('Введите строку');
    }else if(typeof speed !== 'number' || typeof maxSpeed !== 'number'|| typeof releaseYear !== 'number' || typeof fuelConsumption !== 'number' || typeof volume !== 'number' ) {
      throw new TypeError('Введите числа');
    }
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
const car2 = new Car('audi','320i','red',0,'jh', 2021,8.3,60);