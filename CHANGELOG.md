# Changelog

## v3.0.5

### Features

- Add emerald color scale (`$emerald-100` through `$emerald-900`)
- Add `color-scheme: dark` and `--body-color` custom property for dark mode
- Add `col-span` and `row-span` CSS grid utilities with responsive support
- Import extras module in main entry point
- Redesign article/prose component with comprehensive markdown support:
  - Code blocks with line numbers, line highlights, filename headers, and copy button styling
  - Card-style tables with hover states and tier badges
  - Pull quotes, blockquotes, and GitHub-style callouts/admonitions
  - Key takeaways card, collapsible details/summary, definition lists
  - Inline helpers: `kbd`, `mark`, `abbr`, link styling, GFM task lists

### Changes

- Update theme color defaults: primary to `$gray-900`, secondary to `$indigo`, tertiary to `$emerald`
- Change article base font size from `1rem` to `.9rem`

## v3.0.4

### Features

- Add `grid-cols` utility for `grid-template-columns` with responsive support (1-6, 12 columns + named splits like `1-2`, `2-1`, `1-3`, `3-1`)
- Add `grid-rows` utility for `grid-template-rows` with responsive support (1-6 rows)

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
