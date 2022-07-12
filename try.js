function tryOne(s) {
    const dataArr = s.split('') //pisahkan array menjadi string satu satu (pecah array)
    const result = []

    for (let i = 0; i < dataArr.length; i++) {
        let temp = '';
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                temp += dataArr[i].toUpperCase();
            } else {
                temp += dataArr[i].toLowerCase();
            }
        }
        result.push(temp)
    }

   return result.join('-')
}

console.log(tryOne('AbCd'))