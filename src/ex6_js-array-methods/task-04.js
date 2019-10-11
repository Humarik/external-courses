function filter (array,callback){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        let result = callback(array[i], i, array);
        if (result){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports = filter;