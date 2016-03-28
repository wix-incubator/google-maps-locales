import { supportedLanguages as googleMapsSupportedLanguagues } from '../src/GoogleMaps'
import _ from 'lodash'

const languagesToGoogleMapsLanguges = {
	'he': 'iw',  // Hebrew
	'tl': 'fil', // Filipino
	'nb': 'no',  // Norwegian Bokmål
	'nn': 'no'   // Norwegian Nynorsk
}

export function bestGoogleMapsLocaleFor(locale) {
	const googleMapsLocale = locale.replace('_', '-')

	// Is the fine-grained locale supported?
	if (_.includes(googleMapsSupportedLanguagues, googleMapsLocale)) {
		return googleMapsLocale
	}

	// Is the language supported?
	const language = locale.substr(0, 2)
	const googleMapsLanguage = languagesToGoogleMapsLanguges[language] || language
	if (_.includes(googleMapsSupportedLanguagues, googleMapsLanguage)) {
		return googleMapsLanguage
	}

	// Fallback to English
	return 'en'
}
