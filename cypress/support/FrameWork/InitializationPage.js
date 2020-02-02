class Initialization{

Way2AutomationUrl(){

    return cy.visit('http://www.way2automation.com/protractor-angularjs-practice-website.html')
    
}

uncoughtexception(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
}

OpenRegistrationPage(){
// first way
     return cy.get(':nth-child(2) > a > figure > img').then(function(el){

   const url= el.prop('href')
       cy.visit('http://www.way2automation.com/angularjs-protractor/registeration')

   //This is second this.Way2AutomationUrl
    //cy.get('div.container.margin-top-20:nth-child(4) div.row div.linkbox.margin-bottom-20 ul.boxed_style.block li:nth-child(2) > a:nth-child(1)').invoke('removeAttr','target').click({force:true})
    })

    
}

siteurlAssertionnavigate()
{
    return cy.url().should('include','practice-website')
}

Openmultiformpagee(){
    return cy.get(':nth-child(2) > a > figure > img').then(function(el){

        const url= el.prop('href')
            cy.visit('http://www.way2automation.com/angularjs-protractor/multiform')
         })   
        }
         
         Opencalculatorpagee(){
            return cy.get(':nth-child(2) > a > figure > img').then(function(el){
        
                const url= el.prop('href')
                    cy.visit('http://www.way2automation.com/angularjs-protractor/calc')
             
               
                 })   

         
              }

opencheckboxpage(){
    return cy.get(':nth-child(5) > a > figure > img').then(function(el){
var url=el.prop('href')
cy.visit('http://www.way2automation.com/angularjs-protractor/checkboxes')

    })
}

openbankingpage(){
    return cy.get(':nth-child(6) > a > figure > img').then(function(el){
        var url=el.prop('href')
        cy.visit('http://www.way2automation.com/angularjs-protractor/banking')
    })
}

openwebtablepage(){
    return cy.get(':nth-child(7) > a > figure > img').then(function(el){
        var url=el.prop('href')
        cy.visit('http://www.way2automation.com/angularjs-protractor/webtables')
    })
}

}
export default Initialization