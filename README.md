## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Launches story book on [http://localhost:6006](http://localhost:6006)

### `npx http-server ./storybook-static`

Launches built static storybook. Check terminal for port info.
run `npm run build-storybook` to build static storybook locally, it might take minutes.
more info about this: [https://storybook.js.org/docs/react/sharing/publish-storybook](https://storybook.js.org/docs/react/sharing/publish-storybook)

## Storybook

Storybook is a frontend workshop for building UI components and pages in isolation.
It is used for UI development, testing and documentation.

Once setup the UI is intuitive and allows users to comprehensively check a component with different states, props and inputs, seeing changes in real time. It can be used by developers and designers to test components, reduces the risk of miscommunication and helps maintain style consistency.

### Setup

[How to Install Storybook](https://storybook.js.org/docs/react/get-started/install)
Storybook has clear and easy-to-follow documentation and videos.\

### Tailwind Integration

[How to Integrate Tailwind](https://storybook.js.org/recipes/tailwindcss/)
The Storybook documentation is good but not fully comprehensive. Our fixes to various issues are below.\

As per the documentation the tailwind css file is imported into .storybook/preview.ts to ensure tailwind styling works withing the storybook environment.

In the Tailwind CSS configuration, a `safelist` entry is used to explicitly whitelist the hover, focus and active class variants and all classes. This is to ensure correct functionality in regards to dynamic styling.
The safelist serves as a targeted solution to guarantee the accurate application of styles in the Storybook environment.

```
safelist: [
    {
      pattern: /^(.*?)/,
      variants: ['hover', 'focus', 'active'],
    },
  ],
```

Please note when passing in the font-size part of the semantic token tailwind does not recognise nesting within the font-size config, it is therefore necessary to flatten the font-size object.

### Custom Fonts

It is necessary to create a preview-head.html file in the storybook folder when importing custom fonts. (Storybook does not access the public/index.html file)\
[How to import images, assets and fonts](https://storybook.js.org/docs/react/configure/images-and-assets)

### Stories

[How to write stories for a component](https://storybook.js.org/docs/react/writing-stories/introduction)\
Documentation for writing stories is comprehensive.
Components should use prop-types to integrate props as storybook arguments.

If react components are passed as arguments within a story the [component].stories file should be .tsx not .ts.

### Documentation

Documentation is automatically generated by using

```
tags: ['autodocs']
```

within the meta object in each story.

### Testing

In the current format components are tested manually. It is possible to create tests within Storybook ranging from accessiblity to end-to-end tests.
[Introduction to Storybook testing](https://storybook.js.org/docs/react/writing-tests/introduction)

## Conclusion

Storybook is very usable after initial setup. It can be especially useful in regards to testing visual elements of components and easing communication between devleopers, designers and other stakeholders.

The only drawback in our experience is a relatively slow compile time. We suspect this is due to an interaction between Storybook and typescript that has not been resolved on their end.
