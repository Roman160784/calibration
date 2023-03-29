
export const findSko = (arr: number[]) => {
let goodArr = arr.map(el => +el.toFixed(4))
let middle = goodArr.reduce((el, ak) => el + ak) / arr.length
let newArr = goodArr.map(el => +el.toFixed(4) - +middle.toFixed(4))
let moduleArr = newArr.map(el => Math.abs(el) * Math.abs(el))
let sumModuleArrMiddleValue = moduleArr.reduce((el, ac) => el + ac) / arr.length
let sko = Math.sqrt(sumModuleArrMiddleValue)
let res = sko / Math.sqrt(arr.length)
return +res.toFixed(5)
}