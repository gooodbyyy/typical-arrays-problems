
//min value
exports.min = function min(array) {
        if (!Array.isArray(array) || array.length === 0) {
            return 0;
        }
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) min = array[i];
        }
        return min;
    }
    //max value
exports.max = function max(array) {
        if (!Array.isArray(array) || array.length === 0) {
            return 0;
        }
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) max = array[i];
        }
        return max;
    }
    //average value
exports.avg = function avg(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result / array.length;
}
