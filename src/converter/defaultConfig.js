'use strict';

const defaultConfig = {
	bem: {
		elementSeparator: '__',
		modifierSeparator: '_'
	},
	rules: {
		default ( token ) {
			return `.${token}`;
		}
	}
};

export default defaultConfig;
