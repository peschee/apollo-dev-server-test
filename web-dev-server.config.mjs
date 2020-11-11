import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';

import _commonjs from '@rollup/plugin-commonjs';

const commonjs = fromRollup(_commonjs);

export default {
  nodeResolve: true,
  appIndex: 'index.html',
  rootDir: '.',
  plugins: [commonjs(), esbuildPlugin({ ts: true })],
};
