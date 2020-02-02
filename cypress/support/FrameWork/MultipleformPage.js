class multiformPage{


    name(){
        return cy.get(':nth-child(1) > .form-control')
    }
    emailid(){
        return cy.get(':nth-child(2) > .form-control')

    }

    clickonNextButton(){
        return cy.get('.btn').click()
    }

    Checkbox1(){
        return cy.get(':nth-child(1) > label > .ng-valid').click()
    }

    Checkboxassertionxbox(){
        return cy.get(':nth-child(1) > label > .ng-valid')
    }

    Checkboxassertionps4(){
        return cy.get('.ng-pristine')
    }


    displaytext(){
        return cy.get('h3').then(function(el){
const textdisplay=el.text()
cy.log(textdisplay)
        }).should('have.text','Test Completed, WooHoo!')
    }

    displaytext2(){
        return cy.get('h3').should('have.text','Test Completed, WooHoo!')
    }

    Paymentassertion(){
        return cy.url().should('include','payment')
    }

    MultippageUrl(){
        return cy.url().should('include','profile')
    }
}

export default multiformPage