

# digitalkultr.com

This is the repository with the source code for [digitalkultr's website](https://digitalkultr.com/)

Your welcome to use it, If you find it interesting, inspiring or learn something from it.

## Architecture

We developed this website using **React** + **Vite**, and a custom UI made by our beloved team, we'll hope be publishing our UI design to inspire you made your own website.

To accomplish all features, we leverage a few external services:
- CMS - Strapi: It's where we configure the content for the website, store and serve assets.
- Web Delivery - Netlify: Used to deploy, and host our website.

The website is hosted on Netlify, and deployed via Netlify workflows.

We have three distinct environments for the website:

- `local-development` for developers to develop and test their code on their machine;
- `staging` bounded to the `main` branch and preview deployments (pull requests);
- `production` deployed when a release is published.

## Contributing

The development of this project follows an internal roadmap. Therefore we usually are only open to improvements and bug-fixes.

### Development

- Start the development server: `yarn dev`
- Auto format the code: `yarn format`

