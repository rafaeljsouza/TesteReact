import { NextResponse } from "next/server";

// Define the Product type
export type ProductType = {
  name: string;
  model: string;
  treadwear: number;
  traction: string;
  temperature: string;
  pattern: string;
  loadIndex: string;
  speedRating: string;
  noise: number;
  rollingResistance: string;
  wetGrip: string;
  cars: string[];
};

export async function GET() {
  const products: ProductType[] = [
    {
      name: "PNEU 205/65R15 94V RXMOTION H12 ROADX",
      model: "RXMOTION H12",
      treadwear: 360,
      traction: "A",
      temperature: "A",
      pattern: "ASSIMÉTRICO",
      loadIndex: "94 (670 Kg)",
      speedRating: "V (240km/h)",
      noise: 72,
      rollingResistance: "c",
      wetGrip: "c",
      cars: ["Chevrolet Onix", "Hyundai HB20", "Volkswagen Gol"],
    },
    {
      name: "PNEU 225/50R17 98W RXMOTION U11 ROADX",
      model: "RXMOTION U11",
      treadwear: 280,
      traction: "AA",
      temperature: "A",
      pattern: "ASSIMÉTRICO",
      loadIndex: "98 (750 Kg)",
      speedRating: "W (270km/h)",
      noise: 72,
      rollingResistance: "c",
      wetGrip: "e",
      cars: ["Chevrolet Cruze", "Ford Fusion", "Honda Civic"],
    },
    {
      name: "PNEU 235/50R18 101W RXMOTION U11 ROADX",
      model: "RXMOTION U11",
      treadwear: 280,
      traction: "AA",
      temperature: "A",
      pattern: "ASSIMÉTRICO",
      loadIndex: "101 (825 Kg)",
      speedRating: "W (270km/h)",
      noise: 72,
      rollingResistance: "c",
      wetGrip: "b",
      cars: ["Audi A4", "BMW Série 3", "Mercedes-Benz Classe C"],
    },
    {
      name: "PNEU 185/55R15 82V RXMOTION H12 ROADX",
      model: "RXMOTION H12",
      treadwear: 360,
      traction: "A",
      temperature: "A",
      pattern: "ASSIMÉTRICO",
      loadIndex: "82 (475 Kg)",
      speedRating: "V (240km/h)",
      noise: 72,
      rollingResistance: "c",
      wetGrip: "e",
      cars: ["Chevrolet Prisma", "Fiat Argo", "Volkswagen Polo"],
    },
    {
      name: "PNEU 235/55R18 104W RXQUEST SU01 ROADX",
      model: "RXQUEST SU01",
      treadwear: 280,
      traction: "AA",
      temperature: "A",
      pattern: "ASSIMÉTRICO",
      loadIndex: "104 (900 Kg)",
      speedRating: "W (270km/h)",
      noise: 72,
      rollingResistance: "b",
      wetGrip: "e",
      cars: ["Audi Q3", "BMW X1", "Mercedes-Benz GLA"],
    },
  ];

  return NextResponse.json(products);
}
