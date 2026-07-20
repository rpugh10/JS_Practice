/**
 * ! Logging to console
 */

/**
 *? console.log('Hello World');
 *? console.log('The current date and time is: ' + new Date());
*/


/**
 * ! Alerts
 */

/**
 *? window.alert('The current date and time is: ' + new Date());
*/


/**
 * ! Document Manipulation
 */

/**
 *? document.getElementById('myH1').textContent = 'hello';
 *? document.getElementById('myP').textContent = 'goodbye';
*/


/**
 * ! Variables and Data Types
 */

/**
 *? let age = 25;
 *? let gpa = 3.5;
 *? console.log('The amount is $' + price);
 *? console.log(typeof price);
 *? let name = 'Ryan';
 *? document.getElementById('myH1').textContent = 'My name is ' + name;
 *? console.log('My name is ' + name);
*/

// ?const PI = 3.14; // Constant variable cannot be changed 

/**
 * ! User Input
 */

//Easy Way Window PROMPT
/**
 *? let username = window.prompt('What is your name?');
 *? console.log('Hello, ' + username + '!');
*/

//Hard Way HTML TextBox
/*
* Note: Need to create an HTML input element and a button 
* to trigger the event. Then, use JavaScript to get the value from the input and display it.
*/

/**
 * ?document.getElementById('submitBtn').onclick = function() {
    *? let username = document.getElementById('username').value;
    *? console.log('Hello, ' + username + '!');
}
*/

/* 
? let username = 'Ryan';
? document.getElementById('header').textContent = 'Welcome to JS' + username;
 */

/* 
! Type Conversion 
*/

/* let age = window.prompt('How old are you?');
? age = Number(age); // Convert string to number
? age += 1; // Increment age by 1
? console.log('Next year, you will be ' + age + ' years old.');
 */

<<<<<<< HEAD

/**
 * ! Foreach loop
 */

let numbers = [1,2,3,4,5];
numbers.forEach(display);

function display(element){
    console.log(element);
}
display();
=======
/* 
? let x = 'pizza';

? x = Number(x);
? console.log(x, typeof x); 
*/


/* 
 ! Counter Program
 */
 /* let count = 0;
 ? let result = 0;
 ? document.getElementById('increaseBtn').onclick = function() {
 ?   count++;
 ?   document.getElementById('countLabel').textContent = count;
?};

?document.getElementById('decreaseBtn').onclick = function(){

  ?  count = document.getElementById('countLabel').textContent -= 1;
?}

?document.getElementById('resetBtn').onclick = function(){
   ? document.getElementById('countLabel').textContent = 0;
?} */


/* 
    ! Radon Number Generator
*/

/* 
*Math.floor rounds down and Math.random() * gives us a random # between 0-6 exclusive. To include 6 we +1 to get 1-7 exclusive
 */

/* 
 ? document.getElementById('randomBtn').onclick = function(){
 ? let randomNum = Math.floor(Math.random() * 100000);
 ?document.getElementById('countLabel').textContent = randomNum;
} */

  /*
   ! if Statement
 */

  /*  if(true){
        console.log('This is true');
   }
   else{
    console.log('This is false');
   }

 */

   /* 
   ! String Methods
   */

   /* let username = 'Ryan';
   username.charAt(0); // Returns 'R'
   username.length; // Returns 4
   username.indexOf('y'); // Returns 2
   username.lastIndexOf('a'); // Returns 1
   username.trim(); // Removes whitespace from both ends
   username.toUpperCase(); // Returns 'RYAN'
   username.toLowerCase(); // Returns 'ryan'
   username.repeat(3); // Returns 'RyanRyanRyan'
   let result = username.startsWith('R'); // Returns true
   let endsWith = username.endsWith('n'); // Returns true

   let phoneNumber = '123-456-7890';
   phoneNumber.replace('-', ''); // Returns '1234567890'
   phoneNumber.split('-'); // Returns ['123', '456', '7890']
   phoneNumber.slice(0, 3); // Returns '123'
   phoneNumber.padStart(12, '0'); // Returns '000123-456-7890'
   phoneNumber.padEnd(12, '0'); // Returns '123-456-789000' 
   // */



   
>>>>>>> fbd9c202f2234026676f3a8386ea4f4174e7cd80
