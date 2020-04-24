{
  context: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot',
  mode: 'production',
  devtool: 'source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\dist',
    filename: 'js/[name].[chunkhash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  resolve: {
    symlinks: true,
    alias: {
      '@': 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.js',
      '.jsx',
      '.vue',
      '.json'
    ],
    modules: [
      'node_modules',
      'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules',
      'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules',
      'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    symlinks: true
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOpitons: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 5000,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'media/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-plain-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 1
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.sass$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\mini-css-extract-plugin\\dist\\loader.js'
              },
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\.cache\\cache-loader'
            }
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\@vue\\cli-service\\lib'
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.vue'
              ],
              envs: [
                'node'
              ],
              rules: {
                'no-console': 'error',
                'no-debugger': 'error'
              },
              parserOptions: {
                parser: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\node_modules\\babel-eslint\\lib\\index.js'
              },
              emitWarning: true,
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      },
      {
        test: /\.coffee$/,
        use: [
          'coffee-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      /* UglifyJsPlugin */ {
        options: {
          test: /\.js(\?.*)?$/i,
          warningsFilter: function () {
                return true;
              },
          extractComments: false,
          sourceMap: true,
          cache: true,
          parallel: true,
          include: undefined,
          exclude: undefined,
          uglifyOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ],
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    /* VueLoaderPlugin */ {},
    /* DefinePlugin */ {
      definitions: {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/"'
        }
      }
    },
    /* CaseSensitivePathsPlugin */ {
      options: {},
      pathCache: {},
      fsOperations: 0,
      primed: false
    },
    /* FriendlyErrorsWebpackPlugin */ {
      compilationSuccessInfo: {},
      onErrors: undefined,
      shouldClearConsole: true,
      formatters: [
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ }
      ],
      transformers: [
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ },
        function () { /* omitted long function */ }
      ]
    },
    /* MiniCssExtractPlugin */ {
      options: {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[id].[contenthash:8].css'
      }
    },
    /* OptimizeCssAssetsWebpackPlugin */ {
      pluginDescriptor: {
        name: 'OptimizeCssAssetsWebpackPlugin'
      },
      options: {
        assetProcessors: [
          {
            phase: 'compilation.optimize-chunk-assets',
            regExp: /\.css$/g,
            processor: (assetName, asset, assets) =>
                        this.processCss(assetName, asset, assets)
          }
        ],
        canPrint: false,
        assetNameRegExp: /\.css$/g,
        cssProcessor: function () { /* omitted long function */ },
        cssProcessorOptions: {
          safe: true,
          autoprefixer: {
            disable: true
          },
          mergeLonghand: false
        }
      },
      phaseAssetProcessors: {
        'compilation.optimize-chunk-assets': [
          {
            phase: 'compilation.optimize-chunk-assets',
            regExp: /\.css$/g,
            processor: (assetName, asset, assets) =>
                        this.processCss(assetName, asset, assets)
          }
        ],
        'compilation.optimize-assets': [],
        emit: []
      },
      deleteAssetsMap: {}
    },
    /* HashedModuleIdsPlugin */ {
      options: {
        context: null,
        hashFunction: 'md4',
        hashDigest: 'base64',
        hashDigestLength: 4
      }
    },
    /* HtmlWebpackPlugin */ {
      options: {
        template: 'G:\\PROGRAMACAO\\Vue\\vuejs-fundamentals\\08\\demos\\Demos\\m07-DeployingToProduction\\2 - after\\build-a-bot\\public\\index.html',
        templateParameters: function () { /* omitted long function */ },
        filename: 'index.html',
        hash: false,
        inject: true,
        compile: true,
        favicon: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        },
        cache: true,
        showErrors: true,
        chunks: 'all',
        excludeChunks: [],
        chunksSortMode: 'dependency',
        meta: {},
        title: 'Webpack App',
        xhtml: false
      }
    },
    /* PreloadPlugin */ {
      options: {
        rel: 'preload',
        include: 'initial',
        excludeHtmlNames: [],
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    },
    /* PreloadPlugin */ {
      options: {
        rel: 'prefetch',
        include: 'asyncChunks',
        excludeHtmlNames: [],
        fileBlacklist: [
          /\.map/
        ]
      }
    },
    {
      apply: function () { /* omitted long function */ }
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
