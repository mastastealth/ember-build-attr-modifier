ember-build-attr-modifier
==============================================================================

An Ember modifier to attach a dynamic attribute to an element.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-build-attr-modifier
```


Usage
------------------------------------------------------------------------------

By default, attributes built with the modifier are prefixed with `data-` as [designed](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) by HTML5 standards. If we wanted a very simple atttribute that used an argument (`btnName` which we'll set to be `confirm`) as part of the name, we could just list out our strings/arguments:

```hbs
{{!-- app/components/foo-component.hbs --}}
<button {{build-attr 'custom-btn-' @btnName}}>Confirm</button>
```

This would create a DOM element:
```html
<button data-custom-btn-confirm="">Confirm</button>
```

**All positional arguments are automatically concatenated**. You can also pass in the value for the attribute:
```hbs
{{!-- app/components/foo-component.hbs --}}
<button {{build-attr 'custom-btn-' @btnName value=true}}>Confirm</button>
```

This would give you the expected:
```html
<button data-custom-btn-confirm="true">Confirm</button>
```

In the event that you want to create a _non-data_ attribute, you can do:
```hbs
{{!-- app/components/foo-component.hbs --}}
<button {{build-attr 'iam' 'rebel' value='fact' noPrefix=true}}>Confirm</button>
```

This will generate:
```html
<button iam-rebel="fact">Confirm</button>
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
