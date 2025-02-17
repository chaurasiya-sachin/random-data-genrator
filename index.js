// Function to genrate a random integer between min and max(inclusive)

const randomIntegerGen = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to genrate a random AlphaNumericString Genrator of length (inclusive)
const alphaNumericStringGen = (length) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const id = Math.floor(Math.random() * chars.length);
    result += chars.charAt(id);
  }
  return result;
};

// Function to genrate a random date between start and end(inclusive)

// Function to format a date as MM/DD/YYYY
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0"); // Get day and pad it to 2 digits
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (0-indexed, so add 1) and pad it to 2 digits
  const year = date.getFullYear(); // Get the full year
  return `${month}-${day}-${year}`;
}

const randomDateGen = (start=new Date(new Date().setFullYear(new Date().getFullYear()-80)), end=new Date(new Date().setFullYear(new Date().getFullYear()-20))) => {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return formatDate(date);
};


// Function to generate a random name
const firstNameGen = () => {
  const firstNames = [
    "Arjun",
    "Aarav",
    "Vikram",
    "Rohan",
    "Ananya",
    "Kavya",
    "Lakshmi",
    "Priya",
    "Sita",
    "Aditi",
    "Rahul",
    "Neha",
    "Rajesh",
    "Nikhil",
    "Sneha",
    "Isha",
    "Kiran",
    "Suresh",
    "Meera",
    "Sunita",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];

  return randomFirstName;
};


const lastNameGen = () => {
  const lastNames = [
    "Sharma",
    "Verma",
    "Patel",
    "Singh",
    "Reddy",
    "Mehta",
    "Gupta",
    "Nair",
    "Choudhary",
    "Iyer",
    "Kumar",
    "Yadav",
    "Jain",
    "Chopra",
    "Pillai",
    "Das",
    "Bose",
    "Joshi",
    "Pandey",
    "Bhatt",
  ];

  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return randomLastName;
};

const dummyEmailGen = () => {
  return `${firstNameGen()}@xyz.com`;
};

const dummyNumberGen = () => {
  const num = "0123456789";
  let number = "91";
  for (let i = 0; i < 8; i++) {
    const digit = Math.floor(Math.random() * 10);
    number += digit;
  }
  return number;
};

const calculateAge = (dob) => {
    // Validate input date format
    if (!dob || typeof dob !== 'string' || !dob.match(/^\d{2}-\d{2}-\d{4}$/)) {
      console.log("Invalid date format. Please use MM-DD-YYYY format.");
      return;
    }
   
    const dobParts = dob.split('-');
    const birthDate = new Date(`${dobParts[2]}-${dobParts[0]}-${dobParts[1]}`); // YYYY-MM-DD
  
    // Check if the date is valid
    if (isNaN(birthDate)) {
      console.log("Invalid date input");
      return;
    }
  
    // Get the current date
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
  
    // Check if the birthday has passed this year
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
  
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--; // Subtract 1 if the birthday hasn't occurred yet this year
    } 
    return age;
  };

  const createUserObj = (name,lastName,dob,age,email,phone_no)=>{
    return {
        name:name,
        lastName:lastName,
        dob:dob,
        age:age,
        email:email,
        "phone no.":phone_no
    }
}

const randomUserGen = (length=1)=>{
    let arrOfUser = []
    for(let i=0;i<length;i++){
        const name = firstNameGen();
        const dob = randomDateGen();
        const age = calculateAge(dob) ;
        const email = name.toLowerCase()+"@xyz.com";
        const phone_no = dummyNumberGen()

        arrOfUser.push(createUserObj(name,lastNameGen(),dob,age,email,phone_no))
    }
    return arrOfUser;
}

export default {
  randomIntegerGen,
  alphaNumericStringGen,
  randomDateGen,
  firstNameGen,
  lastNameGen,
  calculateAge,
  dummyNumberGen,
  dummyEmailGen,
  createUserObj,
  randomUserGen
  
};
