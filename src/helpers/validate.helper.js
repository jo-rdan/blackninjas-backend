import { check } from 'express-validator';

/**
 * A class that contains functions for all validations
 */
class Validate {
  /**
 * This return a validation chain for signup data.
 * @returns {[{ValidationChain}]}.
 */
  static signup() {
    return [
      check('firstname', 'First name should be valid.').isString(),
      check('lastname', 'Last name should be valid.').isString(),
      check('email', 'Invalid email address, example: example@gmail.com.').isEmail(),
      check('password', 'Password should be provided and must be alphanumeric with atleast 8 charactors.').isLength({ min: 8 }).isAlphanumeric(),
      check('country', 'Provided country is not valid.').optional().isString(),
      check('gender', 'Provided gender is not valid.').optional().isString(),
      check('birthday', 'Provided birthday is not valid.').optional().isString()
    ];
  }

  /**
   * validating User Inputs
   * @returns {Object} A user object with selected fields
   * excluing the password
   */
  static signin() {
    return [
      // username must be an email
      check('email', 'Invalid email address, example: example@gmail.com.').isEmail(),
      // password must be at least 5 chars long
      check('password', 'Invalid password, your password should be alphanumeric with atleast 8 charactors.').isLength({ min: 8 }).isAlphanumeric()
    ];
  }
}
export default Validate;
