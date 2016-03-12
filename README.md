# Keroseen Grid

Keroseen Grid is a flexible Sass-based grid system. It can generate any number of flexible grids with any number of columns by configuring a variable in the settings file. It can also generate grids for portrait orientation.

## Bower

Keroseen Grid is available for installation via Bower.

    $ bower install --save keroseen-grid

## Defaults

By default, the system creates grids with 9, 12, 16, 20, and 24 columns. Since it's rare that a project will use more than one grid size, the settings file can be updated to include only the required grid sizes or even a custom size not listed above (ex: you can generate a 15 or 37 column grid if needed).

## Custom Builds

The required build tools can be installed by running:

    $ npm install

Running the `gulp` command will run a build cycle and run the watch task to automatically compile changes.

Before making changes to `/src/sass/_settings.sass`, make sure Gulp is running. Once changes are made to the settings file, the code will be automatically regenerated in the `dist` directory including both a regular and minified version of the CSS complete with source maps.

The source Sass files can also be included in your project for a custom build that automatically concatenates the grid system into your project's resources.

## Other Considerations

While not required by the project, it is helpful to have a reset stylesheet such as Normalize to help the grids flow smoother.
