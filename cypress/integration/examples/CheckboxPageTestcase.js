import Initialization from '../../support/FrameWork/InitializationPage'
import CheckboxPage from '../../support/FrameWork/CheckboxPage'


describe('chack box page',function(){

    it('checkbox testcase',function(){
// open first page
        var setup= new Initialization()
        setup.Way2AutomationUrl()
        setup.uncoughtexception()
        cy.scrollTo('bottom')

//open checkbox page

        var check = new CheckboxPage()
        setup.opencheckboxpage()
        check.checkpageurlAssertion()
 
        
       // Testcase 1 Disabled checkbox

       check.Gearboxcheckbox().should('be.disabled')
       check.Hammercheckbox().should('be.disabled')
       cy.scrollTo('bottom')
       check.bluepaintcheckbox().should('be.disabled')


       // store check box functionality

       check.storecheckbox().check()
  
      if(check.storecheckbox().check().should('be.checked'))
           {

            check.garage().should('be.checked')
            check.homeimprovement().should('be.checked')
            check.painting().should('be.checked')
            check.car().should('be.checked')


            check.storecheckbox().uncheck()   
            check.garage().should('not.be.checked')
            check.homeimprovement().should('not.be.checked')
            check.painting().should('not.be.checked')
            check.car().should('not.be.checked')
           }
      // })

    

    })
})