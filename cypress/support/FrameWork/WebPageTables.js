class webpagetables{

    webpageurlAssertion(){
        return cy.url().should('include','webtables')
    }
}

export default webpagetables