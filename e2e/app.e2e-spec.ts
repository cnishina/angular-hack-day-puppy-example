import { PuppyExamplePage } from './app.po';

describe('puppy-example App', function() {
  let page: PuppyExamplePage;

  beforeEach(() => {
    page = new PuppyExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
