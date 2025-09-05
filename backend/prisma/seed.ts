import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: [
      {
        title: "헛개리카노 (Hutgaericano)",
        price: 3900,
        description:
          "국내산 헛개수와 메가MGC커피만의 아메리카노를 더해 고소한 맛이 조화로운 블렌딩 커피",
        category: { hot: true, cold: false },
        image:
          "https://img.79plus.co.kr/megahp/manager/upload/menu/20250320000737_1742396857693_ngpZI3EbLM.jpg",
      },
      {
        title: "아메리카노 (Americano)",
        price: 2000,
        description:
          "메가MGC커피의 스탠다드 아메리카노. 풍부한 바디감과 중후한 맛.",
        category: { hot: true, cold: true },
        image:
          "https://img.79plus.co.kr/megahp/manager/upload/menu/20240320000737_1710924457.jpg",
      },
      {
        title: "꿀 아메리카노 (Honey Americano)",
        price: 2700,
        description:
          "달콤한 사양벌꿀과 아메리카노의 쌉쌀함이 만난 완벽한 조합.",
        category: { hot: true, cold: true },
        image:
          "https://img.79plus.co.kr/megahp/manager/upload/menu/20240320000737_1710924458.jpg",
      },
      {
        title: "카페 라떼 (Caffe Latte)",
        price: 2900,
        description:
          "에스프레소와 우유가 만나 부드럽고 고소한 맛이 일품인 커피.",
        category: { hot: true, cold: true },
        image:
          "https://img.79plus.co.kr/megahp/manager/upload/menu/20240320000737_1710924459.jpg",
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
