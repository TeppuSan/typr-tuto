module.exports = {
    entry: {
    bundle:'./src/index.ts',
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name].js',
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.js'],//from "./index"
    },
    devServer: {
        static: {
            directory: `${__dirname}/dist`,
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
        ],
    },
};
