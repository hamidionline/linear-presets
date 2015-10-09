/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var rescale = require('rescale')(Decimal).rescale;
var presets = require('../src/linear-presets').PRESETS;
var presetFactory = require('linear-preset-factory');

var convert = function convert(x, preset) {
  return Number(rescale(preset[0], preset[1], x));
};

var invert = function invert(preset) {
  return preset.slice().reverse();
};

describe('built-in presets', function() {
  it('should include metric prefixes', function() {
    presets.metricPrefixes.conversions.should.have.properties([
      'none',
      'yotta',
      'zetta',
      'exa',
      'peta',
      'tera',
      'giga',
      'mega',
      'kilo',
      'hecto',
      'deca',
      'deci',
      'centi',
      'milli',
      'micro',
      'nano',
      'pico',
      'femto',
      'atto',
      'zepto',
      'yocto'
    ]);
  });

  it('should include length', function() {
    presets.distance.conversions.should.have.properties([
      'metre',
      'kilometre',
      'centimetre',
      'millimetre',
      'mile',
      'yard',
      'foot',
      'inch',
      'mile'
    ]);
  });

  it('should include mass', function() {
    presets.mass.conversions.should.have.properties([
      'kilogram',
      'metricTon',
      'gram',
      'milligram',
      'microgram',
      'longTon',
      'shortTon',
      'stone',
      'pound',
      'ounce'
    ]);
  });

  it('should include time', function() {
    presets.time.conversions.should.have.properties([
      'second',
      'nanosecond',
      'microsecond',
      'millisecond',
      'minute',
      'hour',
      'day',
      'week',
      'month',
      'year',
      'decade',
      'century',
      'millennium'
    ]);
  });

  it('should include electric current', function() {
    presets.electricCurrent.conversions.should.have.properties([
      'ampere',
      'abampere'
    ]);
  });

  it('should include temperature', function() {
    presets.temperature.conversions.should.have.properties([
      'celsius',
      'fahrenheit',
      'kelvin',
      'rankine',
      'delisle',
      'newton',
      'reaumur',
      'romer',
    ]);
  });

  it('should include temperature difference', function() {
    presets.temperatureDifference.conversions.should.have.properties([
      'celsius',
      'fahrenheit',
      'kelvin',
      'rankine',
      'delisle',
      'newton',
      'reaumur',
      'romer',
    ]);
  });

  it('should include amount of substance', function() {
    presets.amountOfSubstance.conversions.should.have.properties([
      'mole',
      'poundMole'
    ]);
  });

  it('should include luminous intensity', function() {
    var intensity = presetFactory(presets.luminousIntensity);

    (100).should.be.exactly(convert(101.9367991845056, invert(intensity.candela_candlepower)), 'candela_candlepower')
      .and.exactly(convert(108.69565217391303, invert(intensity.candela_hefnerkerze)), 'candela_hefnerkerze');

    (0).should.be.exactly(convert(0, intensity.candela_candlepower), 'candela_candlepower')
      .and.exactly(convert(0, intensity.candela_hefnerkerze), 'candela_hefnerkerze');
  });

  it('should include velocity', function() {
    presets.velocity.conversions.should.have.properties([
      'metresSecond',
      'milesHour',
      'feetSecond',
      'kilometresHour',
      'knot'
    ]);
  });

  it('should include volume', function() {
    presets.volume.conversions.should.have.properties([
      'cubicMetre',
      'millilitre',
      'litre',
      'cubicInch',
      'cubicFoot',
      'imperialFluidOunce',
      'imperialGill',
      'imperialPint',
      'imperialQuart',
      'imperialGallon',
      'USDram',
      'USFluidOunce',
      'USGill',
      'USCup',
      'USPint',
      'USQuart',
      'USGallon'
    ]);
  });

  it('should include area', function() {
    presets.area.conversions.should.have.properties([
      'squareMetre',
      'squareKilometre',
      'hectare',
      'squareMile',
      'acre',
      'squareYard',
      'squareFoot',
      'squareInch'
    ]);
  });

  it('should include plane angle', function() {
    presets.angle.conversions.should.have.properties([
      'radian',
      'turn',
      'degree',
      'gradian'
    ]);
  });

  it('should include digital storage', function() {
    presets.digitalInformation.conversions.should.have.properties([
      'byte',
      'bit',
      'kibibyte',
      'mebibyte',
      'gibibyte',
      'tebibyte',
      'pebibyte',
      'exbibyte',
      'zebibyte',
      'yobibyte'
    ]);
  });
});
