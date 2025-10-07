# PawsPreferences - Cat Image Swiping App

This is a single-page web application built with Angular that allows users to discover cat preferences by swiping through a stack of cat images. Users can swipe right to "like" a cat and swipe left to "dislike" it. After reviewing all cats, a summary displays the number of liked cats and their images.

## Features

-   **Cat Image Stack:** View a series of random cat images.
-   **Swipe Gestures:** Swipe right to like, swipe left to dislike (works on touch devices and with mouse drag on desktop).
-   **Like/Unlike Button:** Click a heart icon to like/unlike a cat.
-   **Loading Indicator:** Displays a loading message while fetching cat images.
-   **Summary Page:** Shows a summary of liked cats after all images have been reviewed.
-   **Cataas Integration:** Cat pictures are sourced from [Cataas (https://cataas.com/)](https://cataas.com/).
-   **Mobile-Friendly:** Designed for an intuitive and pleasant mobile viewing experience.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Deployment to GitHub Pages

The application can be deployed to GitHub Pages.

**1. Prerequisites:**
- Ensure you have `gh-pages` installed as a dev dependency: `npm install --save-dev gh-pages`
- Ensure your environment has network connectivity to GitHub.

**2. Deploy Command:**
Navigate to the `paws-preferences` directory in your terminal and run the following command:

```bash
npm run deploy
```

This command will:
- Build the Angular application for production with the correct base href for GitHub Pages.
- Use the `gh-pages` package to push the built application from the `dist/paws-preferences` directory to the `gh-pages` branch of your GitHub repository.
- Automatically create a `.nojekyll` file in the deployment output to ensure GitHub Pages correctly serves Angular's routing.

**3. Hosted Website Link:**
Once successfully deployed, your application should be available at:
`https://kpang01.github.io/Cat2/`

Please ensure you have configured GitHub Pages for your repository to serve from the `gh-pages` branch in your repository settings.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
