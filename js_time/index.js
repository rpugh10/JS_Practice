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

/* 
? let x = 'pizza';

? x = Number(x);
? console.log(x, typeof x); 
*/

