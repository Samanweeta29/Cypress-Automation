import LoginPage from "../Page Objects/LoginPage";


describe('Login Test using POM with Fixtures',()=>{
    
    it('LoginTest', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.fixture('orangehrm').then((data)=>{
        const ln= new LoginPage();
        ln.setUsername (data.username);
        ln.setPassword (data.password);
        ln.clickLogin();
        ln.verifyLogin();
        })
    })
})