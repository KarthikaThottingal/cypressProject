import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { LoginPageActions } from "../../../PageObjects/PageActions.js/LoginPageActions";
import {HomePageActions } from "../../../PageObjects/PageActions.js/HomePageActions";

const loginpageActions = new LoginPageActions;
const homepageActions = new HomePageActions;

//describe("demo of writing a page object model", ()=> {
   // it("TestCase 1 : Login", ()=>{

 
When('user enter username', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    loginpageActions.username('Admin')
});       

When('user enter password', () => {
    
    loginpageActions.password('admin123')
}); 
When('user click on login button', () => {
    loginpageActions.clickOnLoginButton()
});

When('user able to login to orange hrm and homepage displayed', () => {
    cy.wait(1000);
    homepageActions.homePageLogo()
});
