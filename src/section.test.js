import Section from './section';

let section;

describe('Section', () => {
  beforeEach(() => {
    section = new Section();
  });

  it('create new reference of section', () => {
    expect(section instanceof Section).toBeTruthy();
  });

  it('add a new component to components list', () => {
    const component = {};

    section.addComponent(component);

    expect(section.components.length).toEqual(1);
    expect(section.components[0]).toEqual(component);
  });
});
