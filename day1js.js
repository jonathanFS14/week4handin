 function add(n1, n2){
    return n1 +n2;
 }

 const sub = function(n1,n2){
    return n1 - n2
  } 

  const mul = function(n1,n2) {
    return n1 * n2
  }

  const cb = function(n1,n2, callback ){
    if(typeof callback === "function") 
    if(typeof n2 === "number")
    if(typeof n1 === "number")
    return "Result from the two numbers: "+n1+"+"+n2+"="+ callback(n1,n2);
    return "error"
  };

//console.log( add(1,2) )     // What will this print?
//console.log( add )          // What will it print and what does add represent?
//console.log( add(1,2,3) ) ; // What will it print
//console.log( add(1) );	  // What will it print 	
//console.log( cb(3,3,add) ); // What will it print
//console.log( cb(4,3,sub) ); // What will it print
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
//console.log(cb(3,"hh",add));// What will it print

//console.log(cb(3,3,(n1,n2) => n1/n2)); 

  function addVersion2(n1, n2, ...rest){
    return n1 + n2 + rest.reduce((acc,cur)=> acc +cur)
 }

//console.log(addVersion2(1,2,3,4,5,6))


const namearray = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
const filterarray = namearray.filter(name => name.length <= 3)
//console.log(namearray)
//console.log(filterarray)

const nameuppercase = namearray.map(name => name.toUpperCase())
//console.log(nameuppercase)

function namesToHTMLList(names) {
    const listItems = names.map(name => `<li>${name}</li>`);
    const htmlList = `<ul>${listItems.join('')}</ul>`;
    return htmlList;
  }
  
  const names = ["Lars", "Peter", "Jan", "Ian"];
  const htmlList = namesToHTMLList(names);
  //console.log(htmlList);

  const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];
  
  const newerthan1999 = cars.filter(car => car.year > 1999) 
  //console.log(newerthan1999)
  const volvos = cars.filter(car => car.make === "Volvo")
  //console.log(volvos)
  const pricebelow5000 = cars.filter(car => car.price < 5000)
  //console.log(pricebelow5000)


  function myFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = myFilter(numbers, number => number % 2 === 0);
  //console.log(evenNumbers); 

  function myMap(array, callback) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
  }
  const squaredNumbers = myMap(numbers, number => number * number);
  //console.log(squaredNumbers); 

  const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
  };
  //console.log("aaaaaaaaaa");
  //msgPrinter ("bbbbbbbbbb",2000);
  //console.log("dddddddddd");
  //msgPrinter ("eeeeeeeeee",1000);
  //console.log("ffffffffff");
 
const myObj = {
    name: "John",
    birthday: "January 1, 1990",
    hobby: "Reading",
    email: "john@example.com"
  };
  

  for (const prop in myObj) {
    //console.log(prop, myObj[prop]);
  }
  
  delete myObj.hobby;
  for (const prop in myObj) {
    //console.log(prop, myObj[prop]);
  }
  
  myObj.location = "New York";
  for (const prop in myObj) {
    //console.log(prop, myObj[prop]);
  }

  function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(`Count: ${count}`);
    }
  
    function decrement() {
      count--;
      console.log(`Count: ${count}`);
    }
  
    return {
      increment,
      decrement
    };
  }
  
  const counter = createCounter();
  //counter.increment(); // Output: Count: 1
  //counter.increment(); // Output: Count: 2
  //counter.decrement(); // Output: Count: 1

  
  function createPerson(name, age) {
    let personName = name;
    let personAge = age;
  
    function setAge(newAge) {
      personAge = newAge;
    }
  
    function setName(newName) {
      personName = newName;
    }
  
    function getInfo() {
      return `${personName}, ${personAge}`;
    }
  
    return {
      setAge,
      setName,
      getInfo
    };
  }
  
  const person = createPerson("Peter", 45);
  //console.log(person.getInfo());
  person.setAge(50);
  //console.log(person.getInfo()); 
  person.setName("Alice");
  //console.log(person.getInfo()); 