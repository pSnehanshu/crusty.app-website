import React from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Telephony suite for your website"
    description="Just place the code snippet in your website source code, and you're good to go."
  >
    <VerticalFeatureRow
      title="Increase conversion"
      description="Visitors may come and leave if they get confused, unless you give them an instant way to reach out to you. What's better than good old voice? They can just ring you up from your website."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="People hate sticky salesmen"
      description="You visitors will feel more confident to call you because they aren't surrendering their contact details beforehand. It's a good deal for them."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Take help from your team"
      description="Everyone in your team will get an account, so that when you're not available, they can answer the calls. And this has the added advantage of being able to attend more calls at the same time."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
