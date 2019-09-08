# nutrition-app

![Image of screenshot nutrition-app](https://i.imgur.com/SSiGiER.jpg)

## Overview

A nutrition application created using Create-React-App, Redux and Material-UI using data fetched from [Nutritionix](https://developer.nutritionix.com/). [Click here to view the live version.](https://alexlee22.github.io/nutrition-app/)

### Features

- Calculates daily intake (cal)
- Search and add new food items to todays date
- Responsive design (mobile and desktop)

### Packages

- [create-react-app](https://github.com/facebook/create-react-app)
- [material-ui](https://material-ui.com/) - Google's Material Design in easy to use React components
- [styled-components](https://www.styled-components.com/)
- [redux](https://redux.js.org/introduction/getting-started) - cross-component state management

## Nutritionix

You will also need a Nutritionix developer account to use their API. The credentials are posted inside the header of the requests. [Click here to go to their portal.](https://developer.nutritionix.com). Get the following information:

- Nutritionix Application ID, and
- Nutritionix App Key

Navigate to `nutrition-app/src/store/actions.js` and paste your information into the variables (replacing the `<>` with your information):

```
const nutritionAppID = <NUTRITIONIX APPLICATION ID>;
const nutritionAppKey = <NUTRITIONIX APP KEY>;
```

## Running the project

Before running the site, ensure the following are installed and your terminal can run the following (developed on the following):

- `node v11.11.0`
- `npm v6.7.0`

You will also need a Nutritionix developer account, check the last section for more info.

To install the required packages:

1. Clone the git repo to your location of choice (or download the files directly from GitHub),
2. Navigate to the folder in terminal,
3. Run the command `npm install` in your terminal,
4. Input your Nutritionix developer App and Key information,
5. After installed, run the command `npm run start` to run  in development mode.

There are multiple commands to start the code, check `scripts` in the file `package.json` for the full list of commands to run. You can either run the app as ***local server** or **compile static** ready for deployment. See below for more information.

### Build Static Files

`npm run build`

This command will compile all the required files to run the site inside the folder `/build`. You can run the site using these files on a static hosting service. Below is a command for easy deploying to **GitHub Pages**.

### Deploy to GH Pages

`npm run deploy`

Inside your `package.json` file on the line starting with `"homepage"`, replace `<USERNAME>` with your GitHub username and `<GITHUB_REPO_NAME>` with the repo in which you want to host your site in.
```
...
"homepage": "http://<USERNAME>.github.io/<GITHUB_REPO_NAME>",
...
```

## Structure

### Components

```
App
├── Header
|   ├── User/Navigation         //CONDITION_MEDIA
|   └── SearchResults
|   └── InspectFood
└── Body
    ├── Stats
    |   └── DateNavigation/User     //CONDITION_MEDIA
    └── Food
```

`DateNavigation` and `User` components are can be placed in either `Header` component and `Stats` component. They depend on the media widths of the window. Currently they are set at Material-UI's `md` (medium at `960px`). Each component controls it's own CSS and Styling in the `index.js` file.

### Store

The application uses Redux to manage the applications data. Redux was chosen as the state manager to help manage the data between components without having to constantly send props into each components. Future developments will look into React Hooks. The store data consist of the following:
```
{
  metaData: Object,     //Contains
  dateIndex: Int,       //Toggles between days (0 is today, 1 is yesterday, etc.)
  searchBarFocus: Boolean,    //Sets focus for search bar (button)
  quickSearchData: Object,    //Quick search data from api/instant/ fetch
  inspectFood: Object   //Nutrition data of selected food
}
```

To automatically deploy your site to GitHub pages, run `npm run deploy`.

## Credits

- Favicons from [favicon.io](https://favicon.io/emoji-favicons/),
- "Jane" image from [Unsplash](https://unsplash.com/photos/fn_BT9fwg_E),
- [Nutritionix API](https://developer.nutritionix.com),
- 2hats for project idea