import React from 'react';

import Image from 'next/image';

// import { Config } from '../utils/Config';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <Image src="/assets/images/crusty.app.png" width={200} height={50} />
    </span>
  );
};

export { Logo };
