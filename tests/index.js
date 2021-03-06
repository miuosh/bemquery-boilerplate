/* global chai */

import helloWorld from '../src/index';

const expect = chai.expect;

describe( 'helloWorld', () => {

	it( 'helloWorld', () => {
		expect( helloWorld ).to.be.a( 'function' );
	} );

	it( 'returns "Hello World!"', () => {
		const result = helloWorld();
		expect( result ).to.equal( 'Hello World!' );
	} );

} );
