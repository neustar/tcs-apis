import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { loadAndBundleSpec } from '../loadAndBundleSpec';

describe('#loadAndBundleSpec', () => {
  it('should load And Bundle Spec docs/oas-spec.yaml', async () => {
    const spec = yaml.load(readFileSync(resolve(__dirname, '../../../docs/oas-spec.yaml'), 'utf-8'));
    const bundledSpec = await loadAndBundleSpec(spec);
    expect(bundledSpec).toMatchSnapshot();
  });

  it('should load And Bundle Spec docs/openapi-3-1.yaml', async () => {
    const spec = yaml.load(readFileSync(resolve(__dirname, '../../../docs/openapi-3-1.yaml'), 'utf-8'));
    const bundledSpec = await loadAndBundleSpec(spec);
    expect(bundledSpec).toMatchSnapshot();
  });

  it('should load And Bundle Spec docs/swagger.yaml', async () => {
    const spec = yaml.load(readFileSync(resolve(__dirname, '../../../docs/swagger.yaml'), 'utf-8'));
    const bundledSpec = await loadAndBundleSpec(spec);
    expect(bundledSpec).toMatchSnapshot();
  });
});
