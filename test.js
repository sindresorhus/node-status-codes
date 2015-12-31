import test from 'ava';
import x from './';

test(t => {
	t.is(x[200], 'OK');
	t.is(x[500], 'Internal Server Error');
});
