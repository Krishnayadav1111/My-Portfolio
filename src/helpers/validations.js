import globalConstants from "./globalConstants";
import { regexHelper } from "./regex";

const validations = {};

validations.mobile = (value) => {
  // Check if the value is provided and has a length of 10
  // if (!value || value.length !== 10) {
  //   return "Invalid mobile number. It should be 10 digits.";
  // }

  // Check if the value is a valid number
  if (isNaN(value)) {
    return "Invalid mobile number. Please enter only numeric digits.";
  }

  // Additional checks specific to mobile number validation can be added here

  // If all checks pass, return null (indicating a valid mobile number)
  return null;
};

validations.number = (value) => {
  // Check if the value is provided and has a length of 10
  // if (!value || value.length !== 10) {
  //   return "Invalid mobile number. It should be 10 digits.";
  // }

  // Check if the value is a valid number
  if (isNaN(value)) {
    return "Please enter only numeric digits.";
  }

  // Additional checks specific to mobile number validation can be added here

  // If all checks pass, return null (indicating a valid mobile number)
  return null;
};

validations.email = (value) => {
  // Define a more robust regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email matches the regex pattern
  if (!emailRegex.test(value)) {
    return "Invalid email address. Please enter a valid email.";
  }

  // If the email passes the regex test, return null (indicating a valid email)
  return null;
};
//commented for future need
// validations.aadhar = (value) => {
//   if (value?.length !== 12) {
//     return "Aadhar Number should be 12 digits only.";
//   }
//   if (isNaN(value)) {
//     return "Invalid Aadhar number. Please enter only numeric digits.";
//   }
//   return null;
// };

export {validations}