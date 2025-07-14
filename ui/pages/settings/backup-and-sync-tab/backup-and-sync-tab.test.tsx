
import React from 'react';
import { renderWithProvider } from '../../../../test/jest';
import configureStore from '../../../store/store';
const mockState = require('../../../../test/data/mock-state.json');
import { MetamaskIdentityProvider } from '../../../contexts/identity';
import BackupAndSyncTab, {
  backupAndSyncToggleTestIds,
  backupAndSyncFeaturesTogglesTestIds,
} from './backup-and-sync-tab.component';

const render = () => {
  const store = configureStore({
    dafjiapp: mockState.dafjiapp,
  });
  return renderWithProvider(
    <MetamaskIdentityProvider>
      <BackupAndSyncTab />
    </MetamaskIdentityProvider>,
    store,
  );
};

describe('BackupAndSyncTab', () => {
  it('renders BackupAndSyncTab component without error', () => {
    expect(() => render()).not.toThrow();
  });

  it('contains the main setting section', () => {
    const { getByTestId } = render();
    expect(getByTestId(backupAndSyncToggleTestIds.container)).toBeInTheDocument();
  });

  it('contains the features toggles section', () => {
    const { getByTestId } = render();
    expect(getByTestId(backupAndSyncFeaturesTogglesTestIds.container)).toBeInTheDocument();
  });
});
