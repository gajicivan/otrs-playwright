
import {test, expect} from '@playwright/test';
import {customKBATest} from '../utils/test-login-base';
import {POManager} from '../pageobjects/POManager';

customKBATest(`Create KBA Agent`, async ({page,testDataForKBACreateAgent})=>
{
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForKBACreateAgent.userName,testDataForKBACreateAgent.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.navigateToKnowledgeBaseArticle();
    const knowledgeBaseArticlePage = poManager.getKnowledgeBaseArticlePage();
    await knowledgeBaseArticlePage.createKBA(testDataForKBACreateAgent.kbaTitle, testDataForKBACreateAgent.kbaKeyword, testDataForKBACreateAgent.kbaCategoryDropdownOption);
    const knowledgeBaseArticleReviewPage = poManager.getKnowledgeBaseArticleReviewPage();
    await knowledgeBaseArticleReviewPage.verifyKBAIsCreated(testDataForKBACreateAgent.kbaTitle);
})









