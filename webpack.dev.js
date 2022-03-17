import { join } from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';

const DIST = join(fileURLToPath(import.meta.url), '../dist');

export default {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: '_.js',
        path: DIST,
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(woff|woff2)$/, type: 'asset/resource', generator: { filename: 'font/[name][ext]' } },
            { test: /\.png$/, type: 'asset/resource', generator: { filename: 'image/[name][ext]' } },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            favicon: './src/image/favicon.ico',
        }),
    ],
};
