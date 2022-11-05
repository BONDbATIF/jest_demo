let animals =["elephant","zebra","bear","tiger"];

    beforeEach(()=>{
        animals =["elephant","zebra","bear","tiger"];
    })
    afterEach(()=>{
        console.log("After each")
    })

    beforeAll(()=>{
        console.log("Run before all of test.")
    })

    afterAll(()=>{
        console.log("Run after all test done.")
    })

describe("animals array",()=>{
it("should add animal to end of array",()=>{
    animals.push("lion");
expect(animals[animals.length-1]).toBe("lion");
})

it("should add animal to start of array",()=>{
    animals.unshift("monkey");
expect(animals[0]).toBe("monkey");
})

it("should have initial lenght of 4",()=>{
   expect(animals.length).toBe(4);
})


})