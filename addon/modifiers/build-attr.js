import Modifier from 'ember-modifier';

export default class BuildAttrModifier extends Modifier {
  get attrName() {
    return this.args.positional.join('-') || this.args.named.name;
  }

  get attrVal() {
    return this.args.named.value || '';
  }

  get noPrefix() {
    return this.args.named.noPrefix;
  }

  didReceiveArguments() {
    const attr = this.noPrefix ? this.attrName : `data-${this.attrName}`;

    if (!this.element.hasAttribute(attr)) {
      this.element.setAttribute(attr, this.attrVal);
    }

    return attr;
  }
}
