import { NextResponse } from "next/server";

export async function GET() {

  const products = [
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
      wetGrip: "c"
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
      wetGrip: "e"
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
      wetGrip: "b"
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
      wetGrip: "e"
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
      wetGrip: "e"
    },
  ];

  return NextResponse.json(products);
}