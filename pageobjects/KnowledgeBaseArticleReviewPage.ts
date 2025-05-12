import {test, expect,Locator,Page} from '@playwright/test';

export class KnowledgeBaseArticleReviewPage {
    page : Page;
    kbaTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.kbaTitle = page.locator("h1.Breadcrumb__LastCrumb").nth(0);
    }

    async verifyKBAIsCreated(kbaTitle: string) {
        await expect(this.kbaTitle).toHaveText(kbaTitle);
    }
}
module.exports = {KnowledgeBaseArticleReviewPage};