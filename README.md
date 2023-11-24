
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

The Storybook documentation is good but not fully comprehensive.
https://storybook.js.org/recipes/tailwindcss/

In our Tailwind CSS configuration, we've included a `safelist` entry to explicitly whitelist the hover, focus and active class patterns. This is to ensure correct functionality in regards to dynamic styling.
The safelist serves as a targeted solution to guarantee the accurate application of styles in the Storybook environment.

## Custom Fonts

It is necessary to create a preview-head.html file in the storybook folder when importing custom fonts. (Storybook does not access the public/index.html file)
https://storybook.js.org/docs/react/configure/images-and-assets




Setup - tailwind integration issues and fixes  
Stories for components - prop types
how we find to use - slow compile time
tweaks to make it usable 
    - custom font -> import in preview.head.html. we did it by link. if done locally has to be done using a style tag
    - safelist in tailwind.config
    - storybook/preview import tailwind css
interactions - not used but potentially useful (?)
