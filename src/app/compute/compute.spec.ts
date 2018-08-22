import {compute} from './compute';

describe('compute', () => {

    it('should return 0 if input is negative', () => {
        cons result = compute(-1);
        expect(result).toBe(0);
    })

    it('should increment if input is positive', () => {
        cons result = compute(1);
        expect(result).toBe(2);
    })
})