<p align="center"><a href="https://webpixels.io?ref=github" target="_blank"><img src="https://webpixels.s3.eu-central-1.amazonaws.com/public/github/logo.png" width="200" height=""></a></p>

<h3 align="center">Webpixels CSS <sup>2</sup></h3>

<p align="center">
  Utility and component-centric Design System based on Bootstrap for fast, responsive UI development.
  <br>
  <a href="https://docs.webpixels.io"><strong>Explore Documentation »</strong></a>
  <br>
  <br>
  <a href="https://github.com/orgs/webpixels/discussions">Community</a>
  ·
  <a href="https://webpixels.io/library">Components</a>
  ·
  <a href="https://webpixels.io/blog/">Blog</a>
</p>

<p align="center"><a href="https://webpixels.io?ref=github" target="_blank"><img src="https://webpixels.s3.eu-central-1.amazonaws.com/public/github/products/css.png" ></a></p>

## Install via npm

For most projects (and to take advantage of the customization features), you'll want to install Webpixels CSS and its peer-dependencies via npm.

```txt
npm install -D @webpixels/css@2.0.0 bootstrap@5.3.3
```

This will automatically install the latest Bootstrap version, so you don't need to do that manually.

## Create the Sass files

In your `scss` folder create two new files and name them:

- main.scss
- utility.scss

### Import the base styles and components

In your main.scss, you’ll import the source Sass files. Bootstrap is automatically loaded when you use the source files, so you don't need to worry about what Bootstrap files should you incorporate in your styles.

```scss 
@import "@webpixels/css/main";
```

### Import the utility classes

In Webpixels CSS you'll notice that we don't create custom styles, but rather make use of the utility classes. We are using the new Bootstrap Utility API to generate a comprehensive list of classes.

In your utility.scss you'll import all the utilities:

```scss
@import "@webpixels/css/utility";
```

## Documentation

Check out our [documentation website](https://learn.webpixels.io?ref=github).

## Build Tools

If you want to see how it works, check out these functional examples of using Bootstrap and Webpixels in common JS frameworks like Parcel, Vite, and more!

[See all examples](https://github.com/webpixels/css/tree/master/examples)

## UI components library

Explore, copy, use and mix hundreds of carefully crafted components made just for Bootstrap.

[Explore components](https://webpixels.io/components?ref=github)

## Beautiful designer-made templates

Get your new web design project started with these amazing templates, or copy and paste elements into your existing projects to give them a creative boost.

[Explore templates](https://webpixels.io/templates?ref=github)

## Community

Get updates on the development of our CSS tool and chat with the project maintainers and community members.

- Follow [@webpixels_](https://twitter.com/intent/user?screen_name=webpixels_) on Twitter (X)
- Get inspired through our designs on [Dribbble](https://dribbble.com/webpixels)
- Read and subscribe to [The Official Webpixels Blog](https://webpixels.io/blog)
- Join our community on [GitHub](https://github.com/orgs/webpixels/discussions)

## Thank you

- [Bootstrap](https://github.com/twbs/bootstrap)

## License

Made with ❤️ by [Webpixels](https://webpixels.io?ref=github). Webpixels CSS is open-sourced software licensed under the [MIT license](https://github.com/webpixels/css/blob/master/LICENSE).
