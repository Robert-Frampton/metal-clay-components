'use strict';

import Component from 'metal-component';
import core from 'metal';
import MetalDropdown from 'metal-dropdown';
import MetalQuartzIcon from 'metal-quartz-icon';
import Soy from 'metal-soy';

import templates from './MetalQuartzDropdown.soy';

/**
 * Dropdown Metal Quartz component.
 */
class MetalQuartzDropdown extends MetalDropdown {
	/**
	 * Handles document click in order to hide menu.
	 * @param {!Event} event
	 * @protected
	 */
	handleDocClick_(event) {
		if (this.element.contains(event.target)) {
			return;
		}

		if (this.expanded) {
			this.close();
		}
	}
}

/**
 * State definition.
 * @static
 * @type {!Object}
 */
MetalQuartzDropdown.STATE = {
	/**
	 * The items to add to the dropdown-menu.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {array}
	 */
	dropdownItems: {
		validator: core.isArray
	},

	/**
	 * The CSS class to toggle when opening and closing the dropdown.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 * @default `open`
	 */
	dropdownOpenClass: {
		validator: core.isString,
		value: 'open'
	},

	/**
	 * The HTML element to use on .dropdown.
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {string}
	 * @default `div`
	 */
	dropdownParentElement: {
		validator: core.isString,
		value: 'div'
	},

	/**
	 * The configuration for the dropdown-toggle
	 * @instance
	 * @memberof MetalQuartzDropdown
	 * @type {!Object}
	 */
	dropdownToggle: {
		validator: core.isObject
	}
};

Soy.register(MetalQuartzDropdown, templates);

export default MetalQuartzDropdown;
