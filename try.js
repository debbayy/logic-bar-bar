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

function tryTwo(s) {
    let data = s.toLowerCase().split('')
    for (let i = 0; i < data.length; i++) {
        data[i]=data[i].toUpperCase()+data[i].repeat(i)
    
    }
    return data.join('-')
}

console.log(tryTwo('AbCd'))