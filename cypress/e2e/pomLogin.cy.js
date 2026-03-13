import LoginPage from '../pages/loginPage'

describe('Login Test', () => {

const login = new LoginPage()

it('Login with valid credentials', () => {
    cy.fixture('loginData').then((data)=>{
      cy.login(data.username,data.password)
      cy.contains('You logged into a secure area!')
      .should('be.visible')
    })
  })

  it('Login with invalid credentials', () => {
    cy.fixture('loginData').then((data)=>{
      cy.login(data.invalidUser,data.password)
      cy.contains('Your username is invalid!')
      .should('be.visible')
    })
  })
})