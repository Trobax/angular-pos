import { AngularPosPage } from './app.po';

describe('angular-pos App', () => {
  let page: AngularPosPage;

  beforeEach(() => {
    page = new AngularPosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
