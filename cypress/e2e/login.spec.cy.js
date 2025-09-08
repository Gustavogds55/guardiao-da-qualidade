import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/login.js'
import DashboardPage from '../pages/dashbordPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Teste de login', () => {


  it('Login com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  

  })
   it('Login com falha - usuario invalido', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail0.username, userData.userFail0.password)
    loginPage.checkAccessInvalid()
    
   
  })
  it('Login com falha - senha invalida', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail1.username, userData.userFail1.password)
    loginPage.checkAccessInvalid()
  })
    
   it('Login com falha - usuario e senha invalidos', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail2.username, userData.userFail2.password)
    loginPage.checkAccessInvalid()
    
  })
  
})