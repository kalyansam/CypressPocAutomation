import Initialization from "../../support/FrameWork/InitializationPage"
import BankingPage from "../../support/FrameWork/BankingPage"

describe('banking page',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('banking testcase',function(){
        var setup= new Initialization()
        var bankP=new BankingPage()

setup.Way2AutomationUrl()
setup.uncoughtexception()
setup.uncoughtexception()

// navigating to bank URL
setup.openbankingpage()
// Assertion with url to make sure its navigation to banking page only
bankP.BankingpageUrlassertion()
bankP.banktitle().should('have.text','XYZ Bank')

//click on customer login page
bankP.openCustomerLoginpage().click()

//Assertion with customer url to make sure its navigation to customer page only
bankP.customerpageurlAssertion()

// select the customer
bankP.selectcustomer().select(this.data.Customer2)

//click on login button

bankP.loginbutton().click()

//account assertion
bankP.accounurlAssertion()

// customer Profile assertion

bankP.customertitleAssertion().should('have.text',this.data.Customer2)

//check transaction,deposit and withdrawl compenents are displayed

bankP.transactionpagebutton().should('be.visible')
bankP.DepositPage().should('be.visible')
bankP.withdrawlbutton().should('be.visible')

bankP.transactionpagebutton().click()

// transaction page Assertion

bankP.transactionpageurl()

bankP.BackButton().click()

// assertion to make sure it landed on account page
bankP.accounurlAssertion()

// Click on deposit button

bankP.DepositPage().click()

bankP.amountenterpage().should('be.visible')

// enter amount to be deposited 

bankP.amountenterpage().type(this.data.Dspositamount)

//click on deposit button

bankP.depositbutton().click()

// deposit cunformation notification

bankP.Transactionsuccesfullmessage().should('have.text','Deposit Successful')

// check the totol balance

var cvalue1
bankP.totalbalance().then(function(el){
var Tbalance=el.text()
//cy.log(Tbalance)
cvalue1=Number(Tbalance)
expect(cvalue1).to.equal(Number(this.data.Dspositamount))
})


// withdrawl functionality

bankP.withdrawlbutton().click()



//assertion on title
bankP.withdrawnlabel().should('have.text','Amount to be Withdrawn :')

//enetr amount to be withdrawn

bankP.amountenterpage().type(this.data.Withdrawamount)

// click on withdrawl button

bankP.withDbutton().click()


// transaction successgul notification

bankP.Transactionsuccesfullmessage().should('have.text','Transaction successful')


 bankP.totalbalance().then(function(el){
  var Wbalance=el.text()
// cy.log(Wbalance)

 var sub=cvalue1-this.data.Withdrawamount

  expect(Number(Wbalance)).to.equal(sub)

   })

bankP.transactionpagebutton().click()

//cy.wait(5000)
cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
    
    const amount=$e1.text()
    if(amount.includes(cvalue1)){

        //expect(Number(amount)).to.equal(cvalue1)
 cy.get("tr td:nth-child(2)").eq(index).then(function(amount)
   {
var amount=   amount.text()
 expect(Number(amount)).to.equal(cvalue1)
    })

}
})
   
// Nvaigating back to login page
bankP.Homebutton().click()

// login in as manager 

bankP.BankmanagerloginB().click()

//After login check addcustomer ,Openacount,customers compenents are seen

bankP.AddCustomer().should('be.visible')
bankP.customercomponent().should('be.visible')
bankP.openaccount().should('be.visible')

//Click on ADD Customer button to navigate to add customer page

bankP.AddCustomer().click()

// check the firstname ,lastName ,Post Code




    })
})