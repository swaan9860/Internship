# **Lesson 1**
## 1. **HTML BASICS**
- Basic skeletal structrue of an HTML file.  
```<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    
  </body>
</html>  
```
- Commenting in HTML
```
<!-- THIS IS COMMENTING (CTRL+/)  -->
```  
## 2. **TAGGING**  
Reference sites(w3school.com / developer.mozilla.org)  
- ###  Heading tag  
```  
<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </body>
```  
- ### Paragraph  Tag
```  
<p>This is a paragraph. 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  ```  
- ### Bold Tag
```<strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</strong>```  

- ### Italic Tag
```<em>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em>```  

## 3. **LISTS**  
- ### Ordered List  
```
<ol>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ol>
   ```   
- ### Unordered List
```
<ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>
```  

- ### Nested List
```  
<h1>This is nested list</h1>
<ol>
      <li>first item</li>
      <ul>
        <li>first</li>
        </ul>
      <li>second item</li>
    <ul>
      <li>second</li>
    </ul>
        </ol>
```  

## 4. **DIVS & SPANS**  
- ### Divs  
```  
<div class="group1">
    <h1>divs and spans</h1>
    <p>group 1</p>
</div>  
```  

- ### Spans
```  
<p>This is <span>spanning</span>.</p>  
```  
## 5. **ATTRIBUTES**  
- ### Images
```  
<img src="pfp.jpeg" alt="pfp.jpeg Not Found!">
  ```  
- ### Adding Links
```  
<a href="http://www.facebook.com">facebook</a>
  ```  
- ### Adding Links Through Pictures  
```  
  <a href="https://www.djangoproject.com/">
      <img src="django.png">
      </a>
  ```  
## 6. **TABLES AND FORMS**  
- ### Table
```  
<body>
    <table border="4">
      <thead>
      <th>Number</th>
      <th>Color</th>
      <th>Country</th>
</thead>
<tr>
  <td>911</td>
  <td>brown</td>
  <td>Mexico</td>
</tr>
<tr>
  <td>8</td>
<td>yellow</td>
<td>china</td>
</tr>
    </table>
  </body>
  ```  

- ### Form
```  
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Assessment Test HTML LEVEL 2</title>
  </head>
  <body>
    <h1>Course Sign Up Page</h1>
    <p>Please Note: First Name, Last Name, Password, and Email are required</p>

        <form method="get">  

        <!-- Text box -->
          <label for="FirstName">First Name:</label>
          <input type="text" id="FirstName" placeholder="First Name" required>

          <label for="LastName">Last Name:</label>
          <input type="text" id="LastName" placeholder="Last Name" required>
          <p></p>

          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="name@email.com">

          <label for="pass">Password:</label>
          <input type="password" id="pass" >  

        <!-- Radio Button -->
          <p>Are you over the age of 18?</p>
          <label for="yes">Yes:</label>
          <input type="radio" name="Over18" id="yes" value="yesOver">

          <label for="no">No:</label>
          <input type="radio" name="Over18" id="no" value="noOver">

        <!-- DropDown Menu  -->
          <p>Do you have a Credit Card or PayPal?</p>
          <select name="payment">
            <option value="cc">Credit Card</option>
            <option value="pp">PayPal</option>
          </select>

          <!-- Button -->
          <input type="submit" name="" value="Submit Feedback">


        </form>


  </body>
</html>

  ```  
# **Lesson 2**  
## 1. **CSS**  

- ### External CSS  
```    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">  ```  

## **Webpage Inspect**  
-  (Right click / or / Ctrl + Shift + I)
- Can change CSS on the fly but since it is just on the front-end ,the changes revert to default when refreshed.  

- ### Specificity  
-specify the tags to change with unique id.  
```  <li id='two' class="TopItems">Second</li>  ```  
``` 
#two{
  border: 2px solid black;
}  
```


## FONTS
cssfontstack.com  
fonts.google.com  
googlefonts.api  
 

## **BOX MODEL**  

## **BOOTSTRAP**  
-getbootstrap.com  

- ### Container Class  
```  
<div class="container">
<h2>More Stuff</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>  
  ```  

- ### Jumbotron Class  
```  
<div class="jumbotron">
<h1>Hello</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>  
```  
# **Lesson 3**  
## **JAVASCRIPT** (inspect webpage -> console)  
### Basic Data Types  
- #### integer(any number is an integer)  
- #### strings ("in quotes")  
-Concatenation (with a "+" sign)  
-Length(.length)  
-Escape characters  

- ("\n") starts a new line.  
- ("\t") inserts a tab.  
- (\"quotes\") inputs quotes inside a javascript string.  
- Indexing (position of the letter in [] gives the lettter starts from 0)

- #### booleans(true / false)  
- #### undefined / null
- #### variables  
assigns values to a variable :  
```  
var account = 100;  
var deposit = 50;  
var total = account + deposit
```  
- #### console output  
```  
console.log("Message");
  ```  
- #### prompt  
```  
prompt("Message")  
```  
```  
var age = prompt("Enter your age : ")  
```  
- ### Connecting a JAVASCRIPT file  
```  
<script src="myscript.js" charset="utf-8"></script>  
```  
- #### operators 
- Comparision operators   
">"  
"<"  
"<="  
">="  
- Logical operators  
"&&" //AND operator  
"||" //OR operator  
"!" // NOT operator  

### **CONTROL FLOW**  
- #### IF statement  
```  
if(condition){
//Exceute some code
}
  ```  
- #### IF ELSE statement  
```  
if(condition){
  //Execute some code}else{
    //Execute some other code
}  
```  
- #### IF, ELSE IF, ELSE statement  
```  
if(condition){
  //Execute some code
  }else if{
    //Execute some other code
}else{
  //Execute some backup code
}  
```  
## **LOOPS**  
- ### While loop
```  
while(condition){
  //execude this code while
  //this condition is true
}  
```  
- ### For loop  

- #### for loop  
```  
for(var i=0; i<5; i++){
//Execute some code
}  
```  

- #### for/in loop  
- #### for/of loop  

## **FUNCTIONS**  
- ### Function
```  
function hello(){
  console.log("hello world!");
}  
//hello() to execute the defined function  
```  
- ### Return  
```  
function multiply(numInput){
  var result = numInput * 5
  return result
}  
```
## **ARRAY**  
```  
countries["UK","Nepal","China"]//defining an array  
countries[(index number assigned value in array)]
```  
-immutable  
a string is immutable(non-changeable)  

-mutable
array is mutable(changeable)
- #### mixed data type
```  
mixed[true, 20 , "string"]  
```  
- ### Array Methods  
-(.push) to add into an array.  
```  
myArr.push("push")  
```
-(.pop) to remove from an array.  

- ### Nested Array  
```  
var matrix = [[1,2,3],[4,5,6],[7,8,9]]  
```  

- ### Array Iteration  
```  
var arr = ["A", "B", "C"]
for(var i=0; i<arr.length; i++){
  console.log(arr[i]);
}  
```  
## **JAVASCRIPT OBJECTS**  
```  
var carInfo = {make:"Ferrari", year:2002, model:"La'Ferrari"};  
   (object) = (key)   (value)
    carInfo["make"] -> "Ferrari"  
```  
```  
var myNewObj = {a:"hello", b:[1,2,3], c:{inside:['a', 'b']}};
myNewObj -> Object {a:"hello", b:Array[3], c:Object}  
```  
- #### "this" keyword  
```  
var myObj = {
  name : "Swaan",
  greet : function(){
    console.log("Hello "+ this.name)
  }
}  
```   
## **DOCUMENT OBJECT MODEL**
```  
console.dir(docuemnt)  
```
### Methods for grabbing elements from DOM  
- docuemnt.getElementById() || ->(returns the elements with the id that is passed in it // '#' for specifying an id)  
- docuemnt.getElementByClassName() || ->(returns the element with the class name that is passed in it // '.' for specifying a class)  
- docuemnt.getElementsByTagName() || ->(returns the element with the tag name that is passed in it)  
- docuemnt.querySelector() || ->(returns the first object matching the CSS style selector)  
- docuemnt.querySelectorAll() || ->(returns all objects matching the CSS style selector)  

#### Document attributes:  
- document.URL->(returns actual url of website)  
- document.body->(returns the html of the entire body)  
- document.head->(returns everything in the head of the page)  
- document.links->(returns the links in the page)  

### **Content Interaction**  
```  
// 

var x = document.querySelector("p")

// Show Text
x.textContent

// Reassign Text
x.textContent = "new"

// Refresh the page
// Show actual HTML
x.innerHTML

// Edit HTML
x.innerHTML = "This is <strong>BOLD</strong>"

// Can't do that with just textContent

/////////////////
// Attributes //
///////////////

var special = document.querySelector("#special")
var specialA = y.querySelector("a")

specialA.getAttribute("href")

specialA.setAttribute("href","https://www.amazon.com")  
```

### **Event Listener**  
- Clicks
- Hovers
- Double Clicks
- Drags, etc.  

```  
//  
var headOne = document.querySelector('#one')
var headTwo = document.querySelector('#two')
var headThree = document.querySelector('#three')

// Hover (mouseover and mouseout)
headOne.addEventListener('mouseover',function(){
  headOne.textContent = "Mouse currently Over";
  headOne.style.color = 'red';
})

headOne.addEventListener('mouseout',function(){
  headOne.textContent = "Mouse Not On me."
  headOne.style.color = 'blue';
})


// On Click
headTwo.addEventListener("click",function(){
  headTwo.textContent = "Clicked On";
  headTwo.style.color = 'blue';
})

// Double Click
headThree.addEventListener("dblclick",function(){
  headThree.textContent = "Double Clicked!";
  headThree.style.color = 'red';
})  
```