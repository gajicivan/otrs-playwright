import {test, expect,Locator,Page} from '@playwright/test';

export class KnowledgeBaseArticlePage {
    page : Page;
    kbaTitle: Locator;
    kbaKeyword: Locator;
    kbaCategory: Locator;
    kbaState: Locator;
    kbaStateDropdown: Locator;
    kbaValidity: Locator;
    kbaLnguage: Locator;
    kbaCreateBtn: Locator;
    kbaCategoryDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.kbaTitle = page.getByPlaceholder("Please enter a title");
        this.kbaKeyword = page.locator(".Form__Input.form-control").last();
        this.kbaCategory = page.locator(".vue-treeselect__control-arrow-container").first();
        this.kbaCategoryDropdown = page.locator(".vue-treeselect__menu");
        this.kbaState = page.locator(".vue-treeselect__single-value").first();
        this.kbaStateDropdown = page.locator(".vue-treeselect__list");
        this.kbaValidity = page.locator(".vue-treeselect__single-value").nth(1);
        this.kbaLnguage = page.locator(".vue-treeselect__single-value").nth(2);
        this.kbaCreateBtn = page.locator("button:has-text(' Create ')");

    }
    async createKBA(
        kbatitle: string, 
        kbakeyword: string, 
        kbaCategoryDropdownOption: string
        ){
        await this.kbaTitle.fill(kbatitle);
        await this.kbaKeyword.fill(kbakeyword);
        await this.kbaCategory.click();
        await this.kbaCategoryDropdown.waitFor();
        const kbaCategoryDropdownCount = await this.kbaCategoryDropdown.locator("div").count();
        
        for(let i=0; i < kbaCategoryDropdownCount; ++i) {
            let text: any;
            text = await this.kbaCategoryDropdown.locator("div").nth(i).textContent();
            if(text.trim() === kbaCategoryDropdownOption) {
                await this.kbaCategoryDropdown.locator("div").nth(i).click();
                break;
            }
        }
        console.log(kbaCategoryDropdownCount);
        await this.kbaCreateBtn.click();
    }

}
module.exports = {KnowledgeBaseArticlePage};