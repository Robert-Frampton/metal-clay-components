'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';

import templates from './MetalQuartzDropdown.soy';

/**
 * Dropdown Metal Quartz component.
 */
class MetalQuartzDropdown extends Component {
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzDropdown.STATE = {
	/**
	 * Content string.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 */
	content: {
		validator: core.isString
	}
};

Soy.register(MetalQuartzDropdown, templates);

export default MetalQuartzDropdown;
