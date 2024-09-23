describe('Handling Tables', ()=>{

    it.skip ('Table and its rows', () =>{
        cy.visit('https://demo.opencart.com/admin/')
        cy.get('#input-username').clear().type('demo')
        cy.get('#input-password').clear().type('demo')
        cy.get('[type="submit"]').click()

        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:nth-child(1)>a').click()
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr').should('have.length','10');
        cy.get('table[class="table table-bordered table-hover"]>thead>tr>td').should('have.length','7');
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr:nth-child(2)>td:nth-child(3)').should('have.text','e@mail.com')
    })

    it.skip('print read all data',()=>{
        cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
        .each(($row,index,$rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get('td').each( ($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })

    it('pagination read all data',()=>{

        cy.visit('https://demo.opencart.com/admin/')
        cy.get('#input-username').clear().type('demo')
        cy.get('#input-password').clear().type('demo')
        cy.get('[type="submit"]').click();
        cy.get('#menu-customer>a').click();
        cy.get('#menu-customer>ul>li:nth-child(1)>a').click();
        cy.get('.col-sm-6.text-end').then( (e)=>{
            let mytext=e.text();
            let totalPages=mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1 );
            cy.log("Total Pages-->"+totalPages);

        for(let p=1;p>=totalPages;p++)
                {
                    if(totalPages>1){
                    cy.log("Active page is : " + p);
                    cy.get(".col-sm-6.text-start>[class='pagination']>li:nth-child("+p+")").click();
                    cy.wait(3000);
                
                    cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
                    .each(($row,index,$rows)=>{

                        cy.wrap($row).within( ()=>{
                            cy.get('td:nth-child(3)').then( (e)=>{
                                cy.log(e.text());
                            })
                        })
                    })
                 }
            }
    })
})
})
