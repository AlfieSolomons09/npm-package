# Backend User Authentication with Zod Validation

This npm package provides a backend user authentication solution using Zod for validation and bcrypt for password hashing. Zod is a TypeScript-first schema validation library that allows you to define the shape of your data and validate it with ease. Bcrypt is used for securely hashing and comparing passwords.

To read more about zod: https://www.npmjs.com/package/zod
To read more about bcrypt: https://www.npmjs.com/package/bcrypt

## Features

- Username validation using Zod
- Password validation using Zod
- Password Hashing using Bcrypt
- Password Comparison using Bcrypt

## HashedPassword Usage 

- To hash a password, use the hashedPassword function provided in the package.

```typescript
import { hashedPassword } from '@chetanc_2002/common';

const password = 'securePassword';

const hashPassword = async () => {
    const hashed = await hashedPassword(password);
    return hashed;
};
```

## ValidatePassword Usage

- To validate a password against a hashed password, use the validatePassword function provided in the package.

```typescript
import { validatePassword, hashedPassword } from '@chetanc_2002/common';

const checkPassword = async () => {
    const password = 'securePassword';
    const hashed = await hashedPassword(password); // Assume hashed is a stored hashed password
    const isValid = await validatePassword(password, hashed);
    
    if (isValid) {
        console.log('Password is valid');
    } else {
        console.log('Password is invalid');
    }
};
```

## Installation

You can install the package using npm:

```bash
npm install @chetanc_2002/common


