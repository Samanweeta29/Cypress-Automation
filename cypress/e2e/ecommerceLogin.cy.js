import ecommerceLoginPage from "../Page Objects/ecommerceLoginPage";
import AddToCart from "../Page Objects/addToCart";

describe('E2E Scenario for any e-commerce application',()=>{

    beforeEach(()=>{
        cy.visit('https://qa-practice.netlify.app/auth_ecommerce');
        cy.fixture('ecommerce').then((data)=>{
            const ln = new ecommerceLoginPage();
            ln.setEmail(data.email);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();
        })
        
    })

    it('search for Iphone13',()=>{
        const ln= new AddToCart();
        ln.addToCart();
        ln.validateCartItem();
        ln.clickProceedToCheckOut();
    
    })
})