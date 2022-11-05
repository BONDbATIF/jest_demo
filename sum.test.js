const sum = require("./sum");

describe("run all tests", () => {
  it("should add 1 + 2 to equal to 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});

describe("true and false", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toEqual(4);
    //expect(value).toBeGreaterThan(4);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.29999999999);
  });
});

describe("string", () => {
  it("there is no I in team", () => {
    expect("team").toMatch(/e/);
  });
});

describe("arrays",()=>{

    const shoppingList=["milk","book","makeupkit","toys"];
        expect(shoppingList).toContain('milk');

})

function compileError(){
    throw new Error("you are using work version");
}

describe("exceptions",()=>{
    expect(()=>compileError()).toThrow(Error)
    expect(()=>compileError()).toThrow("you are using work version")
})