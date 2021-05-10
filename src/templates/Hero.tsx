import React from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <a href="https://my.crusty.app">Sign in</a>
        </li>
        <li>
          <a href="https://my.crusty.app/?signup">
            <Button>Get started</Button>
          </a>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={(
          <>
            {'Be more accessible to your\n'}
            <span className="text-primary-500">Potential Customers</span>
          </>
        )}
        description="Let them call you directly from your website."
        button={(
          <a href="https://my.crusty.app/signup">
            <Button xl>Get started</Button>
          </a>
        )}
      />
    </Section>
  </Background>
);

export { Hero };
