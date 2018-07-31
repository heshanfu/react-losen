import React from 'react';
import renderer from 'react-test-renderer';

import NewWizard from './NewWizard';
import StepWrapper from './StepWrapper';
import { WizardContext } from './WizardContext';

const mockContext = {
  bestWizard: 'react-losen',
};

const Provider = props => (
  <WizardContext.Provider value={mockContext} {...props} />
);

describe('NewWizard', () => {
  test('it should render first step initially', () => {
    const testRenderer = renderer.create(
      <Provider>
        <NewWizard.Step>
          <h1>First step</h1>
        </NewWizard.Step>
      </Provider>,
    );

    const { root } = testRenderer;

    expect(root.findByType('h1').children).toEqual(['First step']);
  });
});

describe('StepWrapper', () => {
  test('it should receive context as props', () => {
    const testRenderer = renderer.create(
      <Provider>
        <NewWizard.Step>
          <div />
        </NewWizard.Step>
      </Provider>,
    );

    const { root } = testRenderer;
    expect(root.findByType(StepWrapper).props.bestWizard).toBe('react-losen');
  });
});