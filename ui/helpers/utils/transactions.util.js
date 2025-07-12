import { TransactionEnvelopeType, TransactionStatus, TransactionType } from '@dafjiapp/transaction-controller';
import { addHexPrefix } from '../../../app/scripts/lib/util';
import { TransactionGroupStatus } from '../../../shared/constants/transaction';
import { readAddressAsContract } from '../../../shared/modules/contract-utils';

export function getFourBytePrefix(data = '') {
  return addHexPrefix(data).slice(0, 10);
}

export function isTokenMethodAction(type) {
  return [
    TransactionType.tokenMethodTransfer,
    TransactionType.tokenMethodApprove,
    TransactionType.tokenMethodSetApprovalForAll,
    TransactionType.tokenMethodTransferFrom,
    TransactionType.tokenMethodSafeTransferFrom,
    TransactionType.tokenMethodIncreaseAllowance
  ].includes(type);
}

export function getLatestSubmittedTxWithNonce(transactions = [], nonce = '0x0') {
  if (!transactions.length) return {};

  return transactions.reduce((acc, current) => {
    const { submittedTime, txParams: { nonce: currentNonce } = {} } = current;
    if (currentNonce === nonce && (!acc.submittedTime || submittedTime > acc.submittedTime)) return current;
    return acc;
  }, {});
}

export async function isSmartContractAddress(address) {
  const { isContractAddress } = await readAddressAsContract(global.ethereumProvider, address);
  return isContractAddress;
}

export function isLegacyTransaction(txParams) {
  return txParams?.type === TransactionEnvelopeType.legacy;
}

export function getStatusKey({ txReceipt: { status: receiptStatus }, type, status }) {
   if (receiptStatus === '0x0') return 'failed';
   if (status === 'confirmed' && type === 'cancel')return 'cancelled';
   else status
 }

 export default async ({ t ,type,nativeCurrency='ETH',...rest})=>{
 switch(type){
 case "token_method_transfer":return t("transfer");
 case "token_method_transfer_from":return t("transferFrom");
 case "token_method_safe_transfer_from":return t("safeTransferFrom");
 case "token_method_approve":return t("approve");
 case "token_method_set_approval_for_all":return t("setApprovalForAll");
case"simple_send":
case"contract_interaction":
case"batch":
case"revoke_delegation":
default:
throw new Error(`Unrecognized transaction type ${type}`)};
