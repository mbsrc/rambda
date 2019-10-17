import { drop } from './drop'
import assert from 'assert'

test('with array', () => {
  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])
  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(drop(3, 'rambda')).toEqual('bda')
})

test('with non-positive count', () => {
  expect(drop(0, [1, 2, 3])).toEqual([1, 2, 3])
expect(drop(-1, [1, 2, 3])).toEqual([1, 2, 3]) 
expect(drop(-Infinity, [1, 2, 3])).toEqual([1, 2, 3])
})

test('should return copy', () => {
    var xs = [1, 2, 3];

    assert.notStrictEqual(drop(0, xs), xs);
    assert.notStrictEqual(drop(-1, xs), xs);
})
