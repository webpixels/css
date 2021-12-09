<p align="center"><a href="https://webpixels.io/start" target="_blank"><img src="https://webpixels.s3.eu-central-1.amazonaws.com/public/github/logo.png" width="200" height=""></a></p>

<h3 align="center">Webpixels CSS</h3>

<p align="center">
  Utility and component-centric Design System based on Bootstrap for fast, responsive UI development.
  <br>
  <a href="https://webpixels.io/docs"><strong>Explore Documentation »</strong></a>
  <br>
  <br>
  <a href="https://github.com/webpixels/css/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/webpixels/css/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://webpixels.io/components/">UI Components</a>
  ·
  <a href="https://webpixels.io/blog/">Blog</a>
</p>

<p align="center"><a href="https://webpixels.io/start" target="_blank"><img src="https://webpixels.s3.eu-central-1.amazonaws.com/public/github/products/css.png" ></a></p>

## Install via npm

For most projects (and to take advantage of the customization features), you'll want to install Webpixels CSS and its peer-dependencies via npm.

```txt
npm install @webpixels/css@latest bootstrap@latest --save-dev
```

This will automatically install the latest Bootstrap version, so you don't need to do that manually.

## Import the styles into your CSS

In your main.scss, you’ll import the source Sass files. Bootstrap is automatically loaded when you use the source files, so you don't need to worry about what Bootstrap files should you incorporate in your styles.

You have two options: include all of styles at once:

```scss
@import "@webpixels/css";
```

or pick the parts you need:

```scss
@import "@webpixels/css/base";
@import "@webpixels/css/forms";
@import "@webpixels/css/components";
@import "@webpixels/css/utilities";
```

## Documentation

Check out our [documentation website](https://webpixels.io/docs).

## UI Components

Explore, copy, use and mix hundreds of carefully crafted components made just for Bootstrap. [Explore components](https://webpixels.io/components)

## Community

Get updates on the development of our CSS tool and chat with the project maintainers and community members.

- Follow [@webpxs](https://twitter.com/intent/user?screen_name=webpxs) on Twitter
- Read and subscribe to [The Official Webpixels Blog](https://webpixels.io/blog)
- Join [Github Discussions](https://github.com/webpixels/css/discussions)

## License

Webpixels CSS is open-sourced software licensed under the [MIT license](https://github.com/webpixels/css/blob/master/LICENSE).
