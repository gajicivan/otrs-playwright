
import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {KnowledgeBaseArticlePage} from './KnowledgeBaseArticlePage';
import {KnowledgeBaseArticleReviewPage} from './KnowledgeBaseArticleReviewPage';
import {Page} from '@playwright/test';

export class POManager
{
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    knowledgeBaseArticlePage: KnowledgeBaseArticlePage;
    knowledgeBaseArticleReviewPage: KnowledgeBaseArticleReviewPage
    page : Page;


constructor(page:Page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.knowledgeBaseArticlePage = new KnowledgeBaseArticlePage(this.page);
    this.knowledgeBaseArticleReviewPage = new KnowledgeBaseArticleReviewPage(this.page);
}

getLoginPage()
{
    return this.loginPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}

getKnowledgeBaseArticlePage()
{
    return this.knowledgeBaseArticlePage;
}

getKnowledgeBaseArticleReviewPage()
{
    return this.knowledgeBaseArticleReviewPage;
}

}
module.exports = {POManager};