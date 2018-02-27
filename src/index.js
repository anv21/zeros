module.exports = function getZerosCount(number) {
    let count = 0;

    while(number > 0) {
        number /= 5;
        count += Math.trunc(number);
    }

    return count;
};