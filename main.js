// const promise1 = Promise.reject('2009')
// const promise2 = new Promise((resolve) => resolve('2009'))
// const promise3 = new Promise((delay) => {
//     setTimeout(() => {
//       delay('2000ms')
//     }, 2000)
// });

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function promises(delayA, delayB) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(delayA), delayB)
//     })
// }

// let promiseA = promises('2000', 2000)
// let promiseB = promises('1000', 1000)

// Promise.race([promiseA, promiseB])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error(error);
// })

// // 3
// Promise.reject("error").catch(error => {console.error(error)})

// // 4 
// Promise.resolve('Is successful!').then(success => {console.log(success)})

// // 5 
// function raceTimeout(promise, timeout) {
//     return new Promise((resolve, reject) => {
//         promise.then(result => {resolve(result)})
//         setTimeout(() => {
//         reject(console.error(`Time after ${timeout}ms`)) 
//     }, timeout)
// });
// }

// const myPromise = new Promise((resolve) => {
//    setTimeout(() => {
//     resolve('Resolved successfully')
//    }, 2000)
// })

// raceTimeout(myPromise, 1500)
// .then(result => {console.log(result)})
// .catch(error => {console.log(error)})


// DZ 1
// function delayedPromise(text, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text)
//     }, delay)   
//   })
// }

// console.log(delayedPromise('1', 1000));

// let promise1 = delayedPromise('1', 1000)
// let promise2 = delayedPromise('2', 1500)
// let promise3 = delayedPromise('3', 2000)
// let promise4 = delayedPromise('4', 2500)
// let promise5 = delayedPromise('5', 3000)

// Promise.all([promise1, promise2, promise3, promise4, promise5])
// .then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// })

const delayPromise = (text, delay) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(text)
        }, delay);
    })
}

let promise1 = delayPromise('1', 1000)
let promise2 = delayPromise('2', 1500)
let promise3 = delayPromise('3', 2000)
let promise4 = delayPromise('4', 2500)
let promise5 = delayPromise('5', 3000)

// console.log(delayPromise('1', 1000))

Promise.all([promise1, promise2, promise3, promise4, promise5])
.then((results) => {
  console.log(results)
})
.catch((errors) => {
  console.log(errors)
})

// DZ 2
const randomDelay = (value, promise, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
}

let myPromises = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Successful lesson!')
  }, 1000)
})

let promiseA = randomDelay('One', myPromises, 1000)
let promiseB = randomDelay('Two', myPromises, 2000)
let promiseC = randomDelay('Three', myPromises, 3000)
let promiseD = randomDelay('Four', myPromises, 4000)
let promiseE = randomDelay('Five', myPromises, 5000)

Promise.race([promiseA, promiseB, promiseC, promiseD, promiseE])
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
})

// raceTimeouts
const raceTimeouts = (promises, timeout) => {
  return new Promise((resolve, reject) => {
    promises.then(resulte => resolve(resulte))
    setTimeout(() => {
      reject(`Over is ${timeout}ms!`)
    }, timeout)
  })
}

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Not reject!')
  }, 2000)
})

raceTimeouts(promise, 1000)
.then((resultates) => console.log(resultates))
.catch((errores) => console.log(errores))