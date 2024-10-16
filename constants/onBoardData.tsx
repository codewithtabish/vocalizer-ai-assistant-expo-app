/** @format */

import OnBoardingImageThree from '@/components/OnBoardingImageThree';
import OnBoardingImageTwo from '@/components/OnBoardingImageTwo';
import OnBoardingOne from '@/components/OnBoardSvgImage';
import { OnBoardingInterface } from '@/types';

export const onBoardData: OnBoardingInterface[] = [
  {
    id: 1,
    title: 'Welcome to Your Smart Assistant',
    subTitle: 'Discover a seamless way to interact with your digital world.',
    image: <OnBoardingOne />,
  },
  {
    id: 2,
    title: 'Voice-Powered Control',
    subTitle:
      'Manage tasks, set reminders, and get instant answers using your voice.',
    image: <OnBoardingImageTwo />,
  },
  {
    id: 3,
    title: 'Personalized Just for You',
    subTitle:
      'Experience an assistant that adapts to your preferences and needs.',
    image: <OnBoardingImageThree />,
  },
];
