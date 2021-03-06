const customMedia = require('./config/postcss/custom-media.js')
const variables = require('./config/postcss/variables.js')

module.exports = {
  plugins: {
    "postcss-simple-vars": {
      variables,
      
    },
    "postcss-custom-media": {
      importFrom: [
        {
          customMedia
        },
      ],
    },
    "postcss-nested": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env":  {
      "autoprefixer": {
        "flexbox": "no-2009"
      },
      features: {
        'custom-properties': false,
      },
      "stage": 3
    }
  }
}