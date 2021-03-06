import {
  nike1_1,
  nike1_2,
  nike2_1,
  nike2_2,
  nike3_1,
  nike3_2,
} from '../assets';
import { ProductData } from '../types';

export function getProducts(): ProductData[] {
  return [
    {
      title: "블레이저 미드 '77 빈티지",
      description:
        "나이키 블레이저 미드 '77 빈티지는 빈티지한 중창 마감 처리로 나이키 올드 스쿨 농구화의 느낌을 살렸으며, 마치 수년간 보관해온 듯한 룩을 연출합니다.",
      images: [nike1_1, nike1_2],
      imageAlt: '블레이저 미드',
    },
    {
      title: '에어맥스 95',
      description:
        '나이키 에어맥스 95에는 놀랄만큼 편안한 착화감과 편안함과 시선을 사로 잡는 스타일, 그리고 재생 소재가 어우러져 있습니다. 펠트,메쉬 그리고 인조 가죽의 풍부한 텍스처를 선보이며 클래식 러닝 DNA에 새로운 디자인을 선사합니다. 적당히 두툼한 디자인과 부드러운 에어 쿠셔닝, 그리고 나이키 그라인드 고무 밑창으로 트렌드를 선도합니다. 이 제품은 중량 기준 20% 이상 재생 소재로 제작했습니다.',
      images: [nike2_1, nike2_2],
      imageAlt: '블레이저 미드',
    },
    {
      title: '리액트 비전 3M',
      description:
        '나이키 리액트 비전은 나이키 리액트 기술과 더없이 폭신한 설포로 차원이 다른 편안함을 제공합니다. 다양한 텍스처와 과장된 비율이 3M™ 디테일과 결합되어 초현실적인 독특한 감각을 더해 줍니다.',
      images: [nike3_1, nike3_2],
      imageAlt: '블레이저 미드',
    },
  ];
}
