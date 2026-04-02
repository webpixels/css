# Changelog

## v3.0.3

### Fixes

- Fix `.card-flush` structure: move header/footer border rules after card-body, fix table tbody indentation
- Remove Y padding on `.card-flush` when `.card-header` or `.card-footer` is present using `:has()` selector
- Update dark mode border color to use `$gray-800` instead of `darken($gray-700, 5%)`

## v3.0.2

### Fixes

- Fix `btn-icon` SVG shrinking by adding `flex: none` to nested SVGs

## v3.0.1

### Features

- Add `--font-sans-serif` CSS custom property to root styles
- Add `blur-2` (2px) blur utility class
- Rename `$font-family-base` to `$font-family-sans-serif` for consistency

### Fixes

- Fix `.table-flush` to only remove outer borders (first-child left, last-child right) instead of removing all cell borders
