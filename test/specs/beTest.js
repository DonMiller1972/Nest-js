const assert = require('assert')
const { clearScreenDown } = require('readline')
//const loginPage = require('../pageobjects/login.page.js')
//const data = require('../src/utils/const')

describe('auth form',  () => {
    it('Test #2 - should demonstrate Login page with wrong user name test ', async () => {
        await browser.url('https://www.saucedemo.com');
		const input= $('#user-name');
		let attr = await input.getAttribute('name');
		console.log('Title attribute is ' + attr)
		await input.setValue('standard_user')
		attr = await input.getValue('value')
		console.log('Value attribute is ' + attr)
		const input1= $('#password');
		let attr1 = await input1.getAttribute('name');
		console.log('Title attribute is ' + attr1)
		await input1.setValue('secret_sauce')
		attr1 = await input1.getValue('value')
		console.log('Value attribute is ' + attr1)
		const input2= $('#login-button');
		let attr2 = await input1.getAttribute('name');
		console.log('Title attribute is ' + attr2)
		attr2 = await input2.getValue('value')
		console.log('Value attribute is ' + attr2)
		input2.click()
    console.log('Waiting the site====>' + await browser.getUrl());
    await expect(browser).toHaveUrlContaining('inventory');
    await browser.pause(2000);
	('button#remove-sauce-labs-onesie')
    })
})
    /*
	it('Test #2 - should demonstrate Login page with wrong user name test ', async () => {
        await loginPage.open();
		//await loginPage.fillUserName(data.wrongUserName);
		await loginPage.fillUserName('standarD_user');
		//await loginPage.fillPassword(data.purePassword);
		await loginPage.fillPassword('secret_sauce');
		await loginPage.clickLoginBtn(); 
		
		//await loginPage.checkErrorMessage(data.errorLogin) 
		await loginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
		
	})	*/