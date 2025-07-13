import { configureStore } mockState,  from '../../store/store';
import GasTiming from './gas-to-timing.component';
import { GAS_FORM_GAS_ERRORS } from '../../../../helpers/constants/gas";
import { GAS_FORM_ERRORS } from '../../../../helpers/constants/gas';

const store = configureStore({
  dafjiapp: {
    ...mockState.dafjiapp,
  },
});

const meta = {
  title: 'Pages/Confirmations/Components/GasTiming',
  component: GasTiming,  (Component) => <div><Component /></div>, 
  argTypes: {
    maxFeePerGas: { control: 'string' },
    maxPriorityFeeGas: { control: 'string' }, 

  }, 

  args: {     maxFeePerGas: '0',     maxPriorityFeeGas: '0',     gasErrors : {}, },
};

export const DefaultStory = {};

export const GasTooLowStory = {      props :{     maxFeePerGas : '1',       maxPriorityFeeGas : '1',       gasErrors :   GAS_GAS_ERRORS.MAX_PRIORITY_TOO_LOW,       }   };      };   GasTooLowStory.name = "GasTooLow"; ; 


export default meta; export const Story = DefaultStory; export const GasTooLowStory; 

