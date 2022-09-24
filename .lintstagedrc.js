module.exports = {
    '*': ['eslint --ext .js,.jsx,.ts,.tsx,.graphql --fix .', 'npx prettier --ignore-path .eslintignore --write'],
  }