import LoginPage from '../pages/loginPage'

describe('Login Test', () => {

const login = new LoginPage()

it('Login with valid credentials', () => {

login.visit()

login.enterUsername('tomsmith')

login.enterPassword('SuperSecretPassword!')

login.clickLogin()

})

})