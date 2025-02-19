JS Foundation - arrow functions

Nodejs, express
Connect Mongodb, Schema(design)


function add(num1, num2){
    return num1+num2
}

let add = (num1, num2)=>{
    return num1, num2;
}

const my_function = (name_of_function, a_function) => {
    a_function = add(5,6);
    name = "Addition"
    console.log(name + a_function);
}

booksite/
booksite/1 - ansi c
booksite/34 - ansi c, ddi aaps

booksite/login

BOOKS
================
1. ansi c - {34.D Ritchie}
2. python 3 - {23. Linus Torvald}
3. designing data intensive apps - {34.D Ritchie}


routes - paths

GET - '/' - get all books*
    - '/id' - get one book
    - '/author_id' - gets book(s) by author

POST - 'add a book'

 

 https://www.youtube.com/watch?v=mbNzUkNjrnA

endpoints:
===============================
o
GET /items - Retrieve all items.
o
POST /items - Add a new item (send JSON
data).
o
PUT /items/{id} - Update an existing item by
ID.
o
DELETE /items/{id} - Delete an item by ID.

Test the API using Postman or a similar tool.

API Request -->

Header - content type, x-token
Body - data 

API Response

Status Code
200 - OK
201 - Created
301 - Permanently moved
400 - Bad Request
401
500 - Server Error
Data

PUT - update an existing rsource
items/34 - {author: New Author}

DELETE - Delete
items/id