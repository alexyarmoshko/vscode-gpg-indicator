import * as assert from 'assert';
import * as fs from 'fs';

describe('ExtensionManifest', () => {
    it('runs in the workspace extension host', () => {
        const manifest = JSON.parse(fs.readFileSync('package.json', 'utf8'));

        assert.deepStrictEqual(manifest.extensionKind, ['workspace']);
    });
});
