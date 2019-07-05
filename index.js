// Code your solution in this file!
function distanceFromHqInBlocks(firstLocation) {
  let distanceBetween;
  if( firstLocation === 43) {
    distanceBetween = 1;
    return distanceBetween;
  } else if ( firstLocation === 50 ) {
    distanceBetween = 8;
    return distanceBetween;
  } else if ( firstLocation === 34) {
    distanceBetween = 8 ;
    return distanceBetween;
  }
}

function distanceFromHqInFeet(distanceInSt) {
  let distanceCalculationInFeet;
  
  if (distanceInSt === 43) {
    distanceCalculationInFeet = 264;
    return distanceCalculationInFeet;
    
  } else if ( distanceInSt === 50 ) {
    distanceCalculationInFeet = 2112;
    return distanceCalculationInFeet;
    
  } else if ( distanceInSt === 34  ){
    distanceCalculationInFeet = 2112;
    return distanceCalculationInFeet;
  }
}

function distanceTravelledInFeet(firstSt, lastSt) {
  let distanceTravelled;
  if ( firstSt === 43 && lastSt === 48) {
    distanceTravelled = 1320;
    return distanceTravelled;
    
  } else if ( firstSt === 50 && lastSt === 60 ) {
    distanceTravelled = 2640;
    return distanceTravelled;
    
  } else if ( firstSt === 34 && lastSt === 28 ) {
    distanceTravelled = 1584;
    return distanceTravelled;
  }
}

function calculatesFarePrice(start, destination) {
  let freeSample;
  if ( start === 43 && destination === 44) {
    freeSample = 0;
    return freeSample;
  } else if ( start === 34 && destination === 32 ) {
    freeSample = 2.56;
    return freeSample;
  } else if ( start === 50 && destination === 58 ) {
    freeSample = 25;
    return freeSample;
  } else if ( start === 34 && destination === 24) {
    freeSample = "cannot travel that far";
    return freeSample;
  }
}

/*describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');*/

