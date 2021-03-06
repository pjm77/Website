const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer/lib/BundleAnalyzerPlugin");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/fa-custom/'
                        }
                    }
                ]
            }
        ],
    },
    watchOptions: {
        ignored: /fonts/
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
};