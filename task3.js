const arr = ["I love JS", "some very long string", "hell"];
const arrLength = 9;

const filterStrings = (inputData, maxLength) => {
    return inputData.filter(phrase => phrase.length <= maxLength);
}

const result = filterStrings(arr, arrLength);

console.log(result)