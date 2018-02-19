import { SportifyPage } from './app.po';

describe('sportify App', () => {
  let page: SportifyPage;

  beforeEach(() => {
    page = new SportifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
