# google-maps-locales

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

Google Maps locales.

### Usage
Install the library with `npm install google-maps-locales`

```javascript
var GoogleMapsLocales = require('google-maps-locales');

GoogleMapsLocales.bestGoogleMapsLocaleFor("en_US"); //-> "en"
GoogleMapsLocales.bestGoogleMapsLocaleFor("en_GB"); //-> "en-GB"
GoogleMapsLocales.bestGoogleMapsLocaleFor("tl_PH"); //-> "fil"
GoogleMapsLocales.bestGoogleMapsLocaleFor("he_IL"); //-> "iw"
```

[downloads-image]: https://img.shields.io/npm/dm/google-maps-locales.svg

[npm-url]: https://npmjs.org/package/google-maps-locales
[npm-image]: https://img.shields.io/npm/v/google-maps-locales.svg
