function checkSnils(checkedValue) {
    var re = /[\+]|[\-]|[\ ]|[\_]\w+/g; //Регулярное выражение, которое находит разделительные символы, если такие есть в получаемом значении
    var checkSum = parseInt(checkedValue.split(re).join('').slice(9), 10);
    checkedValue = checkedValue.split(re).join('');
    
    var sum = (checkedValue[0] * 9 + checkedValue[1] * 8 + checkedValue[2] * 7 + checkedValue[3] * 6 + checkedValue[4] * 5 + checkedValue[5] * 4 + checkedValue[6] * 3 + checkedValue[7] * 2 + checkedValue[8] * 1);

    if (sum < 100 && sum == checkSum) {
        return true;
    } else if ((sum == 100 || sum == 101) && checkSum == 0) {
        return true;
    } else if (sum > 101 && (sum % 101 == checkSum || (sum % 101 == 100 && checkSum == 0))) {
        return true;
    } else {
        return false;
    }
}

function checkOgrn(chekedValue) {
    //Для тринадцатисимвольного ОГРН
    if (chekedValue.length == 13 && (chekedValue.slice(12, 13) == ((chekedValue.slice(0, -1)) % 11 + '').slice(-1))) {
        return true;
        //Для пятнадцатисимвольного ОГРН
    } else if (chekedValue.length == 15 && (chekedValue.slice(14, 15) == ((chekedValue.slice(0, -1)) % 13 + '').slice(-1))) {
        return true;
    }
}
