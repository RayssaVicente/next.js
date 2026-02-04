import { NextRequest, NextResponse } from "next/server";

let idSequence = 0;
const planets = [
  {
    id: 1,
    name: "Mercúrio",
    description: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias',
    imagemUrl: 'https://www.infoescola.com/wp-content/uploads/2008/04/planeta-merc%C3%BArio_60584068.jpg'
  },
  {
    id: 2,
    name: 'Vênus',
    description: 'Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do sol',
    imagemUrl: 'https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/03/venus-mariner-10-pia23791-fig2.jpg?w=1096&h=1096&fit=clip&crop=faces%2Cfocalpoint'

  }
]

export function GET(req: NextRequest){
  return NextResponse.json(planets)
}

export async function POST(req: NextRequest) {
  const {name, description,imagemUrl} = await req.json()

  const newPlanet = {
    id: idSequence++,
    name: name,
    description: description,
    imagemUrl: imagemUrl
  }

  planets.push(newPlanet);

  return NextResponse.json(newPlanet, {status: 201})
}