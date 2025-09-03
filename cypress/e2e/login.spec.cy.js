describe('Teste de login', () => {

  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert',
    dasboardGrid: ".orangehrm-dashboard-grid"
  }
  
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dasboardGrid)

  })
   it('Login com falha - usuario invalido', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Teste')
    cy.get(selectorslist.passwordField).type('admin123')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)

  })
  it('Login com falha - senha invalida', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('Admin')
    cy.get(selectorslist.passwordField).type('Teste')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)

  })
   it('Login com falha - usuario e senha invalidos', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorslist.usernameField).type('ddddd')
    cy.get(selectorslist.passwordField).type('wwwww')
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)

  })
  
})