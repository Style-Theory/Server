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
