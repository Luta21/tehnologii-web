const sampleArray = [1,2,3,4]

const map = (array, transformation) =>{
    const result = []
    for (const number of array){
        result.push(transformation(number))
    }
    return result

}
console.log(map(sampleArray, x => x*3))
console.log(map((sampleArray, x)=> {
    return x*2
}))
