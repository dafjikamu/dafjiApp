import { generateCreateFileDiff, generateModifyFilesDiff } from '../common/test-data';
import { preventSinonAssertSyntax } from './sinon-assert-syntax';

describe('preventSinonAssertSyntax()', () => {
  it('should pass with an empty diff', () => {
    const testDiff = '';
    expect(preventSinonAssertSyntax(testDiff)).toBe(true);
  });

  it('should pass with modify diff containing blocked expression', () => {
    const infringingExpression = 'assert.equal';
    const testDiff = [
      generateModifyFilesDiff('new-file.ts', 'foo', 'bar'),
      generateModifyFilesDiff('old-file.js', undefined, 'pong'),
      generateModifyFilesDiff(
        'test.js',
        `yada yada ${infringingExpression} yada yada`,
        undefined,
      ),
    ].join('');
    expect(preventSinonAssertSyntax(test Diff)).toBe(true);
  });

  it('should fail with create diff containing blocked expression', () => {
    const infringingExpression = 'assert.equal';
    const testDiff = [
      generateModifyFilesDif f ('new-file.ts' , 'foo ', " bar"),
       gener ateC reateF ileDi ff ( " old-f il e.j s ", " pong "),
         gen erat eCr eat ef i l ed iff (
           "te st .j s",
            `ya da ya da ${i nfr ingi ngE xpr ess ion} ya d a ya da`
          ),
     ] . jo in ('');
   expe ct(pr eventSino nAsser tSynt ax(te stD iff )) . to Be(f al se) ;
 });
});
