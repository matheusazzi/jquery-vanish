# jQuery Vanish

[![Build Status](https://travis-ci.org/matheusazzi/jquery-vanish.svg)](https://travis-ci.org/matheusazzi/jquery-vanish)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam sint perspiciatis officiis non eius a labore atque dolores esse aperiam reiciendis, cumque nisi? Consectetur nam soluta architecto illum placeat dolorum!

## Demo

[http://www.matheusazzi.com/jquery-vanish](http://www.matheusazzi.com/jquery-vanish)

## Installation

Install via [Bower](http://bower.io)

```bash
bower install jquery-vanish
```

## Usage

```html
<h1>Hello Foo Bar</h1>
<p>Other Foo Bar</p>
```

```javascript
$('h1').vanish();

$('p').vanish({
  duration: 2500,
  animation: 200,
  onAllVanished: function() {
    alert('Vanish ends');
  }
});
```

### Options

| Option        | Type     | Default        | Description |
|---------------|----------|----------------|-------------|
| duration      | Number   | 3000           | The duration in milliseconds to vanish all string |
| animation     | Number   | 300            | The time of an item vanish animation |
| className     | String   | 'is-vanishing' | A class to add when the character starts to vanish |
| onAllVanished | Function | null           | Optional callback to call when all itens vanished |

## License

### The MIT License (MIT)

Copyright © 2015 Matheus Azzi <matheuslazzi@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
