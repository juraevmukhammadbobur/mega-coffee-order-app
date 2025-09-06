import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();

  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        title: '헛개리카노',
        price: 3900,
        description:
          '국내산 헛개수와 메가MGC커피만의 아메리카노를 더해 고소한 맛이 조화로운 블렌딩 커피',
        category: { hot: true, cold: false },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000737_1742396857693_ngpZI3EbLM.jpg',
      },
      {
        title: '(ICE)헛개리카노',
        price: 4300,
        description:
          '국내산 헛개수와 메가MGC커피만의 아메리카노를 더해 고소한 맛이 조화로운 블렌딩 커피',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000925_1742396965069_ekSqAIVc1L.jpg',
      },
      {
        title: '제로 부스트 에이드',
        price: 3500,
        description:
          '지친 현대인들에게 필요한 한 잔의 에너지! 타우린 1,000mg이 들어가 활력이 충전되는 에너지드링크맛 제로 칼로리 에이드',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000925_1742396965069_ekSqAIVc1L.jpg',
      },
      {
        title: '블루베리요거트스무디',
        price: 4000,
        description: '새콤달콤한 블루베리와 산뜻한 요거트가 만나 조화로운 스무디',
        category: { hot: true, cold: false },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320003134_1742398294871_z9t_oXfbA6.jpg',
      },
      {
        title: '왕메가카페라떼',
        price: 3500,
        description:
          '진한 에스프레소와 부드러운 우유가 어우러져 고소한 풍미를 완성한 메가MGC커피만의 왕메가사이즈 라떼',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320004326_1742399006488_yI4cvwXy6N.jpg',
      },
      {
        title: '왕메가사과유자',
        price: 3500,
        description:
          '애플티의 향긋함과 유자청의 상큼달콤함을 느낄 수 있는 메가MGC커피만의 왕메가사이즈 과일티',
        category: { hot: true, cold: false },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320004730_1742399250273_UPT0oK5fSb.jpg',
      },
      {
        title: '(HOT)디카페인 헛개리카노',
        price: 3800,
        description:
          '국내산 헛개수와 메가MGC커피만의 아메리카노를 더해 고소한 맛이 조화로운 디카페인 블렌딩 커피',
        category: { hot: true, cold: false },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250320002019_1742397619030_g5iEBTRsp7.jpg',
      },
      {
        title: '딸기라떼',
        price: 4500,
        description:
          '딸기과육이 풍부히 느껴지는 스테디 셀러 산뜻하고 달콤한 딸기가 가득해 부드러운 우유와 어우러져 더욱 기분 좋게 즐기는 아이스 라떼',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20250116001724_1736954244791_8qDsY0gj14.jpg',
      },
      {
        title: '(HOT)상큼 리치티',
        price: 4500,
        description:
          '리치, 라임, 망고스틴 베이스에 레드 커런트, 로즈마리를 더한 상큼한 과일티',
        category: { hot: true, cold: false },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20241106234009_1730904009276_fu30eMash6.jpg',
      },
      {
        title: '(ICE)상큼 리치티',
        price: 3500,
        description:
          '리치, 라임, 망고스틴 베이스에 레드 커런트, 로즈마리를 더한 상큼한 과일티',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20241106234210_1730904130583_8wBT7nkLrL.jpg',
      },
      {
        title: '할메가미숫커피',
        price: 3800,
        description: '곡물의 향이 고소한 미숫가루와 달달한 믹스커피의 황금비율 조합',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20240904234012_1725460812247_PgldrBOdUW.jpg',
      },
      {
        title: '왕메가초코',
        price: 3800,
        description:
          '부드러운 우유에 진한 초코소스가 어우러져 달콤하게 입맛을 깨우는 왕 메가 사이즈 초코음료',
        category: { hot: false, cold: true },
        image:
          'https://img.79plus.co.kr/megahp/manager/upload/menu/20240610114853_1717987733636_Uq2ZKYINXZ.jpg',
      },
    ],
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
