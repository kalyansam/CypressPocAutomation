/// <reference types="Cypress" />
import Initialization from "../../support/FrameWork/InitializationPage"
import RegistrationPage from "../../support/FrameWork/RegistrationPage"
import MultipleformPage from '../../support/FrameWork/MultipleformPage'
import Calculator from '../../support/FrameWork/CalculatorPage'
import CheckboxPage from '../../support/FrameWork/CheckboxPage'
import BankingPage from "../../support/FrameWork/BankingPage"
import webpagetables from '../../support/FrameWork/WebPageTables'



describe('My first POC',function(){
    it('my first Cypress Automation Script',function(){

var setup = new Initialization()
setup.Way2AutomationUrl()
setup.uncoughtexception()
cy.scrollTo('bottom')

// opening registration page
setup.OpenRegistrationPage()
var Reg= new RegistrationPage()
Reg.RegistrationAssertion()
cy.go('back') // Back to main page
setup.siteurlAssertionnavigate()


//opening multiple form page
var Mulp= new MultipleformPage()
setup.Openmultiformpagee()
cy.wait(2000)
Mulp.MultippageUrl()
cy.go('back')// back to main page
setup.siteurlAssertionnavigate()


// open calc page
const calcp= new Calculator()
setup.Opencalculatorpagee()
cy.wait(2000)
calcp.CalcPageurlAssertion()
cy.go('back')// back to main page
setup.siteurlAssertionnavigate()

// open checkbox page
const check= new CheckboxPage()
setup.opencheckboxpage()
check.checkpageurlAssertion()
cy.go('back')// back to main page
setup.siteurlAssertionnavigate()


// Open Banking Site
setup.openbankingpage()
var bankP=new BankingPage()
bankP.BankingpageUrlassertion()
cy.go('back')
setup.siteurlAssertionnavigate() 

//open webtable page site

setup.openwebtablepage()
const webP= new webpagetables()
webP.webpageurlAssertion()
cy.go('back')
setup.siteurlAssertionnavigate()






    })
})