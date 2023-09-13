import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryParams = new URLSearchParams(url.search);
  console.log(queryParams);
  const userProvidedPriceParam = queryParams.get('price');

  if (userProvidedPriceParam === null) {
    return NextResponse.json({ error: 'Price parameter missing' });
  }

  const userProvidedPrice = parseFloat(userProvidedPriceParam);

  const ratios = await prisma.ratio.findMany({
    where: {
      price: {
        lte: userProvidedPrice,
      },
    },
    include: { bank: { select: { name: true, maxp: true, minp: true } } },
  });

  if (ratios.length > 0) {
    const filteredRatiosWithBankNames = ratios
      .filter(
        (ratio) =>
          userProvidedPrice >= ratio.bank.minp && userProvidedPrice <= ratio.bank.maxp
      )
      .map((ratio) => ({
        bankName: ratio.bank.name,
        bankMinP: ratio.bank.minp,
        bankMaxP: ratio.bank.maxp,
        ratio: ratio.ratio,
        price: ratio.price,
      }));

    if (filteredRatiosWithBankNames.length > 0) {
      
      return NextResponse.json({ ratios: filteredRatiosWithBankNames });
    }
  }

  return NextResponse.json({ error: 'No matching ratios found' });
}
