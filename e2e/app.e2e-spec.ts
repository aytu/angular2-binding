import { Angular2BindingPage } from './app.po';

describe('angular2-binding App', function() {
  let page: Angular2BindingPage;

  beforeEach(() => {
    page = new Angular2BindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
