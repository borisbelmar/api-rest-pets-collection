# API Rest Pet Collection

Tiny Rest API for teaching purposes. Express, Typescript and Prisma. Try this service on this [Live Demo](https://api-rest-pets-collection.herokuapp.com/api/v1/info)

## Prerequisites:

Configure your environment variables on `.env` file:

```
DATABASE_URL="mysql://root:root@localhost/test"
JWT_SECRET="secret"
```

Install dependencies with:

```bash
npm install
```

Push DB changes with:

```bash
npx prisma db push
```

## Usage:

The app counts with the following endpoints:

### GET /api/v1/info
Returns information about the app.

### GET /api/v1/ping
Returns 200 code if the app is running.

---

### POST /api/v1/auth/login
Returns a JWT token if the credentials are correct.

**Example request:**

*Method*: `POST`

*Endpoint: `/api/v1/auth/login`*

*Body:*
```json	
{
  "email": "dir@host.com",
  "password": "password"
}
```

**Example succesfully response:**

*Status: `200`*

*Body:*
```json
{
  "token": "<jwt_token>"
}
```

### POST /api/v1/auth/register
Returns the new user if email doesnt exists.

**Example request:**

*Method*: `POST`

*Endpoint: `/api/v1/auth/register`*

*Body:*
```json	
{
  "email": "dir@host.com",
  "password": "password"
}
```

**Example succesfully response:**

*Status: `201`*

*Body:*
```json
{
  "id": 1,
  "email": "dir@host.com"
}
```

---

### GET /api/v1/pets
Returns all user's pets. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `GET`

*Endpoint: `/api/v1/pets`*

**Example succesfully response:**

*Status: `200`*

*Body:*
```json
[
  {
    "id": 1,
    "name": "Cheems",
    "type": "Dog",
    "birth": "2020-01-01T00:00:00.000Z",
    "photo": "someUrl",
    "userId": 1
  }
]
```

### GET /api/v1/pets/:id
Return a pet by id. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `GET`

*Endpoint: `/api/v1/pets/1`*

**Example succesfully response:**

*Status: `200`*

*Body:*
```json
{
  "id": 1,
  "name": "Cheems",
  "type": "Dog",
  "birth": "2020-01-01T00:00:00.000Z",
  "photo": "someUrl",
  "userId": 1
}
```

### POST /api/v1/pets
Create a new pet for logged user. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `POST`

*Endpoint: `/api/v1/pets`*

*Body:*
```json
{
  "name": "Cheems",
  "type": "Dog",
  "birth": "2020-01-01T00:00:00.000Z",
  "photo": "someUrl"
}
```

**Example successfully response:**

*Status: `201`*

*Body:*
```json
{
  "id": 1,
  "name": "Cheems",
  "type": "Dog",
  "birth": "2020-01-01T00:00:00.000Z",
  "photo": "someUrl",
  "userId": 1
}
```

### PUT /api/v1/pets/:id
Update a pet by id. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `PUT`

*Endpoint: `/api/v1/pets/1`*

*Body:*
```json
{
  "name": "NotCheems",
  "type": "Cat"
}
```

**Example successfully response:**
*Status: `204`*

### DELETE /api/v1/pets/:id
Delete a pet by id. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `DELETE`

*Endpoint: `/api/v1/pets/1`*

**Example successfully response:**

*Status: `204`*