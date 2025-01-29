# User Registration API Documentation

## Register User
Creates a new user account.

**URL**: `/users/register`

**Method**: `POST`

**Content-Type**: `application/json`

### Request Body

```json
{
    "fullName": {
        "firstName": "string", // required, min 3 characters
        "lastName": "string"   // optional, min 3 characters if provided
    },
    "email": "string",    // required, valid email format
    "password": "string"  // required, min 6 characters
}
```

### Success Response

**Code**: `201 Created`

```json
{
    "token": "jwt_token_string",
    "user": {
        "_id": "user_mongodb_id",
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john@example.com"
    }
}
```

### Error Responses

#### Validation Error
**Code**: `400 Bad Request`

```json
{
    "errors": [
        {
            "msg": "First name must be at least 3 characters long",
            "param": "fullName.firstName",
            "location": "body"
        }
    ]
}
```

#### Email Already Exists
**Code**: `400 Bad Request`

```json
{
    "error": "User with this email already exists"
}
```

### Example Request

```bash
curl -X POST \
  http://localhost:3000/users/register \
  -H 'Content-Type: application/json' \
  -d '{
    "fullName": {
        "firstName": "John",
        "lastName": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
}'
```

### Notes

- Password is automatically hashed before storage
- JWT token is generated upon successful registration
- Email must be unique in the system
- First name is mandatory, last name is optional
