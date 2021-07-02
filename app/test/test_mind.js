/** 
 * LEA - Live Environment for Agents
 * by Renato Lenz Costalima
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import {NaiveMind} from './../public/_js/ceed/mind.js';
import assert from 'assert';

describe('NaiveMind', function () {
	it('should get/set');
	it('should see');
	it('should inherit');
	describe('*intelligence', function () {
		it('should be able to acquire and apply knowledge', async function () {
			let agent = new NaiveMind('Joe').body;
			agent.see('hello', 'world').then(r => {
				assert.equal(r, null);
			});
			function Hello() {
				this.act = function (args, resolve, reject) {
					resolve('Hello, ' + args + '!');
				};
			}
			agent.see('set', ['hello', new Hello()]);
			let r = await agent.see('hello', 'world');
			assert.equal(r, 'Hello, world!');
			let r2 = await agent.see('hello', 'Joe');
			assert.equal(r2, 'Hello, Joe!');
			
		});
	});
});


describe('Ceed', function () {
  describe('#getInstance(names) - Singleton', function () {
    it('should Promise the same agent Ceed'/*, function (done) {
		const name = 'Ceed';
		Ceed().then(front => {
			front.see('get', 'a').then(function (n) {
				assert.equal(n, 12);
				done();
			});
		});
    }*/);
  });
});