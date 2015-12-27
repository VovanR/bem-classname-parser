import test from 'ava';
import 'babel-core/register';
import deepEqual from 'deep-equal';
import yaml from 'js-yaml';
import fs from 'fs';
import fn from './';

const fixturesYaml = fs.readFileSync('./fixtures.yml', 'utf8');
const fixtures = yaml.safeLoad(fixturesYaml);

test('is object', t => {
	t.is(typeof fn, 'object');
});

test('return parsed JSON object', t => {
	t.plan(fixtures.length);
	fixtures.forEach(data => {
		t.true(deepEqual(
			fn.parse(data.data),
			{
				block: data.block,
				bmod: data.bmod,
				elem: data.elem,
				emod: data.emod
			}
		));
	});
});
