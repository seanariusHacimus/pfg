import localFont from 'next/font/local'

// ABC Diatype Cyrillic font configuration
export const abcDiatype = localFont({
  src: [
    
    {
      path: './abc/ABCDiatypeCyrillic-Thin-Trial.otf',
      weight: '100',
      style: 'thin',
    },
    {
      path: './abc/ABCDiatypeCyrillic-Light-Trial.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: './abc/ABCDiatypeCyrillic-Regular-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './abc/ABCDiatypeCyrillic-RegularItalic-Trial.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './abc/ABCDiatypeCyrillic-Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './abc/ABCDiatypeCyrillic-Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-abc',
})

// Sharp Grotesk font configuration (using PE-25 variants)
export const sharpGrotesk = localFont({
  src: [
    {
      path: './sharp/SharpGroteskPE-20Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './sharp/SharpGroteskPE-20Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './sharp/SharpGroteskPE-20Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './sharp/SharpGroteskPE-20Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './sharp/SharpGroteskPE-20Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-sharp',
}) 