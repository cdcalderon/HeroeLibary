import { SuperHeroPage } from './app.po';

describe('super-hero App', () => {
  let page: SuperHeroPage;

  beforeEach(() => {
    page = new SuperHeroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
