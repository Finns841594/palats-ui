
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Launches story book on localhost:6006

## Storybook 

Storybook is a frontend workshop for building UI components and pages in isolation. 
It is used for UI development, testing and documentation.

Once setup the UI is intuitive and allows users to comprehensively check a component with different states, props and inputs, seeing changes in real time. It can be used by developers and designers to test components, reduces the risk of miscommunication and helps maintain style consistency.

## Setup

Storybook has clear and easy-to-follow documentation and videos.
https://storybook.js.org/docs/react/get-started/install

## Tailwind Integration

The Storybook documentation is good but not fully comprehensive. Our fixes to various issues are below.
https://storybook.js.org/recipes/tailwindcss/

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
````
Please note when passing in the font-size part of the semantic token tailwind does not recognise nesting within the font-size config, it is therefore necessary to flatten the font-size object.

## Custom Fonts

It is necessary to create a preview-head.html file in the storybook folder when importing custom fonts. (Storybook does not access the public/index.html file)
https://storybook.js.org/docs/react/configure/images-and-assets

## Stories

https://storybook.js.org/docs/react/writing-stories/introduction
Documentation for writing stories is comprehensive.
Components should use prop-types to integrate props as storybook arguments.

## Documentation

Documentation is automatically generated by using 
```
tags: ['autodocs']
```
within the meta object in each story.
If react components are passed as arguments within a story the [component].stories file should be .tsx not .ts.

## Testing

In the current format components are tested manually. It is possible to create tests within Storybook ranging from accessiblity to end-to-end tests.
https://storybook.js.org/docs/react/writing-tests/introduction


## Conclusion

Storybook is very usable after initial setup.
It is a very useful tool for quickly creating and testing components on a visual level.
The only drawbacks in our experience are a relatively slow compile time. We suspect is due to an interaction between Storybook and typescript that has not been resolved on their end.