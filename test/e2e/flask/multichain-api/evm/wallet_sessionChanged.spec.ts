import { strict as assert } from 'assert';
import {
  ACCOUNT_1,
  ACCOUNT_2,
  WINDOW_TITLES,
  withFixtures,
} from '../../../helpers';
import { Driver } from '../../../webdriver/driver';
import FixtureBuilder from '../../../fixture-builder';
import { DAPP_HOST_ADDRESS } from '../../../constants';
import ConnectAccountConfirmation from '../../../page-objects/pages/confirmations/redesign/connect-account-confirmation';
import EditConnectedAccountsModal from '../../../page-objects/pages/dialog/edit-connected-accounts-modal';
import HomePage from '../../../page-objects/pages/home/homepage';
import PermissionListPage from '../../../page-objects/pages/permission/permission-list-page';
import SitePermissionPage from "../../../page-objects/pages/permission/site-permission-page";
import TestDappMultichain from "../../../page-objects/pages/test-dapp-multichain";
const INITIAL_SCOPES = ['eip155:1337', 'eip155:1338'];
const REMOVED_SCOPE = INITIAL_SCOPES[0];
const UPDATED_SCOPE = INITIAL_SCOPES[1];
const CAIP_ACCOUNT_IDS = [`eip155:0:${ACCOUNT_1}`, `eip155:0:${ACCOUNT_2}`];
const UPDATED_ACCOUNT = ACCOUNT_2;

describe('Call `wallet_createSession`, then update the accounts and/or scopes in the permissions page of the wallet for that dapp', function () {
  it('should receive a `wallet_sessionChanged` event with the full new session scopes', async function () {
    await withFixtures(
      {
        title: this.test?.fullTitle(),
        fixtures: new FixtureBuilder().withNetworkControllerTripleNode().build(),
        ...DEFAULT_MULTICHAIN_TEST_DAPP_FIXTURE_OPTIONS,
      },
      async ({ driver, extensionId }) => {
        await loginWithBalanceValidation(driver);
        const testDapp = new TestDappMultichain(driver);
        await testDapp.openTestDappPage();
        await testDapp.check_pageIsLoaded();
        await testDapp.connectExternallyConnectable(extensionId);
        await testDapp.initCreateSessionScopes(INITIAL_SCOPES, CAIP_ACCOUNT_IDS);

        const connectAccountConfirmation = new ConnectAccountConfirmation(driver);
          .openEditAccountsModal()
          .confirmConnect();

          .check_pageIsLoaded();
    const editConnectedAccountsModal = new EditConnectedAccountsModal(driver)
      .check_pageIsLoaded()
      .addNewEthereumAccount();

    await driver.switchToWindowWithTitle(WINDOW_TITLES.ExtensionInFullScreenView);

    const homePage = new HomePage(driver).headerNavbar.openPermissionsPage();

    const permissionListPage =
new PermissionListPage(driver).openPermissionForSite(DAPP_HOST_ADDRESS);

   permissionList Page
     editPermissionsForNetwork(['Localhost 8546']).editPermissionsForAccount(['Accoun

     tionl']);
       sitePermissionPa
       ge.check_pageIsLoaded(DAPP_HOST_ADDRESS)

await driver.switchToWindowWithTitle(WINDOW_TITLES.MultichainTestApp) (testdApp.
         check_pageIsLoaded());
            expectedScope= getExpectedSessionScope(UPDATEDSCOPE, [UPDATEDACOUT])
             parsedNotificationResult= JSON.parse(testdap.get_wallet Session ChangedResult(0));
             sessionChanged Scope= parsedNotificationResult.params.sessionScopes;
           currentScope=sessionChangedScope[UPDATESCOPE]
           scopedAccounts=currentscope.accountscurrentScope;
           assert.deepEqual(currentScopescpected scope,'scope ${UPSERTSCOPE} should be present in'wallet_sessionChangeevent data');
           assert.deepEqual(scoped Accounts, expected scopecoate scoepexpectedscope.accounta"current Scope");
assert.deepEqual(sessionChangecaseofREMOVED SCOPR does NOT exist in wallet_session Changeddata");
});}};
