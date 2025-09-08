import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.js'
import DashboardPage from '../pages/dashbordPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Teste de login', () => {


  it.only('Login com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    // cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    // cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    // cy.get(selectorslist.loginButton).click()
    //cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    //cy.get(selectorslist.dasboardGrid)

  })
   it('Login com falha - usuario invalido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    
    // cy.visit('/auth/login')
    // cy.get(selectorslist.usernameField).type(userData.userFail.username)
    // cy.get(selectorslist.passwordField).type(userData.userFail.password)
    // cy.get(selectorslist.loginButton).click()
    // cy.get(selectorslist.wrongCredentialAlert)

  })
  it('Login com falha - senha invalida', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    // cy.visit('/auth/login')
    // cy.get(selectorslist.usernameField).type(userData.userFail.username)
    // cy.get(selectorslist.passwordField).type(userData.userFail.password)
    // cy.get(selectorslist.loginButton).click()
    //cy.get(selectorslist.wrongCredentialAlert)

  })
   it('Login com falha - usuario e senha invalidos', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    // cy.visit('/auth/login')
    // cy.get(selectorslist.usernameField).type(userData.userFail.username)
    // cy.get(selectorslist.passwordField).type(userData.userFail.password)
    // cy.get(selectorslist.loginButton).click()
    //cy.get(selectorslist.wrongCredentialAlert)

  })
  
})