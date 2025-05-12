
import {test as baseTest} from '@playwright/test';
interface TestDataForKBACreateAgent {
    userName: string;
    password: string;
    kbaTitle: string,
    kbaKeyword: string,
    kbaCategoryDropdownOption: string
};
export const customKBATest = baseTest.extend<{testDataForKBACreateAgent:TestDataForKBACreateAgent}>(
{
    testDataForKBACreateAgent :    {
    userName : "ivg",
    password : "otrs",
    kbaTitle: "KBATest",
    kbaKeyword: "KBAKeywordtest",
    kbaCategoryDropdownOption: "Misc"
    }
}
)
