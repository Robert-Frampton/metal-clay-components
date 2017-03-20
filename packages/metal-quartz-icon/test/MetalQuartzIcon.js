'use strict';

import MetalQuartzIcon from '../src/MetalQuartzIcon';

let quartzIcon;

describe('MetalQuartzIcon', function() {
	afterEach(() => {
		if (quartzIcon) {
			quartzIcon.dispose();
		}
	});

	it('should generate markup for icon `add-cell`', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				symbol: 'add-cell'
			}
		);

		assert.strictEqual(quartzIcon.element.outerHTML, __html__['test/fixture/testDefaultMetalQuartzIcon.html'].trim());
	});

	it('should append elementClasses to the outer element', function() {
		quartzIcon = new MetalQuartzIcon(
			{
				elementClasses: 'icon-monospaced',
				symbol: 'add-cell'
			}
		);

		let hasClassIconMonospaced = quartzIcon.element.className.baseVal.replace(/[\n\t]/g, " ").indexOf('icon-monospaced') > -1;

		assert(hasClassIconMonospaced);
	});

	it('should not output any markup if symbol is undefined', function() {
		quartzIcon = new MetalQuartzIcon();

		assert.equal(quartzIcon.element, null);
	});
});
