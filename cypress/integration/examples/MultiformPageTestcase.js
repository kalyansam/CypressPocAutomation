import Initialization from "../../support/FrameWork/InitializationPage"
import RegistrationPage from "../../support/FrameWork/RegistrationPage"
import multiformpage from '../../support/FrameWork/MultipleformPage'


describe('My first POC',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('my first Cypress Automation Script',function(){

        var setup = new Initialization()
        setup.Way2AutomationUrl()
        setup.uncoughtexception()
        cy.scrollTo('bottom')

        setup.Openmultiformpagee()

        var multipage= new multiformpage()
        multipage.name().type(this.data.Regname)
        multipage.emailid().type(this.data.mulPemail)
        multipage.clickonNextButton()

        // check box 1 is checked and the other is not checked
        multipage.Checkbox1()
        multipage.Checkboxassertionxbox().click().should('be.checked')
        multipage.Checkboxassertionps4().should('not.be.checked')

        // check box 2 is check and 1 is not checked

        multipage.Checkboxassertionps4().click().should('be.checked')
        multipage.Checkboxassertionxbox().should('not.be.checked')
        multipage.clickonNextButton()

        multipage.displaytext2()
        multipage.Paymentassertion()


    })
})