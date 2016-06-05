import path from 'path';
import chromedriver from 'chromedriver';
import webdriver from 'selenium-webdriver';
import { expect } from 'chai';
import electronPath from 'electron-prebuilt';
import appStyles from '../app/containers/App/styles.css';

chromedriver.start(); // on port 9515
process.on('exit', chromedriver.stop);

const delay = time => new Promise(resolve => setTimeout(resolve, time));

describe('main window', function spec() {
  this.timeout(5000);

  before(async () => {
    await delay(1000); // wait chromedriver start time
    this.driver = new webdriver.Builder()
      .usingServer('http://localhost:9515')
      .withCapabilities({
        chromeOptions: {
          binary: electronPath,
          args: [`app=${path.resolve()}`]
        }
      })
      .forBrowser('electron')
      .build();
  });

  after(async () => {
    await this.driver.quit();
  });

  const viewTitle = async () => {
   const title = await this.driver.findElement(webdriver.By.css(`.${appStyles.viewContainer} h2`));
   return title.getText();
  };

  it('should open window', async () => {
    const title = await this.driver.getTitle();
    expect(title).to.equal('passeme');
  });

  it('should display the first login', async () => {
    expect(await viewTitle()).to.equal('View Login');
  });

  it('should create a login', async () => {
    const createButton = await this.driver.findElement(webdriver.By.css(`.${appStyles.createButton} a`));
    createButton.click();
    expect(await viewTitle()).to.equal('Create Login');

  });
});
