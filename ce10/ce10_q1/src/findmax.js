
function findmax(list) {
    let max = list[0];
    for (let i = 1; i < list.length; i++ ) {
        if (max < list[i]) {
            max = list[i];
        }
    }
    return max;
}

module.exports = findmax;