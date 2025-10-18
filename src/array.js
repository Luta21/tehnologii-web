const years = [
    2003,
    2004,
    2007,
    2012,
    2013,
    2020
];

const filterYears = (years)=> (
    years.filter((an)=>{
        if(2025 - an < 18){
            return false;
        }
        return true;
    }));
    console.log(filterYears(years));
