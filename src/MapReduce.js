const arrayNumere =[
    12, 24, 33, 10, 15
]

const divizibil = 6;

const getSum = (arrayNumere, divizibil) =>
    arrayNumere.map((numar)=>{
        if(numar % divizibil == 0){
            return numar
        }
        return 0;
    }).reduce((prev, current)=>{
        return prev+current;
    }, 0);

    const res = getSum(arrayNumere, divizibil);
    console.log("Suma numerelor divizibile cu 2", res);