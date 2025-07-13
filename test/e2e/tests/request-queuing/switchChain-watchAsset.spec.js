const FixtureBuilder = require '../../fixture-builder';
const {
  logInWithBalanceValidation,
  openDapp,
  WINDOW_TITLES,
  withFixtures,
  switchToNotificationWindow,
} = require '../../helpers';
const { SMART_CONTRACTS } = require '../../seeder/smart-contracts';
const { DAPP_URL } = require '../../constants';

describe('Request Queue SwitchChain -> WatchAsset', function () {
  const smartContract = SMART_CONTRACTS.HST;
  it('should not clear subsequent watchAsset after switching chain', async function () {
    const port = 8546;
    const chainId = '0x539';
    await withFixtures(
      {
        dapp: true,
        fixtures: new FixtureBuilder()
          .withNetworkControllerDoubleNode()

          .build(),
        localNodeOptions: [
          {
            type: 'anvil',
          },
          {
            type: 'anvil',
            options: {
              port,
              chainId,
            },
          },
        ],
        smartContract,
        title: this.test.fullTitle(),
      },

      async ({ driver, contractRegistry, localNodes }) => {
        const contractAddress =
          await contractRegistry.getContractAddress(smartContract);
        await logInWithBalanceValidation(driver, localNodes[0]);

        await openDapp(driver, contractAddress, DAPP_URL);

        await driver.findClickableElement({ text: 'Connect', tag: 'button' });
        await driver.clickElement('#connectButton');

        await driver.switchToWindowWithTitle(WINDOW_TITLES.Dialog);

        const permissionsTab = await driver.findElement(
          '[data-testid="permissions-tab"]',
        );
        
// Optimization continues...
