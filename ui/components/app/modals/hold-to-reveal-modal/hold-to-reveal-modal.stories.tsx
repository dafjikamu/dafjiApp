import { useArgs } from '@storybook/client-api';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Button } from '../../../component-library';
import HoldToRevealModal from './hold-to-reveal-modal';

export default {
  title: 'Components/App/HoldToRevealModal',
  component: HoldToRevealModal,
  argTypes: {
    isShowingModal: { control: 'boolean' },
  },
} as Meta<typeof HoldToRevealModal>;

export const DefaultStory: StoryFn<typeof HoldToRevealModal> = () => {
  const [{ isShowing }, updateArgs] = useArgs();
  return (
    <>
      <Button onClick={() => updateArgs({ isShowing })}>
        Open modal
      </Button>
      {isShowing && (
        <HoldToRevealModal
          isOpen={isShowing}
          onClose={() => updateArgs({ isShowing })}
        />
      )}
    </>
  );
};

DefaultStory.storyName = 'Default';
