import {
  checkValidationLength,
  checkValidationType,
} from "./checkValidation.js";
import { sendMarkedNumber } from "./sendMarkedNumber.js";

function customRegistrationNumber(registrationNumber) {
  const isValid =
    checkValidationType(registrationNumber) &&
    checkValidationLength(registrationNumber);

  if (isValid) {
    sendMarkedNumber(registrationNumber);
  }
}

customRegistrationNumber("210510-1010101");
customRegistrationNumber("210510-1010101010101");
customRegistrationNumber("2105101010101");
