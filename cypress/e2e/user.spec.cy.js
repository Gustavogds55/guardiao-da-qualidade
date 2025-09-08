import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login'
import MenuPage from '../pages/menuPages'
import MyInfoPage from '../pages/myInfoPage'

const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const loginPage =new LoginPage()

describe('User Info Update', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Middle Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'OtherId','driverLicence','driversLicenceDate')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()






})


})