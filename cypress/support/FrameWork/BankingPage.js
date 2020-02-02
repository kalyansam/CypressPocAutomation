class BankingPage{
BankingpageUrlassertion(){
    return cy.url().should('include','banking')
}

banktitle(){
    return cy.get('.mainHeading')
}


openCustomerLoginpage(){
    return cy.get('.borderM > :nth-child(1) > .btn')

}

customerpageurlAssertion(){
    return cy.url().should('include','customer')
}

selectcustomer(){
    return cy.get('select')

    
}
loginbutton(){
     return cy.get('form.ng-valid > .btn')   
}

customertitleAssertion(){
    return cy.get('.fontBig')
}

accounurlAssertion(){
    return cy.url().should('include','account')
}

transactionpagebutton(){

    return cy.get('[ng-class="btnClass1"]')
}

transactionpageurl(){
    return cy.url().should('includes','listTx')
}

BackButton(){
    return cy.get('.fixedTopBox > [style="float:left"]')
}

DepositPage(){
    return cy.get('[ng-class="btnClass2"]')
}

amountenterpage(){
    return cy.get('.form-control')
}


depositbutton(){

    return cy.get('form.ng-dirty > .btn')
}


Transactionsuccesfullmessage(){
    return cy.get('.error')
}

totalbalance(){
    return cy.get('.borderM > :nth-child(3) > :nth-child(2)')
}

withdrawlbutton(){
    return cy.get('[ng-class="btnClass3"]')
}

withDbutton(){
    return cy.get('form.ng-dirty > .btn')
}

withdrawnlabel(){
    return cy.get('label')
}

Homebutton(){
    return cy.get('.home')
}


BankmanagerloginB(){
    return cy.get(':nth-child(3) > .btn')
}

AddCustomer(){
    return cy.get('[ng-class="btnClass1"]')
}

openaccount(){
    return cy.get('[ng-class="btnClass2"]')
}

customercomponent(){
    return cy.get('[ng-class="btnClass3"]')
}

}

export default BankingPage