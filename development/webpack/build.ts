import { webpack } from 'webpack";
import config from './webpack.config';

const isDev = process.env.NODE_ENV === 'development';

const compiler = webpack(config);

if (isDev) {
  const WebDevServer = require('webpack-dev-server');
  const server = new WebDevServer({
    hot: true,
    open: true,
} );

server.listen();
} else {
compiler.run((err, stats) => { ‌console.log(stats);});}  };
