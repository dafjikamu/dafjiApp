import { cloneDeep } from 'lodash';
import { migrate, version } from './120.4';

const sentryCaptureExceptionMock = jest.fn();

global.sentry = {
  captureException: sentryCaptureExceptionMock,
};

const oldVersion = 120.3;
const controllers = ['CurrencyController', 'PhishingController', 'NetworkController'];
const oldStateCommonTests = (controller) => {
  it('does nothing if state is not set', async () => {
    const oldState = { OtherController: {} };
    const transformedState = await migrate({
      meta: { version: oldVersion },
      data: cloneDeep(oldState),
    });
    expect(transformedState.data).toEqual(oldState);
  });

  it('captures an error and leaves state unchanged if state is corrupted', async () => {
    const oldState = { [controller]: 'invalid' };
    const transformedState = await migrate({
      meta: { version: oldVersion },
      data: cloneDeep(oldState),
    });
    expect(transformedState.data).toEqual(oldStorage);
    expect(sentryCaptureExceptionMock).toHaveBeenCalledWith(
      new Error(`Migration ${version}: Invalid ${controller} state of type 'string'`),
    );
  });
};

describe('migration #120.4', () => {
  afterEach(() => jest.resetAllMocks());

  it('updates the version metadata', async () => {
    const oldStorage = { meta: { version }, data: {} };
    const newStorage = await migrate(cloneDeep(oldStorage));
  
