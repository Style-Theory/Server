# Server
# Style Theory
**Register**
----

* **URL**

  /register

* **Method:**

  `POST`

*  **URL Params**

    **Required:**

    None

* **Data Body**

    `email:[string]` <br />
    `password:[string]` <br />
    `name:[string]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 10,
        "email": "testing9@mail.com",
        "name": "testing9",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoidGVzdGluZzlAbWFpbC5jb20iLCJpYXQiOjE1ODM0NzU0MjAsImV4cCI6MTU4MzQ3NTcyMH0.r3IpjH32ug7XKipHuT4-Vl-uHcB4rd2QHA_FLYgfuQc"
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`
# 
**Login**
----

* **URL**

  /login

* **Method:**

  `POST`

* **Data Body**

    `email:[string]` <br />
    `password:[string]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 10,
        "email": "testing9@mail.com",
        "name": "testing9",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoidGVzdGluZzlAbWFpbC5jb20iLCJpYXQiOjE1ODM0NzU3ODcsImV4cCI6MTU4MzQ3NjA4N30.qvOVrQVsUDVhc3ItUIho4Tn3gwlXAMBPU5xY2Bl9TKY"
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Login Google**
----

* **URL**

  /loginGoogle

* **Method:**

  `POST`

* **Data Body**

    `id_token:[string]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": 11,
        "email": "testing10@gmail.com",
        "name": "testing10",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoidGVzdGluZzlAbWFpbC5jb20iLCJpYXQiOjE1ODM0NzU3ODcsImV4cCI6MTU4MzQ3NjA4N30.qvOVrQVsUDVhc3ItUIho4Tn3gwlXAMBPU5xY2Bl9TKY"
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress FindAll**
----

* **URL**

  /

* **Method:**

  `GET`

* **Data Body**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "name": "Long Dress",
        "price": 500000,
        "status": false
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress FindMyStuff**
----

* **URL**

  /mystuff

* **Method:**

  `GET`

* **Data Body**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "name": "Long Dress",
        "price": 500000,
        "status": false,
        "UserId": 2
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress FindMyRent**
----

* **URL**

  /myorder

* **Method:**

  `GET`

* **Data Body**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "name": "Long Dress",
        "price": 500000,
        "status": false,
        "UserId": 2,
        "RentId": 1
    }
 
* **Error Response:**

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress Create**
----

* **URL**

  /

* **Method:**

  `POST`

* **Data Body**

    `name:[string]` <br />
    `price:[integer]` <br />
    `photos:[string]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "name": "Long Dress",
        "price": 500000,
        "photos": "www.imgur/lalalal"
    }
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message" : 'You Must Login First' }`

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress Update**
----

* **URL**
  /

* **Method:**

  `PUT`

* **Data Body**

    `name:[string]` <br />
    `price:[integer]` <br />
    `photos:[string]` <br />

* **Data Params**

    `id:[integer]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "name": "Long Dress",
        "price": 500000,
        "photos": "www.imgur/lalalal"
    }
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message" : 'You Must Login First' }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ "message" : 'Not Found' }`

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress Rent**
----

* **URL**

  /

* **Method:**

  `PATCH`

* **Data Body**

    `status:[boolean]` <br />
    `due_date:[date]` <br />

* **Data Params**

    `id:[integer]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "name": "Long Dress",
        "price": 500000,
        "photos": "www.imgur/lalalal"
        "due_date": 10/10/2020
    }
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message" : 'You Must Login First' }`

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

# 
**Dress Delete**
----

* **URL**

  /

* **Method:**

  `DELETE`

* **Data Body**

    NONE

* **Data Params**

    `id:[integer]` <br />

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "message": "Success Delete Data Id : 5"
    }
 
* **Error Response:**

  * **Code:** 401 Unauthorized <br />
    **Content:** `{ "message" : 'You Must Login First' }`

  * **Code:** 404 Not Found <br />
    **Content:** `{ "message" : 'Not Found' }`

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message" : 'Internal Server Error' }`

