import { CrudNoNgrx3Page } from './app.po';

describe('crud-no-ngrx3 App', () => {
  let page: CrudNoNgrx3Page;

  beforeEach(() => {
    page = new CrudNoNgrx3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
