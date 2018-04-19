import Page from './page';
import Section from './section';
import TextComponent from './text-component';

class Editor {
  createPage() {
    this.page = new Page();
  }

  createSection() {
    const section = new Section();
    this.page.addSection(section);
  }

  createTextComponent(x, y) {
    const textComponent = new TextComponent(x, y);
    this.getSection().addComponent(textComponent);
  }

  moveTextComponent(x, y) {
    this.getComponent().movePosition(x, y);
  }

  getSection() {
    return this.page.sections[0];
  }

  getComponent() {
    return this.getSection().components[0];
  }
}

export default Editor;
