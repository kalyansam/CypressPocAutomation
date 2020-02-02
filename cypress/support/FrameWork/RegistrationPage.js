class RegistrationPAge{

    username(){
       return cy.get('#username')
    }

    password(){
        return cy.get('#password')
    }

    secondUsername(){

       return cy.get('#formly_1_input_username_0')
    }

    loginbutton(){

        return cy.get('.btn')
    }

    RegistrationAssertion()
    {
        
        return cy.url().should('include','login')
        
    }
  

    RegistrationAssertionHome(){
        return cy.get('div.ng-scope > :nth-child(2)').should('have.text','You\'re logged in!!')
    }

    registrationlogout(){
        return cy.get('a').click()
    }

    mandatoryCommentsAssertion(){
        return cy.get('[data-layer="Content"]')
    }
}

export default RegistrationPAge