var array1 = '';
var array2 = 8

for(var i = 0; i < array2; i++){
    for(var j =0; j < array2; j++){
        if((i + j) % 2 === 0){
array1+= '[*]'
        }else {
            array1+= '[ ]'
        }
    }
    array1+= ' \n'
}
console.log(array1)