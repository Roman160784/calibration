
export const findInterestDeposit = (a: number, b: number) => {

    let res = (Math.pow(a, 2) / Math.pow(b, 2)) * 100

    return +res.toFixed(2)

}