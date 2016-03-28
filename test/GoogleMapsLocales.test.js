import { expect } from 'chai'
import { bestGoogleMapsLocaleFor } from '../src/GoogleMapsLocales'

describe('GoogleMapsLocales', () => {
    it ('supports locales that are available as exact Google Maps locales', () => {
		expect(bestGoogleMapsLocaleFor('en_GB')).to.equal('en-GB')
    })

    it ('supports locales that are available only as Google Maps languages', () => {
		expect(bestGoogleMapsLocaleFor('en_US')).to.equal('en')
		expect(bestGoogleMapsLocaleFor('it_IT')).to.equal('it')
    })

    it ('supports locales that are available with non-standard IDs', () => {
		expect(bestGoogleMapsLocaleFor('he_IL')).to.equal('iw')
		expect(bestGoogleMapsLocaleFor('tl_PH')).to.equal('fil')
		expect(bestGoogleMapsLocaleFor('nb_NO')).to.equal('no')
		expect(bestGoogleMapsLocaleFor('nn_NO')).to.equal('no')
    })

    it ('falls back to English if all else fails', () => {
		expect(bestGoogleMapsLocaleFor('xx_XX')).to.equal('en')
    })
})
