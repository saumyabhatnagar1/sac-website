# SAC Website 2020-2021

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Steps to install Node.js and npm

1. Go to https://nodejs.org/en/, and install **12.18.4 LTS** version for Windows (x64).
2. This will download an installer (.exe). Install this latest LTS version of Node.js in your Windows system.
3. Right-click on the Start button at Taskbar, then select **Windows PowerShell (Admin)**.
4. Enter the command `node -v` and then `npm -v`. If both commands display a version number, then it means that Node.js and npm has been successfully installed in your system.

## Steps to install Angular CLI

1. In the **Windows PowerShell (Admin)**, run the command `npm install -g @angular/cli`.
2. Enter the command `ng --version`. If it displays the version number, then it means that Angular CLI has been successfully installed in your system.
   
## Steps to setup the project in your local system

1. Clone the main repo to your local system.
2. Now open **Git Bash** (in Windows) inside the local repo.
3. Run the command `npm install`. This step will install **node_modules** mentioned in `package.json` file of our repo.
4. After completion of above command, run `npm audit fix --force`.
5. To run the project, run the command `ng serve`. In case due to version mismatch error, you are unable to run the project, use the command `npx ng serve`.
6. In your web browser, enter `localhost:4000` as the URL to see the project.

## Commit message template to be followed 

**Template**: `[your_name] Some commit message` <br/>
e.g.: `[Himanshu] Updated README`

<hr>

# General Angular Help

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).