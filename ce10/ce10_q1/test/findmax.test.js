const findmax = require('../src/findmax.js');

describe('testing findmax', () => {
    // TODO: a test that results in failure (do not compute maximum) it should fail
    test('a test that fails', () => {
        const result = findmax([1, 2, 3])
        expect(result).toBe(5)
    })
    // TODO: a test that results in error, it should throw an error that the test won't catch
    test('a test that throws error', () => {
        findmax(null)
    })
    // TODO: a test that results in pass
    test('a test that passes', () => {
        result = findmax([6, 7, 8])
        expect(result).toBe(8)
    })
    // empty array
    test('empty array', () => {
        result = findmax([])
        expect(result).toBe(undefined)
    })
    // array with null values
    test('array with null values', () => {
        result = findmax([null, null, null])
        expect(result).toBe(null)
    })
    // array with NaN values
    test('array with NaN values', () => {
        result = findmax([NaN, NaN, NaN])
        expect(result).toBe(NaN)
    })
    // arrays with a single ordinal value
    test('array with a single ordinal value', () => {
        result = findmax([67])
        expect(result).toBe(67)
    })
    // arrays with more than one ordinal value and the max value is at index 0.
    test('array with a single ordinal value and the max value is at index 0', () => {
        result = findmax([67,32,14])
        expect(result).toBe(67)
    })
    // arrays with more than one ordinal value and the max value is at index N-1, where N is the length.
    test('array with a single ordinal value and the max value is at index N-1, where N is the length', () => {
        result = findmax([67,32,14,69])
        expect(result).toBe(69)
    })
    // arrays with more than one ordinal values and the max value is not at index 0 nor index N-1.
    test('arrays with more than one ordinal values and the max value is not at index 0 nor index N-1', () => {
        result = findmax([67,14,69,54])
        expect(result).toBe(69)
    })
    // null value
    test('null value', () => {
        expect(() => findmax(null)).toThrow(TypeError)
    })
});







