import { test, expect, request } from '@playwright/test';
import {APiUtils} from '../utils/APIUtils';
const loginPayload: any = {Username: "ivg", Password: "otrs"}

let response;
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APiUtils(apiContext,loginPayload);
    response = apiUtils.getToken();
})

test('@API login test', async ({page}) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    // token is passed, so user is automaticaly logged in
    await page.goto("https://vo9288.virtual.otrs.com/agent/login");
})