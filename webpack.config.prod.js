const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require("dotenv-webpack");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    clean: true,
    filename: "[name].bundle.js",
    publicPath: "http://localhost:4250/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 4250,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "mf_ecommerce_host",
      filename: "remoteEntry.js",
      //remotes: {
      //  mf_list_product: `mf_list_product@https://mf-list-product.xyzuan.my.id/remoteEntry.js`,
      //  mf_payment_and_cart: `mf_payment_and_cart@https://mf-cart-payment.xyzuan.my.id/remoteEntry.js`,
      //},
      remotes: {
        mf_list_product: `mf_list_product@http://localhost:4251/remoteEntry.js`,
        mf_payment_and_cart: `mf_payment_and_cart@http://localhost:4252/remoteEntry.js`,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
};
