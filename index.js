// Code your solution here
function findMatching(source, lookingFor) {
    return source.filter( (possibleMatch) => possibleMatch.toLowerCase() === lookingFor.toLowerCase());
  }

  function fuzzyMatch(source, testForString) {
    return source.filter((possibleMatch)=>possibleMatch.toLowerCase().indexOf(testForString.toLowerCase()) === 0);
  }

  function matchName(source, findName) {
    return source.filter((record)=>record.name === findName);
  }