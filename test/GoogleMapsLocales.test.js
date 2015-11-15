"use strict"

import chai from 'chai'
import * as GoogleMapsLocales from "../src/GoogleMapsLocales.js"

let should = chai.should()

describe("GoogleMapsLocales", function() {
    it ("supports locales that are available as exact Google Maps locales", function() {
		GoogleMapsLocales.bestGoogleMapsLocaleFor("en_GB").should.equal("en-GB")
    })

    it ("supports locales that are available only as Google Maps languages", function() {
		GoogleMapsLocales.bestGoogleMapsLocaleFor("en_US").should.equal("en")
		GoogleMapsLocales.bestGoogleMapsLocaleFor("it_IT").should.equal("it")
    })

    it ('supports locales that are available with non-standard IDs', function() {
		GoogleMapsLocales.bestGoogleMapsLocaleFor("he_IL").should.equal("iw")
		GoogleMapsLocales.bestGoogleMapsLocaleFor("tl_PH").should.equal("fil")
		GoogleMapsLocales.bestGoogleMapsLocaleFor("nb_NO").should.equal("no")
		GoogleMapsLocales.bestGoogleMapsLocaleFor("nn_NO").should.equal("no")
    })

    it ('falls back to English if all else fails', function() {
		GoogleMapsLocales.bestGoogleMapsLocaleFor("xx_XX").should.equal("en")
    })
})
