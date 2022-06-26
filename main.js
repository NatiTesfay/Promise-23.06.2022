// function mypromise(){
//   return new Promise((resolve,reject)=>{;
//     const newdate = new Date().getHours();
//    if (newdate >= 11) {
//     resolve('good morning');
//    }
//    reject('after noon');    
// })
// }
// mypromise()
// .then(some=>{console.log(some);})
// .catch(err=>{console.log(err);})


// function getNumbers(num1,num2){
// return new Promise((resolve,reject)=>{;
//     if (num2 % num1) {
//         resolve('yes');
//     }
//     reject('no')
// })
// }
// getNumbers(2,5)
// .then(numbe1=>{document.write(numbe1);})
// .catch(err=>{document.write(err);})


function getNumbers(num,num2) {
    return new Promise((resolve,reject)=>{;
    if (num == num2) {
        
    resolve('yes');
    }

    reject('no');
 })
}
getNumbers(2,[1,2,4,5])
.then(number1=>{console.log(number1);})
.catch(err=>{console.log(err);})



