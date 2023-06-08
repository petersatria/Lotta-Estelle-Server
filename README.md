## Endpoint Admin

- GET /admin/products
- GET /admin/products/size
- POST /admin/products
- POST /admin/products/size
- PUT /admin/products/:id
- PUT /admin/products/size/:id

## Endpoint Public Api

- POST /api/register
- POST /api/login
- GET /api/products
- GET /api/products/:id
- POST /api/transactions
- PATCH /api/transactions/:id
- GET /api/transactions/

# Endpoint Admin

## 1. POST /admin/products

- Description : create a new product

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

- request body

```json
{
  "name": "praesent",
  "title": "praesent",
  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
  "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "price": 1000000,
  "categoryName": "Shirt"
}
```

### Response

- Response (201) - Success created an product

```json
{
  "message": "Success create product",
  "data": {
    "id": 22,
    "name": "test multer 2",
    "title": "test multer 2",
    "description": "test multer",
    "price": 99999,
    "discount": 0,
    "imgUrl": "https://res.cloudinary.com/dwl97wtt2/image/upload/v1686151172/b4ju0umehmi4pywsygbg.jpg",
    "categoryName": "Shirt",
    "updatedAt": "2023-06-07T15:19:34.023Z",
    "createdAt": "2023-06-07T15:19:34.023Z"
  }
}
```

- Response (400) - Failed created an product

```json
{
  "message" : "Name is required"
}
OR
{
  "message" : "Title is required"
}
OR
{
  "message" : "Description is required"
}
OR
{
  "message" : "Price is required"
}
OR
{
  "message" : "imgUrl is required"
}
OR
{
  "message" : "Category is required"
}
```

## 2. GET /admin/products

- Description : get all products

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success get data products

```json
{
    "message": "Success get data",
    "data": [
        {
            "id": 35,
            "name": "pellentesque eget nunc",
            "title": "vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
            "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "price": 155176,
            "discount": 0,
            "imgUrl": "https://adidas.co.id/media/catalog/product/h/z/hz4154_2_apparel_photography_front20center20view_grey.jpg",
            "categoryName": "Bottoms",
            "createdAt": "2023-06-07T22:08:51.581Z",
            "updatedAt": "2023-06-07T22:08:51.581Z",
            "SizeProducts": []
        },
 ...
 ]
}
```

## 3. GET /admin/products/size

- Description : get all size

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success get all size

```json
{
    "message": "Success get data",
    "data": [
        {
            "id": 3,
            "size": "M",
            "stock": 7,
            "ProductId": 1,
            "createdAt": "2023-06-07T08:36:55.720Z",
            "updatedAt": "2023-06-07T08:36:55.720Z"
        },
        {
            "id": 4,
            "size": "L",
            "stock": 4,
            "ProductId": 1,
            "createdAt": "2023-06-07T08:36:55.720Z",
            "updatedAt": "2023-06-07T08:36:55.720Z"
        },
        ...
    ]
}
```

- Response (404) - Data not found

```json
{
  "message": "Data is not found"
}
```

## 4. PUT /admin/products/:id

- Description : create product

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

- request body

```json
{
  "name": "praesent",
  "title": "praesent",
  "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
  "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "price": 1000000,
  "categoryName": "Shirt"
}
```

### Response

- Response (200) - Success update product

```json
{
  "message": "Success update product"
}
```

- Response (404) - Product not found

```json
{
  "message": "Data is not found"
}
```

## 5. POST /admin/products/size

- Description : create new size for a product

### Request

- request body

```json
{
  "size": "XL",
  "stock": 5,
  "ProdcutId": 1
}
```

### Response

- Response (201) - Success create new size

```json
{
  "message": "Success update data",
  "sizeProductId": 2,
  "productId": 1
}
```

## 6. PUT /admin/products/size/:id

- Description : edit size product

### Request

- request body

```json
{
  "size": "XL",
  "stock": 10
}
```

### Response

- Response (201) - Success edit size product

```json
{
  "message": "Success update data",
  "sizeProductId": 1,
  "productId": 1
}
```

# Endpoint Public Api

## 1. POST /api/register

- Description : create a new user account

### Request

- request body

```json
{
  "firstName": "admintest",
  "lastName": "admintest",
  "phoneNumber": "admintest",
  "address": "admintest",
  "email": "admin@test.com",
  "password": "admintest"
}
```

### Response

- Response (201) - Success registered user

```json
{
  "message": "Success registered user",
  "data": {
    "id": 11,
    "role": "Admin"
  }
}
```

- Response (400) - Failed create account

```json
{
   "message": "Email is required"
}
OR
{
   "message": "Password is required"
}
```

## 2. POST /api/login

- Description : login the user with their account

### Response

- Response (200) - Success to login

```json
{
  "message": "Success to login",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MjQ3MzA5fQ.wKWMyOpWjhyJHOeRSCc0wraOqdMHqpvT9invZr_38gs",
  "username": "mbartolomeu0",
  "role": "Customer"
}
```

- Response (400) - Failed login because of empty input

```json
{
  "message": "Email / password is required"
}
```

- Response (401) - Invalid user credentials

```json
{
  "message": "Email / password is incorrect"
}
```

## 3. GET /api/products

- Description : get all products

### Response

- Response (200) - Success get data products

```json
{
 "message": "Success get data",
 "data": [
     {
            "id": 35,
            "name": "pellentesque eget nunc",
            "title": "vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
            "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "price": 155176,
            "discount": 0,
            "imgUrl": "https://adidas.co.id/media/catalog/product/h/z/hz4154_2_apparel_photography_front20center20view_grey.jpg",
            "categoryName": "Bottoms",
            "createdAt": "2023-06-07T22:08:51.581Z",
            "updatedAt": "2023-06-07T22:08:51.581Z",
            "SizeProducts": []
        },
 ...
 ]
}
```

## 4. GET /api/products/:id

- Description : get an product by id

### Response

- Response (200) - Success get an product

```json
{
  "message": "Success get data",
  "data": {
    "id": 1,
    "name": "porttitor lacus at",
    "title": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "price": 394684,
    "discount": 0,
    "imgUrl": "http://dummyimage.com/175x100.png/cc0000/ffffff",
    "categoryName": "Dresses",
    "createdAt": "2023-06-07T08:36:55.707Z",
    "updatedAt": "2023-06-07T08:36:55.707Z",
    "SizeProducts": [
      {
        "id": 3,
        "size": "M",
        "stock": 7,
        "ProductId": 1
      },
      {
        "id": 4,
        "size": "L",
        "stock": 4,
        "ProductId": 1
      },
      ...
    ]
  }
}
```

- Response (404) - product not found

```json
{
  "message": "Data is not found"
}
```

## 5. PATCH /api/transactions/:id

- Description : paid and decrement stock

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success paid and decrement stock

```json
{
  "message": "Success paid",
  "data": [
    {
      "id": 1,
      "size": "1",
      "qty": "1",
      "ProductId": 1,
      "TransactionId": 2,
      "createdAt": "2023-06-07T09:21:39.530Z",
      "updatedAt": "2023-06-07T09:21:39.530Z"
    },
    {
      "id": 2,
      "size": "2",
      "qty": "1",
      "ProductId": 1,
      "TransactionId": 2,
      "createdAt": "2023-06-07T09:21:39.530Z",
      "updatedAt": "2023-06-07T09:21:39.530Z"
    }
  ]
}
```

## 6. POST /api/transactions

- Description : create transaction

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

- request body

```json
{
  "data": [
    {
      "id": 1,
      "price": 50000,
      "size": "XL",
      "qty": 9
    },
    {
      "id": 2,
      "price": 150000,
      "size": "L",
      "qty": 9
    }
  ]
}
```

### Response

- Response (201) - Success create transaction

```json
{
  "message": "Success checkout product",
  "midtransToken": "adtg2t2ty4y4",
  "transaction": {
    "id": 1
  }
}
```

## 7. GET /api/transactions

- Description : get transaction

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (201) - Success get transaction

```json
{
    "message": "Success get data",
    "data": [
        {
            "id": 2,
            "date": "2023-06-08T02:30:24.410Z",
            "status": "Paid",
            "totalPrice": 967152,
            "UserId": 1,
            "createdAt": "2023-06-08T02:30:24.412Z",
            "updatedAt": "2023-06-08T02:31:10.000Z",
            "TransactionProducts": [
                {
                    "id": 2,
                    "size": "35",
                    "qty": "2",
                    "ProductId": 13,
                    "TransactionId": 2,
                    "Product": {
                        "id": 13,
                        "name": "venenatis non",
                        "title": "proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing",
                        "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                        "price": 483576,
                        "discount": 0,
                        "imgUrl": "https://www.adidas.co.id/media/catalog/product/i/b/ib8388_2_apparel_photography_front20center20view_grey.jpg",
                        "categoryName": "Tops"
                    }
                }
            ]
        },
        ...
    ]
}
```

## Global Errors

- Response (401) - Unauthenticated

```json
{
  "message": "Unauthenticated"
}
```

- Response (500) - Internal Server Error

```json
{
  "message": "Internal Server Error"
}
```
