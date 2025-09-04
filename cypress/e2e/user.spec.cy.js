import userData from '../fixtures/user-data.json'

describe('Teste de login', () => {

  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert',
    dasboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
  }

  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dasboardGrid)
    cy.get(selectorslist.myInfoButton).click()

})


})