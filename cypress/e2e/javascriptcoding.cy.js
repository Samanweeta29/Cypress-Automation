describe('coding practice',()=>{
    it('swapp 2 numbers',()=>{
        var a=parseInt(prompt('Enter value for a'));
        var b =parseInt(prompt('Enter value for b'));
        cy.log('value of a is: ' + a + ',value of b is: ' + b);
        b=a+b;
        a=b-a;
        b=b-a;
        cy.log('value of a is: ' + a + ',value of b is: ' + b);
    })
})