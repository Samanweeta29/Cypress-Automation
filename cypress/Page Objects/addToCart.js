class AddToCart{
    addFirstItemCart=':nth-child(1) >.shop-item-details>.btn.btn-primary.shop-item-button';
    cartItem='.cart-item-title';
    proceedToCheckout= '.btn.btn-primary.btn-purchase';
    shippingdetailsheading='#shipping-address>h2';
    
    addToCart(){
        cy.get(this.addFirstItemCart).click();
    }

    validateCartItem(){
        cy.fixture('ecommerce').then((data)=>{
            cy.get(this.cartItem).should('have.text', data.cartItemAdded);
        })
        
    }

    clickProceedToCheckOut(){
        cy.fixture('ecommerce').then((data)=>{
            cy.get(this.proceedToCheckout).click(); 
            cy.get(this.shippingdetailsheading).should('have.text',data.shippingDetailstxt);
        })
       
    }
}

export default AddToCart;