import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/');
  await page.screenshot({ path: 'puppeteer_screenshot.png' });

  await browser.close();
})();
