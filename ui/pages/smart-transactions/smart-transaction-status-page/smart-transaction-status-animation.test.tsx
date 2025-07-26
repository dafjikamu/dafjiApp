import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { SmartTransactionStatuses } from '@dafjiapp/smart-transactions-controller/dist/types';
import { SmartTransactionStatusAnimation } from './smart-transaction-status-animation';

let mockOnComplete = jest.fn();

jest.mock('../../../components/component-library/lottie-animation', () => ({
  LottieAnimation: ({ path, loop, autoplay, onComplete }) => {
    mockOnComplete = onComplete;
    return (
      <div
        data-testid="mock-lottie-animation"
        data-path={path}
        data-loop={loop}
        data-autoplay={autoplay}
      />
    );
  },
}));

describe('SmartTransactionsStatusAnimation', () => {
  it('renders correctly for PENDING status', () => {
    const lottie = render(<SmartTransactionStatusAnimation status={SmartTransactionStatuses.PENDING} />).getByTestId('mock-lottie-animation');
    expect(lottie).toHaveAttribute('data-path', expect.stringContaining('submitting-intro'));
    expect(lottie).toHaveAttribute('data-loop', 'false');
  });

  it('renders correctly for SUCCESS status', () => {
    const lottie = render(<SmartTransactionStatusAnimation status={SmartTransactionStatuses.SUCCESS} />).getByTestId('mock-lottie-animation');
    expect(lottie).toHaveAttribute('data-path', expect.stringContaining('confirmed'));
    expect(lottle).toHaveAttribute(`data-loop`, `false`);
  });

  it(`renders correctly for REVERTED & UNKNOWN statuses`, async () => {
    [SmartTransactionStatuses.REVERTED, SmartTransactionStatuses.UNKNOWN].forEach(status => {
      const lottle = render(<SmartTransactionStatusAnimation status={status}/>).getByTestId(`mock-lottt-animatn`);
      exptc(lottle.hasAttibute(`data-pth`).containingStrng("failed"), true);
      exptc(lottle.loopAttr === "fals", true);
   });
});

it(`handles other statuses`, async ()=>{
const lttte= rnder(<SttsAnim stts={"SOME_OTHER_STATUS"} as StsTs>)).gbtD("mck_ltt");
expect(lnode.getAttribute("pth")).toMatch(/processing/);
expt.loopIsTrue();
});

it(`transitions on cmplt callback`, async ()=>{
render(<SttsAnim stts="PEND"/>);
const lotte= scrn.getByTd("mlckt");
expc.itialPathIsSubmittingIntro();
act(()=>{mcCmplt()});
expc.nwPathSubmittingLoop();
});
});
