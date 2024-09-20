class ecommerceLoginPage{
    txtEmail='input[id="email"]';
    txtPassword='input[id="password"]';
    btnSubmit='button[id="submitLoginBtn"]';
    loginVerifyTxt='a[id="logout"]';
    

    setEmail(email){
        cy.get(this.txtEmail).type(email);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    
    }

    verifyLogin(){
        cy.fixture('ecommerce').then((data)=>{
            cy.get(this.loginVerifyTxt).should('have.text',data.loginverify);
        })
        
    }

}
export default ecommerceLoginPage;
