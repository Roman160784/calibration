

export const findTotalUncertainty = (a: number, b: number, c: number, ) => {

    let sum = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)
    let res = Math.sqrt(sum)
    return +res.toFixed(5)

}