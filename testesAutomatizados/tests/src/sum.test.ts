import { sum } from "./sum"

describe("sum", ()=> {

    let Sumresult: number

    beforeAll(() => {
       Sumresult = 10
    })

    afterAll(() => {
        Sumresult = 0
        console.log("Executado depois dos testes", Sumresult)
    })


    it("should do of 3 + 7 must be 10", () => {
        const result = sum(3,  7)
        console.log(Sumresult)


        expect(result).toBe(Sumresult)
    })




    test("sum of 2 + 2 must be 4", () =>{
        const result = sum(2,  2)
    


        expect(result).toBe(4)
    })



})



