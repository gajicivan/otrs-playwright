import {test, expect,Locator,Page} from '@playwright/test';

export class DashboardPage {
    page : Page;
    actionButton: Locator;
    addArticle: Locator;
    kbaFlyout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.actionButton = page.locator(".CommonIcon__Bold--Add").nth(0);
        this.addArticle = page.locator(".NewActionMenu__Group--KnowledgeBase .NewActionMenu__Item").first();
        this.kbaFlyout = page.locator(".Flyout__NewActionMenu.NewActionMenu").first();
    }

    async navigateToKnowledgeBaseArticle() {
        await this.actionButton.click();
        await this.kbaFlyout.waitFor();
        await this.addArticle.click();
    }

}
module.exports = {DashboardPage};