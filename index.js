const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0

totalBatteries = batteryBatches.reduce((num1, num2) => num1 + num2, totalBatteries
)
console.log(totalBatteries)
 
// function reducer(){
//     function batteries(){
//     }
// }