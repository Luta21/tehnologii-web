const sortObjects = (array,key)=>{
    return array.sort((a,b,)=>{
        if(a[key] < b[key]){
            return -1;
        }
        else return 1;
    });
};

const objects = [
    {
        brand: "Lenovo",
        cpu: "i5",
        ram: 4
    },
      {
        brand: "Asus",
        cpu: "i7",
        ram:16
    },
      {
        brand: "Acer",
        cpu: "i9",
        ram:8
    },
]

const res = sortObjects(objects, "ram");
console.log("Rezultat ordonat:", res);