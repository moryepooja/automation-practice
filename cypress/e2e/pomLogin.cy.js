import LoginPage from '../pages/loginPage'

describe('Login Test', () => {

const login = new LoginPage()

it('Login with valid credentials', () => {
cy.fixture('loginData').then((data) => {

login.visit()

login.enterUsername(data.username)

login.enterPassword(data.password)

login.clickLogin()

})

})

})