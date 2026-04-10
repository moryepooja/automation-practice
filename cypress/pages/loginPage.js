class LoginPage {
  visit() {
    cy.visit("https://the-internet.herokuapp.com/login");
  }

  enterUsername(username) {
    cy.get("#username").type(username);
  }

  enterPassword(password) {
    cy.get("#password").type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }
}

export default LoginPage;
