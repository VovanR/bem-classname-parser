import fs from 'fs';
import test from 'ava';
import yaml from 'js-yaml';
import fn from './';

const fixturesYaml = fs.readFileSync('./fixtures.yml', 'utf8');
const fixtures = yaml.safeLoad(fixturesYaml);

test('is object', t => {
	t.is(typeof fn, 'object');
});

test('return parsed JSON object', t => {
	t.plan(fixtures.length);
	fixtures.forEach(data => {
		t.deepEqual(fn.parse(data.input), data.output);
	});
});
