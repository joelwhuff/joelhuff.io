import { join } from 'path';
import { fileURLToPath } from 'url';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const DIST = join(fileURLToPath(import.meta.url), '../dist');

const TERSER_HTML_OPTIONS = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true,
};

export default {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        filename: '[contenthash].js',
        path: DIST,
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.(woff|woff2)/, type: 'asset/resource', generator: { filename: 'font/[name][ext]' } },
            { test: /\.png/, type: 'asset/resource', generator: { filename: 'image/[name][ext]' } },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            minify: TERSER_HTML_OPTIONS,
            favicon: './src/image/favicon.ico',
        }),
        new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    ],
    optimization: { minimizer: ['...', new CssMinimizerPlugin()] },
};
