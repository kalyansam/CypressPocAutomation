class Calculator{
    

    CalcPageurlAssertion(){
return cy.url().should('includes','calc')
    }

    CalcVar1(){
        return cy.get('[ng-model="first"]')
    }

    CalcVar2(){
        return cy.get('[ng-model="second"]')
    }

    droprdownselection(){
        return cy.get('select')
    }

    GoButton(){
        return cy.get('#gobutton')
    }
   
  CommentResults(){
    return cy.get('.form-inline > .ng-binding')
  }

  Resultstable(){
      return cy.get('tbody > :nth-child(1) > :nth-child(3)')
   
  }

}
export default Calculator