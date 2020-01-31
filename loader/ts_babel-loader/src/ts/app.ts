import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url: string = 'https://www.google.co.jp/';
  const screenshot_filename: string = 'puppeteer_screenshot.png';
  await page.goto(url);
  await page.screenshot({ path: screenshot_filename });

  await browser.close();
})();
