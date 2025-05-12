import {test, expect,Locator,Page} from '@playwright/test';

export class LoginPage {
    signInbutton : Locator;
    userName :Locator;
    password : Locator;
    page : Page;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator("[placeholder*='User name*']");
        this.password = page.locator("[placeholder*='Password*']");
        this.signInbutton = page.locator("span:has-text(' Login ')");
    }

    async goTo() {
        await this.page.goto("https://vo9288.virtual.otrs.com/agent/login");
    }
    async validLogin(username:string,password:string)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }   
}
module.exports = {LoginPage};