import { configure } from '@storybook/react';

function loadStroies() {
  require('../src/stories/InputStory');
}

configure(loadStories, module);
