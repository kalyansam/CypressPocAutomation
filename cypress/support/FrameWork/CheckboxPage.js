class CheckboxPage{

    checkpageurlAssertion(){
        return cy.url().should('include','checkboxes')
    }

    Hammercheckbox(){
        return cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > ul > :nth-child(2) > .ng-binding > .ng-pristine')
    }

    bluepaintcheckbox(){
        return cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > ul > :nth-child(3) > .ng-binding > .ng-pristine')
    }

    Gearboxcheckbox(){
        return cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > ul > :nth-child(3) > .ng-binding > .ng-pristine')
    }


    storecheckbox(){
        return cy.get('h2 > .ng-valid')
    }

    homeimprovement(){
        return cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > h3.ng-binding > .ng-pristine')
    }

    painting(){
        return cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > h3.ng-binding > .ng-pristine')
    }

    garage(){
        return cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > h3.ng-binding > .ng-pristine')
    }

    car(){
        return cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > h3.ng-binding > .ng-pristine')
    }

}

export default CheckboxPage