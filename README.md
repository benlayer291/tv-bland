# TV Bland
The live app can be viewed here: <https://tv-bland-two.vercel.app/>

## Technologies
- React
- Next.js
- Typescript
- PostCSS and PostCSS modules
- Jest
- React Testing Library
- ESLint
- Stylelint
- Prettier
- Github Actions

## Getting Started

First, install dependencies with `npm`
```bash
npm i
```

Then run the development server and visit [http://localhost:3000](http://localhost:3000)

```bash
npm run dev
```

Test can be run with:

```bash
npm run test
```

## Notes on design
Though the design is very simple, the idea behind it originates from constituent words of the API used: 'TV' and 'Maze'.

The London Underground network features a number of mazes as part of Art on the Undeground. Labyrinth is project by Mark Wallinger that has created a unique maze at every station. You can read more about it [here](https://art.tfl.gov.uk/labyrinth/about/). It is this project that gave inspiration for the monochrome palette, pierced by the red of the custom cross cursor.

Cathode ray television screen, in some of their earlier guises took time to 'warm up' and for an image to be seen. This led to the grayscale-color reveal for the TV show images, enclosed within their bounding television frame.

## Context
This task was something of a learning curve as I was new to React, Next.js, Typescript and React Testing Library (indeed testing wasn't top priority at my previous position). I have therefore viewed this as a golden opportunity to learn and have taken time to explore documentation etc. as the project has progressed. It is fair to say that the code for the app is not the only outcome of this work.

## Pages
There are two main pages: Schedule (home) and Show, alongside an initial styleguide, custom 404 and fallback pages.

### Styleguide
This was setup as good practive to define base styles used through out the application

### Schedule
This page is server side rendered and displays the shows upcoming for todays date. Server side rendering was chosen due to the dynamic nature of the data (changes every 24 hours).

### Show
These pages are statically rendered using incremental static regeneration. We use this feature to ensure that shows featured on the home page can be dynamically fetched and rendered if they have not already been. This feature utilises the custom fallback page as the page is being rendered.

### 404
Custom 404 page in keeping with the rest of the application.

## Components and Styles
Components have been built and named using a methodology advised by the Vue Styleguide. A degree of refactoring went into these as testig progressed.

Styles utilise PostCSS and CSS modules with the BEM naming methodology. It is worth noting here that configuring PostCSS was a challenge compared to usage with Nuxt. It became easier upon discovering Next's advice against the use of CSS variables though I'd say I'm still not that happy with variables etc. being defined in js config files.

## Tests
### Unit
Components have been unit tested using Jest and React Testing Library. As mentioned, testing and certainly unit testing was not big at my previous work (though it should have been) and such this was very unfamiliar territory. The documentation on this however was excellent and I'd probably say this is one of the [best intros I've ever read](https://www.robinwieruch.de/react-testing-library). Pleasingly, the approach to testing that I took led to refactoring of some components so that they behaved in a more 'single responsibility' way. I'd certainly be interested to work on testing an application with a greter level of functionality and create more integration type tests that Kent C Dodds recommends with React Testing Library.

### Cross browser
The application has been tested on Chrome and Chrome on Android but not extensively across the usual candidates.

## Performance and Audits
The site has been audited with Google Lighthouse and some reasonable improvements made on performance, SEO, accesibility and PWA. I ws interested to see performance marked down on excessive DOM nodes, given more time this is something I'd like to look into further as I assume it is aconsequence of React?

## CI/CD
I'd always wanted to setup Github Actions so this seemed a good time to try. As such we have an action that ensures upon Pull Requesting into `develop` the code is linted, tested and built. If this was a collaborative repo, I would limit the ability to merge unless these checks had passed. It ensures (to an extent) code quality and goes hand-in-hand with the pre-commit checks that run locally.

## Other
### Typescript
I'd not used typescript before however I really began to see the benefits when integrating the API data with the components. The documentation again was pretty good and helped to get into the swing of things.
### ESLint
Helping to maintain code quality, the handy hints it provides are also a real bonus.

### Prettier
I'm a big fan of consistency and Prettier makes formatting in projects, across teams incredibly straight forward.

### Stylelint
CSS is code too so we should ensure that is is high quality and consistenly formatted. I'm a fan of idiomatic ordering and that's what is being used here.

### Husky, Lint-staged
I hadn't used this before but everywhere kept on mentioning it. After setting it up I'm so pleased I did, being able to run linting and formatting on pre-commits is a great way to ensure quality an consistency before someone pushes to Github.
### Contribution flow
On a team project I would typically follow a methodolgy whereby we would use `master` and `develop` branches with `feature`, `task` and `bugfix` branches from `develop`. As this was a solo task this hasn't been stuck too regimentally however PRs were submitted and squashed and merged to demonstrate. A release was also created and tagged for v1.0.0 of the site.

## Areas to improve
### Image optimisation
I was excited to try Next's new `Image` component but upon replacing the usual `img` tags found that they come with a number of inline styles. Unfortunately, in the interest of time I didn't spend too long investigating but it is a shame as images as webp and availability of image transforms would be certainly aid performance.

### Page transition
I setup page transitions using Framer Motion and implemented a simple fade effect. I then started digging further through documentation to implement something less basic but upon deploying to Vercel noticed that on page transition, certain stylesheets go missing and the layout of the application breaks. I found a few issues referencing this but not solution and in the interest of time simply did not merge any of this work. It can be seen on the `feature/transitions` branch. The fact that the application does not feature any motion is clearly evident and disappointing. It is again interesting comparing this to the ease of setting these  up in Nuxt, both simple and complex.

