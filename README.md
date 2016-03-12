# Keroseen Grid

Keroseen grid is a flexible Sass-based grid system. It can generate a flexible grid with any number of columns by configuring a variable in the settings file. It can also generate breakpoints for portrait orientation.

## Getting started with custom building

Keroseen is built using a variety of open source tools:

- CSS is written using Sass and Compass
- Node for running build and include tools
- Gulp for build tasks

The required build tools can be installed by running:

    $ npm install

Changes can then be made to the _settings.scss file to change values for the build.

Running the `gulp` command will run a build cycle and continue running the watch task for changes. To stop the watch task, press `CTRL+C` in the terminal.

### Other Considerations

While not required by the project, it is helpful to have a reset stylesheet such as Normalize to help the grids flow smoother.

### Defaults

By default, the system compiles the 9, 12, 16, 20, and 24 column grids. Since it's rare that a project will use one or two different size grids, the settings file can be updated to only include some of the grids or even a custom size not listed above. Once updated, run `gulp` in the terminal to recompile the stylesheet.

## Bower Install

Keroseen grid is available for installation via Bower. To install Keroseen grid via bower, run the following command:

    $ bower install --save keroseen-grid
