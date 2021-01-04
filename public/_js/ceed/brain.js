/** 
 * LEA - Live Environment for Agents
 * by Renato Lenz Costalima
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
export class Symbol {
	constructor(id, type, info/*, date*/) {
		if (id !== undefined && type === undefined && info === undefined/* && date == null*/) {
			info = id;
			type = typeof info;
			id = 0;
		}
		else if (id == null) {
			id = 0;
		}
		else if (typeof id == 'object') {
			info = id.info;
			type = id.type;
			id = id.id;
		}
		/*if (date == null) {
			date = new Date();
		}*/
		this.id = id;
		this.type = type;
		this.info = info;
		//this.date = date;
		this.toString = function() {
			if (!this) {
				return this;
			}
			return this.id + ': ' + this.type + ' | ' + this.info;
		};
	}
}
export class Link {
	constructor(a, r, b) {
		this.a = a;
		this.r = r;
		this.b = b;
		this.toString = function() {
			return this.a + ' (' + this.r + ') ' + this.b + '\n';
		};
	}
}