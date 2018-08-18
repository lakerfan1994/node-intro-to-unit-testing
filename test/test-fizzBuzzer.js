const fizzBuzzer = require('../fizzBuzzer');

const expect = require('chai').expect;

describe('fizzBuzzer', function(){

	it('Should work for basic normal case', function(){
		const goodValues = [
			[0, 'fizz-buzz'],
			[1, 1],
			[5, 'buzz'],
			[10, 'buzz'],
			[12, 'fizz'],
			[15, 'fizz-buzz'],
			[37, 37],
			[36, 'fizz']
		];

		goodValues.forEach(input => {
			const answer = fizzBuzzer(input[0]);
			expect(answer === input[1]).to.be.true
		});
	});

	it('Should invalidate entries that are not numbers', function(){
		const badValues = ['notanantlalsls', true, false, Object, null
		];
			
		badValues.forEach(input => {
			expect(function(){fizzBuzzer(input)}).to.throw(Error);
		})
		

	})	


})