# Random Data Generator Package

This package provides several utility functions to generate random data like names, dates, numbers, alphanumeric strings, and more. It can be useful for creating mock user data, testing, or seeding databases.

## Installation

To use this package in your project, you can install it via npm:

```bash
npm install random-data-generator
```

## Usage

After installation, you can import the functions and start using them:

```js
import RandomDataGenerator from 'random-data-generator';

// Example usage
const randomUser = RandomDataGenerator.randomUserGen(1);
console.log(randomUser);
```

### Available Functions

#### 1. `randomIntegerGen(min, max)`

Generates a random integer between `min` and `max` (inclusive).

```js
const randomInt = RandomDataGenerator.randomIntegerGen(1, 100);
console.log(randomInt); // Example: 57
```

#### 2. `alphaNumericStringGen(length)`

Generates a random alphanumeric string of the specified length.

```js
const randomString = RandomDataGenerator.alphaNumericStringGen(10);
console.log(randomString); // Example: 'A1b2C3d4E5'
```

#### 3. `randomDateGen(startDate, endDate)`

Generates a random date between the `startDate` and `endDate`. Defaults to generating a date between 80 years ago and 20 years ago.

```js
const randomDate = RandomDataGenerator.randomDateGen();
console.log(randomDate); // Example: '05-14-1995'
```

#### 4. `firstNameGen()`

Generates a random first name from a predefined list.

```js
const randomFirstName = RandomDataGenerator.firstNameGen();
console.log(randomFirstName); // Example: 'Rohan'
```

#### 5. `lastNameGen()`

Generates a random last name from a predefined list.

```js
const randomLastName = RandomDataGenerator.lastNameGen();
console.log(randomLastName); // Example: 'Sharma'
```

#### 6. `calculateAge(dob)`

Calculates the age based on the date of birth. The date must be in `MM-DD-YYYY` format.

```js
const age = RandomDataGenerator.calculateAge('05-14-1995');
console.log(age); // Example: 30
```

#### 7. `dummyNumberGen()`

Generates a random dummy phone number starting with the country code `91` (India).

```js
const phoneNumber = RandomDataGenerator.dummyNumberGen();
console.log(phoneNumber); // Example: '919876543210'
```

#### 8. `dummyEmailGen()`

Generates a random email using the first name and appends `@xyz.com`.

```js
const email = RandomDataGenerator.dummyEmailGen();
console.log(email); // Example: 'rohan@xyz.com'
```

#### 9. `createUserObj(name, lastName, dob, age, email, phone_no)`

Creates a user object with the provided details.

```js
const user = RandomDataGenerator.createUserObj('Rohan', 'Sharma', '05-14-1995', 30, 'rohan@xyz.com', '919876543210');
console.log(user);
```

#### 10. `randomUserGen(length)`

Generates an array of random user objects. You can specify the number of users to generate.

```js
const users = RandomDataGenerator.randomUserGen(5);
console.log(users);
```

## Example of Generated User

```json
{
  "name": "Arjun",
  "lastName": "Verma",
  "dob": "06-23-1980",
  "age": 43,
  "email": "arjun@xyz.com",
  "phone no.": "918765432109"
}
```

## License

This project is licensed under the MIT License.

