import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Footer from 'bundles/shared/components/Footer/Footer';

storiesOf('Footer', module)
  .add('View', () => (
    <Footer onChange={action('Footer.onChange')} />
  ));
