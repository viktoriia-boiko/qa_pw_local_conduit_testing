import { test } from '../../_fixtures/fixtures';
import {
  SIGNIN_EMPTY_EMAIL_MESSAGE,
  SIGNIN_INVALID_CREDENTIALS_MESSAGE,
} from '../../../src/ui/constants/authErrorMessages';
import { generateNewUserData } from '../../../src/common/testData/generateNewUserData';

const user = generateNewUserData();
const testParameters = [
  {
    email: user.email,
    password: '',
    message: SIGNIN_INVALID_CREDENTIALS_MESSAGE,
    title: 'empty password',
  },
  {
    email: '',
    password: user.password,
    message: SIGNIN_EMPTY_EMAIL_MESSAGE,
    title: 'empty email',
  },
  {
    email: user.email,
    password: '1',
    message: SIGNIN_INVALID_CREDENTIALS_MESSAGE,
    title: 'wrong password',
  },
];

testParameters.forEach(({ email, password, message, title }) => {
  test.describe('Sign in negative tests', () => {
    test(`Sign in with ${title}`, async ({ signInPage }) => {
      await signInPage.open();
      await signInPage.fillEmailField(email);
      await signInPage.fillPasswordField(password);
      await signInPage.clickSignInButton();
      await signInPage.assertErrorMessageContainsText(message);
    });
  });
});
