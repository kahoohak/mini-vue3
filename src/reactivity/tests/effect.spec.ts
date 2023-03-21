import { reative } from "../reactive"
import { effect } from "../effect"

describe('effect', () => {
    it('happy path', () => {
        const user = reative({age: 10})
        let nextAge

        effect(() => {
            nextAge = user.age + 1
        })

        expect(nextAge).toBe(11)

        //update
        // user.age++
        // expect(nextAge).toBe(12)
    })
})