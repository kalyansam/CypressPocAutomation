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
        
        setup.OpenRegistrationPage()
        var Reg= new RegistrationPage()
        
        Reg.RegistrationAssertion()
        //Reg.mandatoryCommentsAssertion()
        Reg.loginbutton().should('be.disabled')
        Reg.username().type(this.data.Regname)

        // checking min length
        Reg.username().should('have.attr','minlength','3')
        
        Reg.loginbutton().should('be.disabled')
        Reg.password().type(this.data.Regpassowrd)
        Reg.loginbutton().should('be.disabled')
        Reg.secondUsername().type(this.data.Regname)
        Reg.secondUsername().should('have.value',this.data.Regname)
        Reg.loginbutton().should('not.be.disabled')
        Reg.loginbutton().click()
        Reg.RegistrationAssertionHome()
        Reg.registrationlogout()
        Reg.RegistrationAssertion()

    })
})
