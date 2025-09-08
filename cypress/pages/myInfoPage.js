class MyInfoPage {

    selectorsList () {
        const selectors = {
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
        return selectors
    }

    fillPersonalDetails (firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameFild).clear().type(firstName)
        cy.get(this.selectorsList().middldeNameFild).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }
    fillEmployeeDetails (employeeId, otherId, numberDrivesLicence, driversLicenceDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(342)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(3456)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(12341)
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2002-10-01')
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
        
    }
    saveForm () {
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('.oxd-toast').should('contain', 'Successfully Updated')
        

    }
    fillStatus(){
        cy.get(this.selectorsList().listSelectors).eq(0).click()
        cy.get(this.selectorsList().optionSelect).click()
        cy.get(this.selectorsList().listSelectors).eq(1).click()
        cy.get(this.selectorsList().optionSelect2).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('2027-02-09')
        cy.get(this.selectorsList().closeButton).click()
        cy.get(this.selectorsList().genderSelect).eq(0).click()
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get('.oxd-toast').should('contain', 'Successfully Updated')

    }
    
    
}
export default MyInfoPage