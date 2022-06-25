function woodCalculator(chairQuantitiy, tableQuantity, bedQuantity){
    const perChairWood =  3;  
    const perTableWood =   10;
    const perBedWood =  50;

    const chairWood = perChairWood * chairQuantitiy;
    const tableWood = perTableWood * tableQuantity;
    const bedWood = perBedWood * bedQuantity;

    console.log('Chair Wood =' + chairWood +'cft');
    console.log('Table Wood =' + tableWood +'cft');
    console.log('Bed Wood =' + bedWood +'cft');
    const totalWood = chairWood + tableWood + bedWood;
    console.log('Total Wood =' + totalWood +'cft');
}

const myRequirment = woodCalculator(6,1,1);
console.log(myRequirment);