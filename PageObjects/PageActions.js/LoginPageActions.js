const LoginPageLocators = require('../PageElements/LoginPageElements.json')
export class LoginPageActions{

    username(username_value)
    {
        cy.get(LoginPageLocators.LoginPageLocators.username).type(username_value)
        return
    }

    password(password_value)
    {
        cy.get(LoginPageLocators.LoginPageLocators.password).type(password_value)
        return
    }
    clickOnLoginButton()
    {
        cy.get(LoginPageLocators.LoginPageLocators.loginButton).click()

    }
}