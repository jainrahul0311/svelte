import { test } from '../../test';

export default test({
	html: `
		<button type="button">Set a</button>
		<button type="button">Set b</button>
	`,

	async test({ assert, target, window, logs }) {
		const [btn1, btn2] = target.querySelectorAll('button');
		const click = new window.MouseEvent('click', { bubbles: true });

		await btn1.dispatchEvent(click);
		assert.deepEqual(logs, ['setKey(a, value-a)']);

		await btn2.dispatchEvent(click);
		assert.deepEqual(logs, ['setKey(a, value-a)', 'setKey(b, value-b)']);
	}
});
