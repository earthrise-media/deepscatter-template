# DeepScatter Template

Welcome to the DeepScatter Template repository! This repository provides a template for creating and publishing DeepScatter visualizations on GitHub Pages with a simple control panel. DeepScatter is a powerful tool for visualizing scatter plots and scatter plot transformations. Check out the [Deepscatter](https://github.com/nomic-ai/deepscatter) repo itself for more info.

To get started, follow the instructions below to clone the repository and set up your own GitHub repository to publish your DeepScatter visualizations. Note, I've assumed that you have a GitHub account, have installed the Github CLI on your local machine, and have npm installed.

- If you don't have a GitHub account, you can create one [here](https://github.com/signup).
- If you don't have Git installed, you can download it [here](https://cli.github.com/manual/installation).
- If you don't have npm installed, follow the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## Instructions

1. **Clone the repository**: Begin by cloning this repository to your local machine. You can do this by running the following command in your terminal:

   ```
   gh repo clone earthrise-media/deepscatter-template
   ```

2. **Upload your repo to github**: You can do this by first renaming the folder you just cloned to yourlocal machine and then running the following command in your terminal:

   ```
   gh repo create <repo>
   ```

   Replace `<folder-name>` with what you renamed your folder. This will create a new repository on GitHub and add it as a remote to your local repository.

3. **Configure `vite.config.js`**: Open the `vite.config.js` file in the root of the cloned repository. Add the following line of code at the top of the file:

   ```javascript
   base: "/<repo>/",
   ```

   Replace `<repo>` with the name of your repository.

4. **Update `package.json`**: Open the `package.json` file in the root of the cloned repository. Locate the `"homepage"` field and change its value to match the URL where you intend to publish your DeepScatter visualizations. It should follow the format `https://<username>.github.io/<repo>/`, where `<username>` is your GitHub username and `<repo>` is the name of your repository.

5. **Install dependencies and run development server**: Run the following commands in your terminal to install the project dependencies and start the development server:

   ```shell
   npm install
   npm run dev
   ```

   This will ensure that everything is working correctly and allow you to preview your visualization locally.

6. **Publish or update your visualization**: Whenever you want to publish your visualization to GitHub Pages or update it with the latest changes, run the following command in your terminal:

   ```shell
   npm run deploy
   ```

   This command will build the project and automatically push the generated files to the `gh-pages` branch of your repository, making your visualization accessible at the URL specified in the `"homepage"` field. You may need to configure your GitHub pages settings to serve the `gh-pages` branch from the root of your repository.

## Customization

To customize your DeepScatter visualization, follow these steps:

1. The [Deepscatter Repo](https://twitter.com/camkruse) has a great quickstart guide on how to create your own tiles file from a csv. The basics are

   ```
   shell
   python3 -V # requires Python 3.9.x or 3.10.x
   python3 -m pip install git+https://github.com/bmschmidt/quadfeather
   quadfeather --files <YOUR_CSV>.csv --tile_size 50_000 --destination <DESTINATION_FOLDER>
   ```

2. **Add your own tiles**: Place your tiles folder in the `public` folder of the cloned repository. Alternatively, you can redirect the file URLs in the `main.js` file to point to your own tile files. You should be overwriting or deleting the current tiles folder.

3. **Update `tileconfig.js`**: Open the `tileconfig.js` file in the `src` folder. Customize the color and layout settings according to your preferences. These settings will be used to populate the control panel menus in your DeepScatter visualization. Follow the structure of the data that is currently in the tileconfig.js file. There are some helpful comments to guide you along the way.

If you have any questions or need further assistance, please don't hesitate to reach out [@camkruse](https://twitter.com/camkruse). Please link back to [this repo](https://github.com/earthrise-media/deepscatter-template) in your GitHub repo and check out The Plotline if your interested in some of the data visualization work we do at [Earth Genome and Earthrise Media](https://theplotline.org/).
