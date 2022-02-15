/*function Car(manufacturer,model,color,speed,maxSpeed,releaseYear,fuelConsumption,volume) {
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
     if(this.speed<this.maxSpeed){
     return this.speed+=20;}
     else{this.speed = this.maxSpeed}
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
const car2 = new Car('audi','320i','red',0,'jh', 2021,8.3,60);*/

function newFunc (...rest) {
  let sum =0
  for(let i=0;i<rest.length;i++){
 sum  += rest[i];
  }
  console.log(sum);
}


class User {
  constructor(name,surname,age){
  this.name =name;
  this.surname =surname;
  this.age =age;
}
getFullName = ()=> `${this.name} ${this.surname}`

isadult = ()=>(this.age >= 18)
  


}

const user = new User('vasy','jweygd',18)


class Modern {
  constructor(name,surname,age,email){
  this.name =name;
  this.surname =surname;
  this.age =age;
  this.email =email;
}
set name (newName) {
  if (typeof newName !== 'string'){
    throw new TypeError('Invalid')
  }
  if (newName.trim() ===''){
    throw new Error('Invalid')
  }
  this._name = newName;
}
get name(){
  return this._name;
}
set surname (newSurname) {
  if (typeof newSurname !== 'string'){
    throw new TypeError('Invalid')
  }
  if (newSurname.trim() ===''){
    throw new Error('Invalid')
  }
  this._surname = newSurname;
}
get surname(){
  return this._surname;
}
set age (newAge) {
  if (typeof newAge !== 'number'){
    throw new TypeError('Invalid')
  }
 
  this._age = newAge;
}
get age(){
  return this._age;
}
set email (newEmail) {
  if (typeof newEmail !== 'string'){
    throw new TypeError('Invalid')
  }
  if (newEmail.trim() ===''){
    throw new Error('Invalid')
  }
  this._email = newEmail;
}
get email(){
  return this._email;
}
etFullName = ()=> `${this.name} ${this.surname}`

isadult = ()=>(this.age >= 18)
createMessage = ()=>('Message')
deleteMessage = ()=>('eleteMessage')
}
const us = new Modern('vasy','jweygd',18,'erfe')