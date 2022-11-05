const fetchData=require('./async');



it("should return correct todo",async()=>{

    const todo =await fetchData(1);
        expect(todo.data.id).toBe(1);

})