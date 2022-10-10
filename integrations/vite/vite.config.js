const path = require('path')
import autoprefixer from 'autoprefixer';

export default {
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  },
  css: {
    postcss: {
      plugins: [
          autoprefixer
      ],
    }
  },
}
