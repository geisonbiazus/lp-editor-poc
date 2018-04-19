import TextComponent from './text-component';

describe('TextComponent', () => {
  let text;
  let x = 12;
  let y = 18;

  beforeEach(() => {
    text = new TextComponent(x, y);
  });

  describe('constructor', () => {
    it('create new reference of TextComponent', () => {
      expect(text instanceof TextComponent).toBeTruthy();
    });

    it('sets initial position', () => {
      expect(text.x).toEqual(x);
      expect(text.y).toEqual(y);
    });
  });

  fdescribe('move', () => {
    it('moves component\'s position', () => {
      text.movePosition(20, 40);
      expect(text.x).toEqual(20);
      expect(text.y).toEqual(40);
    });
  });
});
