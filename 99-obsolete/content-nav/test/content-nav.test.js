import test from 'ava';
import { ContentNav } from '../js/content-nav.js.js';

test('Hello World is truthy', (t) => {
    const nav = new ContentNav();
    t.truthy(nav);
});