const {NumberOfCar}=require('./mockdata')
// --------- base functions
function getRandomElementFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    } else {
        return null;
    }
}
function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}
// --------- base functions end
function getRandomNumberOfCar(){
    return getRandomElementFromArray(NumberOfCar);
}

module.exports = {getRandomNumberOfCar};