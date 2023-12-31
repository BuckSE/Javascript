var smallerStringA1 = 'abcd';
var smallerStringB1 = 'efg';
var expected = 'efgabcd';

var smallerStringA2 = 'sunnyside up eggs';
var smallerStringB2 = 'biscuits and gravy';
var expected = 'sunnyside up eggsbiscuits and gravy';

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(string1, string2) {
    if(string1.length <= string2.length){
      return `${string1}${string2}`
    }
  }

/*****************************************************************/

var stringToRepeat1 = 'Birria Tacos';
var numberToRepeat1 = 5;
var repeatedExpected =
  'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos';

var stringToRepeat2 = 'margherita pizza';
var numberToRepeat2 = 2;
var repeatedExpected = 'margherita pizzamargherita pizza';

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(string, num) {
    let result = ''
    for(let i = 0; i < num; i++){
        result += string
    }
    return result
}

/*****************************************************************/

var wordArray = [
  'shawn',
  'jim',
  'tyler',
  'heidi',
  'john',
  'alfredo',
  'michael',
];

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 *    How are we keeping track of the longest word?
 */
function findLongestWord(arr) {
    let longestWord = arr[0]
    for (let i = 1; i < arr.length; i++){
        if(longestWord.length <= arr[i].length){
            longestWord = arr[i] 
        }
          
    }
    return longestWord
  
}

/*****************************************************************/

/** BONUS *********************************************************/

var rangeA1 = 10;
var rangeB1 = 15;
var rangeExpected = 75;
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */
function inclusiveRangeSum(range1, range2) {
    let sum = 0
    for(let i = range1; i <= range2; i++){
        sum += i
    }
    return sum
}
console.log(inclusiveRangeSum(rangeA1, rangeB1))




















