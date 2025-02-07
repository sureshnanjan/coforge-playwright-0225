import {  should, expect } from "chai";
import { add } from "../src/addition.js";
//import assert from 'chai';
/**
 * 
 */
it('Adding works', () => {
    let one = 10;
    let two = 0;
    let expected = 10;
    // Action
    let output = add(one,two);
    assert(expected == output, "The adiition is not working")
    output.should.be(expected)
    
    
});
it('Adding negative works', () => {
    let one = -10;
    let two = -20;
    let expected = -30;
    // Action
    let output = add(one,two);
    assert(expected == output, "The adiition is not working")
});