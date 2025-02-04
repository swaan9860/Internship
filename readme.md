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
- ### In-line CSS  
```    ```
- ### External CSS  
```    ```

## **Webpage Inspect**  
-  (Right click / or / Ctrl + Shift + I)
- Can change CSS on the fly but since it is just on the front-end ,the changes revert to default when refreshed.  

- ### Specificity  
-specify the tags to change with unique id.  

## FONTS
cssfontstack.com  
fonts.google.com  
googlefonts.api  
 

## **BOX MODEL**  

## **BOOTSTRAP**