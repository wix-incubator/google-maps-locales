"use strict"

import * as GoogleMaps from "../src/GoogleMaps.js"
import _ from 'lodash'

let languagesToGoogleMapsLanguges = {
	"he": "iw",  // Hebrew
	"tl": "fil", // Filipino
	"nb": "no",  // Norwegian Bokmål
	"nn": "no"   // Norwegian Nynorsk
}

export function bestGoogleMapsLocaleFor(locale) {
	let googleMapsLocale = locale.replace("_", "-")
	
	// Is the fine-grained locale supported?
	if (_.includes(GoogleMaps.supportedLanguages, googleMapsLocale)) {
		return googleMapsLocale
	}
	
	// Is the language supported?
	let language = locale.substr(0, 2)
	let googleMapsLanguage = languagesToGoogleMapsLanguges[language]
	if (_.includes(GoogleMaps.supportedLanguages, googleMapsLanguage)) {
		return googleMapsLanguage
	}
	
	// Fallback to English
	return "en"
}
