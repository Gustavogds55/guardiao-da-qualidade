import userData from '../fixtures/user-data.json'
import MenuPage from '../pages/menuPages'

const menuPage = new MenuPage()

describe('User Info Update', () => {

  const selectorslist = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert',
    dasboardGrid: ".orangehrm-dashboard-grid",
    //myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameFild: '[name="firstName"]',
    middldeNameFild: '[name="middleName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    closeButton: '.--close',
    saveButton: '.orangehrm-left-space',
    listSelectors: '.oxd-select-text--arrow',
    optionSelect: ':nth-child(22) > span',
    optionSelect2: '.oxd-select-dropdown > :nth-child(3)',
    genderSelect: '.--label-right'

  }

  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorslist.dasboardGrid)
    menuPage.accessMyInfo()
    //cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameFild).clear().type('Antonio')
    cy.get(selectorslist.middldeNameFild).clear().type('Luiz')
    cy.get(selectorslist.lastNameField).clear().type('Rodrigues')
    cy.get(selectorslist.genericField).eq(3).clear().type('3782')
    cy.get(selectorslist.genericField).eq(4).clear().type('5748')
    cy.get(selectorslist.genericField).eq(5).clear().type('1111')
    cy.get(selectorslist.dateField).eq(0).clear().type('2025-10-30')
    cy.get(selectorslist.closeButton).click()
    cy.get(selectorslist.saveButton).eq(0).click()
    cy.get('.oxd-toast').should('contain', 'Successfully Updated')
    cy.get(selectorslist.listSelectors).eq(0).click()
    cy.get(selectorslist.optionSelect).click()
    cy.get(selectorslist.listSelectors).eq(1).click()
    cy.get(selectorslist.optionSelect2).click()
    cy.get(selectorslist.dateField).eq(1).clear().type('1999-10-21')
    cy.get(selectorslist.closeButton).click()
    cy.get(selectorslist.genderSelect).eq(0).click()
    cy.get(selectorslist.saveButton).eq(0).click()
    cy.get('.oxd-toast').should('contain', 'Successfully Updated')










})


})