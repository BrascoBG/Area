function area([arg1,arg2,arg3]){
    type = arg1;
    side1 = parseFloat(arg2);
    side2 = parseFloat(arg3);

    if(type === 'square'){
        console.log(type + ' = ' + (side1 * side1));
    }
    else if(type === 'rectangle'){
        console.log(type + ' = ' + (side1 * side2));
    }
    else if(type === 'circle'){
        console.log(type + ' = ' + (Math.PI * side1 * side1).toFixed(3));
    }
    else if(type === 'triangle'){
        console.log(type + ' = ' + (side1 * side2) / 2);
    }
    else{
        console.log('Error!');
    }
}

area(['circle', 6, 2.5]);
