---
name: Home
route: /
---

![react-losen](https://user-images.githubusercontent.com/2470775/39097362-8093ab6e-465b-11e8-845e-b21b893d6091.png)

# react-losen &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/otovo/react-losen/blob/master/LICENSE)

> A brutallty simple wizard for React and React Native. Note: This module is under active development and not ready for release yet.

## Install

```shell
yarn add react-losen
```

## Example

```jsx
import { Wizard, Step, Controls } from 'react-losen';

<Wizard
  render={() => (
    <Fragment>
      <Step name="start">Step one</Step>
      <Step name="second-step">This is the second step</Step>
      <Step name="final-step">Click next to finish</Step>

      <Controls
        render={(onNext, onPrevious, isFirstStep) => (
          <Fragment>
            <Button onClick={onPrevious} disabled={isFirstStep}>
              Previous
            </Button>

            <Button onClick={onNext}>Next</Button>
          </Fragment>
        )}
      />
    </Fragment>
  )}
/>;
```

## Developing

### Built With

`react-losen` is built with React and it's [Context API](https://reactjs.org/docs/context.html) under the hood. We use [render props](https://reactjs.org/docs/render-props.html) to expose functionality to child components.

### Developing

Use `docz:dev` to spin up a dev server which let's you view and play with the source components. To get started, create a `.md` in the `./pages` directory. It uses MDX which let's you import and write
JSX within markdown documents. For more info out the [Docz website](https://www.docz.site/) and read up on the [MDX spec](https://github.com/mdx-js/mdx/).

### Building

```
yarn build
```

This command uses [`@pika/pack`](https://www.pikapkg.com/blog/introducing-pika-pack/) to build for browsers. Plugins are specified under `@pika/pack` in `package.json`.

### Publishing

Publish new versions with `yarn pack:publish`. Pika guides you through the Through a wizard, this helps you bump the version number and publish to npm.

### Deloying docs

The documentation is built by running `yarn docz:build`. This generates a static site in `./docs/`. Currently the site is deployed and hosted with [Zeit's Now](https://zeit.co/blog/now-static).

## Versioning

react-losen use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Tests

TODO: Add jest.

## Style guide

At react-losen, we use the following tools:

- [Flow](https://flow.org/) for static type checking
- [Prettier](https://prettier.io/) for code formatting
- [Eslint](https://eslint.org/) for linting

## API reference

- `Wizard`, the main orchestrator. It has 2 required props
  - render: This takes a set of `Step` as children. Minumum 2. Start and end
  - onComplete: What to do when the Wizard is complete.
  - onStepChange is called each time the step changes. This function is not called on initial load.
- `Step`, a wrapper for what you want to show as a step. It registers the step on mount to the Wizard context
- `Controls`, the controller for which step to show next. Has 2 directions: next and previous. It also knows if you are on the last or first step.

## Licensing

[MIT](https://github.com/otovo/react-losen/blob/master/LICENSE)
