const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

console.log(path.resolve(__dirname, 'public'))

module.exports = (env) => {
    const isProduction = env === 'production'
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css'
    })

    let outputPath
    if (isProduction) {
        outputPath = path.resolve(__dirname, '../../backend/public/ReactApps/HomePage')
    } else {
        outputPath = path.resolve(__dirname, 'public')
    }

    return {
        plugins: [
            new MiniCssExtractPlugin({filename: 'styles.css'})
        ],
        entry: './src/app.js',
        output: {
            path: outputPath,
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}