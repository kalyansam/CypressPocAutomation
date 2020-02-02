import initialization from '../../support/FrameWork/InitializationPage'
import CalculatorPage from '../../support/FrameWork/CalculatorPage'

describe('My testcase',function(){
before(function(){
    cy.fixture('example').then(function(data){
        this.data=data
    })

})
    it('my calci testcase',function(){

var init= new initialization()
init.Way2AutomationUrl()
init.uncoughtexception()
cy.scrollTo('bottom')
init.Opencalculatorpagee()

const calc= new CalculatorPage()
//calc.droprdownselection().select('+').should('have.value','ADDITION')
//calc.droprdownselection().select('-').should('have.value','SUBTRACTION')
//calc.droprdownselection().select('/').should('have.value','DIVISION')
//calc.droprdownselection().select('%').should('have.value','MODULO')
//calc.droprdownselection().select('*').should('have.value','MULTIPLICATION')

// case 1 addition
calc.CalcVar1().type(this.data.Num1)
calc.CalcVar2().type(this.data.Num2)
calc.droprdownselection().select('+').should('have.value','ADDITION')
calc.GoButton().click()
cy.wait(3000)

var cvalue1
 calc.CommentResults().then(function(el){
var cvalue=el.text()
cvalue1=Number(cvalue)
  })

 calc.Resultstable().then(function(el){
    const resultvalue=el.text()
     var  resultG=Number(resultvalue)
    expect(Number(cvalue1)).to.equal(Number(resultG))
   })


//case 2 substraction

calc.CalcVar1().type(this.data.Num1)
calc.CalcVar2().type(this.data.Num2)
calc.droprdownselection().select('-').should('have.value','SUBTRACTION')
calc.GoButton().click()
cy.wait(3000)

var cvalue1
 calc.CommentResults().then(function(el){
var cvalue=el.text()
cvalue1=Number(cvalue)
  })

 calc.Resultstable().then(function(el){
    const resultvalue=el.text()
     var  resultG=Number(resultvalue)
    expect(Number(cvalue1)).to.equal(Number(resultG))
   })


   // case 3 division
   calc.CalcVar1().type(this.data.Num1)
   calc.CalcVar2().type(this.data.Num2)
   calc.droprdownselection().select('/').should('have.value','DIVISION')
   calc.GoButton().click()
   cy.wait(3000)
   
   var cvalue1
    calc.CommentResults().then(function(el){
   var cvalue=el.text()
   cvalue1=Number(cvalue)
     })
   
    calc.Resultstable().then(function(el){
       const resultvalue=el.text()
        var  resultG=Number(resultvalue)
       expect(Number(cvalue1)).to.equal(Number(resultG))
      })

      // case 4 modulo
   calc.CalcVar1().type(this.data.Num1)
   calc.CalcVar2().type(this.data.Num2)
   calc.droprdownselection().select('%').should('have.value','MODULO')
   calc.GoButton().click()
   cy.wait(3000)
   
   var cvalue1
    calc.CommentResults().then(function(el){
   var cvalue=el.text()
   cvalue1=Number(cvalue)
     })
   
    calc.Resultstable().then(function(el){
       const resultvalue=el.text()
        var  resultG=Number(resultvalue)
       expect(Number(cvalue1)).to.equal(Number(resultG))
      })

// case 5 multiplication
 
calc.CalcVar1().type(this.data.Num1)
calc.CalcVar2().type(this.data.Num2)
calc.droprdownselection().select('*').should('have.value','MULTIPLICATION')
calc.GoButton().click()
cy.wait(3000)

var cvalue1
 calc.CommentResults().then(function(el){
var cvalue=el.text()
cvalue1=Number(cvalue)
  })

 calc.Resultstable().then(function(el){
    const resultvalue=el.text()
     var  resultG=Number(resultvalue)
    expect(Number(cvalue1)).to.equal(Number(resultG))
   })


    })
})