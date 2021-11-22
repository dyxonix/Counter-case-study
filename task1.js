const testData = 'одноСЛОВО'

function changeString(str) {
    if (!str) {
        return;
    }

    return str[0].toUpperCase() + str.substring(1).toLowerCase();
};

changeString(testData);