import { HanafudaPage } from './app.po';

describe('hanafuda App', () => {
  let page: HanafudaPage;

  beforeEach(() => {
    page = new HanafudaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
