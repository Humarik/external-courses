function every(array, callback){
    let result = true;
    for(let i = 0; i < array.length; i++){
        result = callback(array[i], i, array);
        if(!result){
            return result;
        }
    }
    return result;
}
module.exports = every;