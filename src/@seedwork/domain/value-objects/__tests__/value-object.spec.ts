import ValueObject from "../value-object";

class StubObject extends ValueObject {

}

describe("Value Object Unique Test", () => {

    it('should set value', () => {
        const vo  = new StubObject('string value')
        expect(vo.value).toBe('string value')
        console.log(vo+ "")
    })

    it("shoud de a object", () => {
        const vo = new StubObject({prop1: 'value1'})
        expect(vo.value).toStrictEqual({prop1: 'value1'})

    })

    it("should convert to a string", () => {
        const date = new Date()
        let arrange = [
            { received: undefined, expected:"undefined" },
            { received: true, expected:"true" },
            { received: 1, expected:"1" },
            { received: 0, expected:"0" },
            { received: false, expected:"false" },
            { received: "", expected:"" },
            { received: {prop1: 'value'}, expected:JSON.stringify({prop1: 'value'})},
            { received: date, expected:date.toString() },

        ]
        arrange.forEach((value) => {
            const vo = new StubObject(value.received);
            expect(vo +"").toBe(value.expected)
        })
    })
})