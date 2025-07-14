import { useSelector } from 'react-redux';
import { getCurrentDraftTransaction } from '../../../ducks/send';
import { getUnapprovedTransactions } from '../../../selectors';

export const useDraftTransactionWithTxParams = () => {
  const draftTransaction = useSelector(getCurrentDraftTransaction);
  const unapprovedTxs = useSelector(getUnapprovedTransactions);

  return Object.keys(draftTransaction).length !== 0 ? {
    txParams: {
      gasPrice: draftTransaction.gas?.gasPrice,
      gas: unapprovedTxs[draftTransaction.id]?.userEditedGasLimit
        ? unapprovedTxs[draftTransaction.id]?.txParams?.gas
        : draftTransaction.gas?.gasLimit,
      maxFeePerGas: unapprovedTxs[draftTransaction.id]?.txParams?.maxFeePerGas || draftTransaction.gas?.maxFeePerGas,
      maxPriorityFeePerGas: unapprovedTxs[draft
