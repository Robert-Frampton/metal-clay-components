'use strict';

import MetalQuartzDropdown from '../src/MetalQuartzDropdown';

let dropdown;

describe('MetalQuartzDropdown', function() {
	afterEach(() => {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should generate the content markup', function() {
		dropdown = new MetalQuartzDropdown(
			{
				content: 'foo'
			}
		);

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzDropdown.html'].trim());
	});

	it('should append elementClasses to the outer element', function() {
		dropdown = new MetalQuartzDropdown(
			{
				content: 'foo',
				elementClasses: 'css-class'
			}
		);

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testElementClassesMetalQuartzDropdown.html'].trim());
	});
});
