import { reative } from "../reactive"

describe('reactive', () => {
    it('happy path', () => {
        const original = {foo: 1, fee: 2}
        const observed = reative(original)
        expect(original).not.toBe(observed)
        expect(observed.foo).toBe(1)
    })
})