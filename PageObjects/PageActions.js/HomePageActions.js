const HomePageLocators = require('../PageElements/HomePageElements.json')
export class HomePageActions{

    homePageLogo()
    {
        cy.get(HomePageLocators.HomePageLocators.homePageLogo).should('be.visible')
        
    }
    adminTab(adminTab_value)
    {
        cy.get(HomePageLocators.HomePageLocators.adminTab).type(adminTab_value)
        return
    }
    userManagement(userManagement_value)
    {
        cy.get(HomePageLocators.HomePageLocators.userManagement).type(userManagement_value)
        return
    }
    userClick(userClick_value)
    {
        cy.get(HomePageLocators.HomePageLocators.userClick).type(userClick_value)
        return
    }
    systemUserTab(systemUserTab_value)
    {
        cy.get(HomePageLocators.HomePageLocators.systemUserTab).type(systemUserTab_value)
        return
    }
}