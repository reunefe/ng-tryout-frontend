import { NgTryoutFrontendPage } from './app.po';

describe('ng-tryout-frontend App', () => {
  let page: NgTryoutFrontendPage;

  beforeEach(() => {
    page = new NgTryoutFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
