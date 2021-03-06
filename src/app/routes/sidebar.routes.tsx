import React from 'react';

import { PATH } from '@/app/constants';
import {
  Buttons,
  Menus,
  Texts,
  CDPlayerPage,
  ExpandingCardsPage,
  NikeShoesScrollPage,
} from '@/app/pages';
import { MenuItem } from '@/components';

export const sidebarMenu: MenuItem[] = [
  {
    label: 'Components',
    icon: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632069098/noticon/hhtfggl2uroruklhyh1b.png',
    subMenu: [
      { label: 'Buttons', path: PATH.BUTTONS, element: () => <Buttons /> },
      { label: 'Menus', path: PATH.MENUS, element: () => <Menus /> },
      { label: 'Texts', path: PATH.TEXTS, element: () => <Texts /> },
    ],
  },
  {
    label: 'Pages',
    icon: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566952480/noticon/fyec5eye4l6hyxlpfxze.png',
    subMenu: [
      {
        label: 'IU CD 플레이어',
        path: PATH.CDPLAYER,
        element: () => <CDPlayerPage />,
      },
      {
        label: 'Expanding Cards',
        path: PATH.EXPANDING_CARDS,
        element: () => <ExpandingCardsPage />,
      },
      {
        label: 'Nike Shoes Scroll',
        path: PATH.NIKE_SHOES_SCROLL,
        element: () => <NikeShoesScrollPage />,
      },
    ],
  },
];
