import Modifier from 'ember-modifier';

export default class BuildAttrModifier extends Modifier {
  name = '';
  attrVal = '';
  attrList = [];
  noPrefix = false;

  get attrName() {
    return this.attrList.join('-') || this.name;
  }

  modify(
    element,
    positional = [],
    { name = '', value = '', noPrefix = false }
  ) {
    this.attrList = [...positional];
    this.name = name;
    this.attrVal = value;
    this.noPrefix = noPrefix;

    const attr = this.noPrefix ? this.attrName : `data-${this.attrName}`;

    if (!element.hasAttribute(attr)) {
      element.setAttribute(attr, this.attrVal);
    }

    return attr;
  }
}
