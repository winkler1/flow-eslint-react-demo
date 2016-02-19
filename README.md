### What is this?
A demo of the power of React PropTypes with Flow's static analysis. [Blog post/Video](https://react.rocks/blog/post/propTypes_React_Flow/).

![Missing props](proptypes_required.gif)

![Flow constraints](constraints.gif)

### How to use
* `git clone git@github.com:winkler1/flow-eslint-react-demo.git && cd flow-eslint-react-demo && git co react-13 && npm install`
* `npm run lint`: to confirm eslint working.
* Watch your code: `./node_modules/.bin/onchange "**/*.js" .babelrc .eslintrc .flowconfig -- ./run_checks.sh`