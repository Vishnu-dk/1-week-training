const person1={
    name:"John",
    age:21,
    address:{
        city:"Vegas",
        country:"US"
    }

}

const person2={...person1}
person2.address.city="Los ANGELAS"

console.log(person2)