import Page from './page';
import Section from './section';

let page;

describe('page', () => {
  beforeEach(() => {
    page = new Page();
  });

  it('create new reference of Page', () => {
    expect(page instanceof Page).toBeTruthy();
  });

  it('add a new section to Page', () => {
    const section = new Section();

    page.addSection(section);

    expect(page.sections.length).toEqual(1);
    expect(page.sections[0]).toEqual(section);
  });
});
