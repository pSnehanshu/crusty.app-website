import React from 'react';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Don't keep your customers in confusion, let them call you up."
      subtitle="Start your Free Trial."
      button={(
        <a href="https://my.crusty.app/signup">
          <Button>Embed widget</Button>
        </a>
      )}
    />
  </Section>
);

export { Banner };
