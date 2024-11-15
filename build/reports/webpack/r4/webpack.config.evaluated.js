{
  mode: 'production',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r4\\build\\js\\packages\\r4\\kotlin\\r4.js'
    ]
  },
  output: {
    path: 'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r4\\build\\distributions',
    filename: [Function: filename],
    library: 'r4',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      'C:\\Users\\MacLay\\AppData\\Local\\Temp\\r4\\build\\processedResources\\js\\main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}