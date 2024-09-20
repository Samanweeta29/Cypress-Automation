class LoginPage{


    userNametxt= 'input[name="username"]';
    passwordtxt='input[name="password"]';
    btnLogin='button[type="submit"]';
    lblmsg= '.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';

    setUsername(username)
    {
        cy.get(this.userNametxt).type(username);
       
    }

    setPassword(password)
    {
       
        cy.get(this.passwordtxt).type(password);
    }

    clickLogin()
    {
       
        cy.get(this.btnLogin).click();
    }

    verifyLogin()
    {
        cy.fixture('orangehrm').then((data)=>{
            cy.get(this.lblmsg).should('have.text',data.message);
        })
       
    }
}

export default LoginPage;