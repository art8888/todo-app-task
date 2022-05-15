A junior colleague went on vacation and handed over a half-done application for you to finish.

He is a very keen learner and benefits a lot from good feedback. Please finish the application and <b>provide a thorough review</b>, touching on all of the issues with the code, explaining the what and the why. Feel free to refactor anything you deem appropriate.

This is a basic TODO list application. Requirements are as such:

- Should keep a list of tasks which can be "active" and "completed"
- New task is added as "active"
- Clicking on "active" task marks it as "completed" by crossing it out
- Should show a total count of all tasks in the list
- Name for a new task is specified by typing in an input field

If there is anything unclear about the exact requirements, use your best judgement.
Styling of the application is not important, and there will be no additional benefit in extending the application beyond the original requirements.

---


## Changelog
* Created `.gitignore` file
* Added `node_modules` into `.gitignore` file to ignore packages
* Fixed issue with the `this.state.map` so that each child in a list must have a unique "key" prop.
* Upgraded `react`, `react-dom`, `react-scripts` packages to a latest versions without caret symbol (^) so that accidentally will not be upgraded
* As long as _React_ was upgraded to a latest version (>16.8), need to change codebase. Changed codebase to support one type of programming (not classes with functional components) but only functional component, because it has greater performance over the Classes
* Structured project: All project files grouped by features. All features grouped in folders to support common types of files
* Separated code logic: Styles, component logic and dummy data was moved into separate files.
* Moved classes states logic into component hooks
* Implemented input field to add new tasks
* Implemented total tasks counter


## Notes
* `package-lock` had dependencies from DanskeBank _artifactory_ which was not possible to work with modules outside DanskeBank