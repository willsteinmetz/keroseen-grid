# Keroseen Grid

Keroseen is a user interface framework built with Sass for easy customizability. This project repository contains the code for the grid component

## Getting started with custom building

Keroseen is built using a variety of open source tools:

- CSS is written using Sass and Compass
- Node for running build and include tools
- Grunt for build tasks

The following libraries/tools will need to be installed prior to rolling a custom build:

- Ruby
- Sass and Compass gems
- node.js
- grunt-cli - globally installed (npm)

Once the above tools are installed run the following commands:

    $ npm install

The above will install the grunt tools necessary.

Changes can then be made to the _settings.scss file to change values for the build.

Builds can happen automatically by running the following before making changes:
    
    $ grunt watch

If you do not wish to have the build automatically occur, you can run the build tasks manually by simply running:

    $ grunt

## Parent project

The parent project can be found here [https://github.com/willsteinmetz/keroseen](https://github.com/willsteinmetz/keroseen)
