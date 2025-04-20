export * from './all.js';
import all from './all.js';
export default all

declare const globalThis: {
	/**
	 * Global VFS. Do not use unless absolutely needed.
	 * @hidden
	 */
	__zenfs__: typeof all;
};

globalThis.__zenfs__ = all;
