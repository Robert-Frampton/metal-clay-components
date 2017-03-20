'use strict';

import { async } from 'metal';
import dom from 'metal-dom';
import MetalQuartzDropdown from '../src/MetalQuartzDropdown';

describe('MetalQuartzDropdown', function() {
	let dropdown;

	afterEach(function() {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should generate link dropdown markup.', function() {
		dropdown = new MetalQuartzDropdown({
			dropdownToggle: {
				component: 'link',
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				component: 'link',
				href: '#1',
				label: 'Dropdown Item 1'
			}, {
				component: 'link',
				elementClasses: 'active',
				href: '#1',
				label: 'Dropdown Item 2'
			}, {
				component: 'link',
				elementClasses: 'disabled',
				href: '#1',
				label: 'Dropdown Item 3'
			}]
		});

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzDropdown.html'].trim());
	});

	it('should append elementClasses to the outer element.', function() {
		dropdown = new MetalQuartzDropdown({
			elementClasses: 'dropdown-wide',
			dropdownToggle: {
				component: 'link',
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				component: 'link',
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		assert(dom.hasClass(dropdown.element, 'dropdown-wide'));
	});

	it('should use li, p, span, div elements as the container for dropdown, respectively.', function() {
		const elArray = ['li', 'p', 'span', 'div'];

		for (const el of elArray) {
			dropdown = new MetalQuartzDropdown({
				dropdownParentElement: el,
				dropdownToggle: {
					component: 'link',
					elementClasses: 'btn btn-link',
					href: '#1',
					label: 'Dropdown Toggle'
				},

				dropdownItems: [{
					component: 'link',
					href: '#1',
					label: 'Dropdown Item 1'
				}]
			});

			assert(dom.match(dropdown.element, el + '.dropdown'));

			dropdown.dispose();
		}
	});

	it('should default to div if dropdownParentElement is not defined.', function() {
		dropdown = new MetalQuartzDropdown({
			dropdownToggle: {
				component: 'link',
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				component: 'link',
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		assert.ok(dom.match(dropdown.element, 'div.dropdown'));
	});

	it('should add class `open` to dropdown when clicked', function(done) {
		dropdown = new MetalQuartzDropdown({
			dropdownToggle: {
				component: 'link',
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				component: 'link',
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		dom.triggerEvent(dropdown.element.querySelector('.btn.btn-link'), 'click');

		async.nextTick(function() {
			assert(dom.hasClass(document.querySelector('.dropdown'), 'open'));

			done();
		});
	});

	it('should add class `show` to dropdown when clicked', function(done) {
		dropdown = new MetalQuartzDropdown({
			dropdownOpenClass: 'show',

			dropdownToggle: {
				component: 'link',
				elementClasses: 'btn btn-link',
				href: '#1',
				label: 'Dropdown Toggle'
			},

			dropdownItems: [{
				component: 'link',
				href: '#1',
				label: 'Dropdown Item 1'
			}]
		});

		dom.triggerEvent(dropdown.element.querySelector('.btn.btn-link'), 'click');

		async.nextTick(() => {
			assert(dom.hasClass(document.querySelector('.dropdown'), 'show'));

			done();
		});
	});
});