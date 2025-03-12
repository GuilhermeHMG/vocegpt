import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function POST(req: Request) {
    const { text } = await req.json();

    const userInfo = await prisma.userInfo.findFirst({
        where: {
            name: 'Guilherme',
        },
    });

    if (!userInfo) {
        await delay(1000);
        return NextResponse.json({ message: 'Usuário não encontrado.' }, { status: 404 });
    }

    const lowerCaseText = text.trim().toLowerCase();
    if (
        lowerCaseText.includes('quem é o guilherme') || 
        lowerCaseText.includes('quem é guilherme') || 
        lowerCaseText.includes('me defina quem é o guilherme') || 
        lowerCaseText.includes('sobre guilherme') ||
        lowerCaseText.includes('sobre o guilherme') ||
        lowerCaseText.includes('fale sobre o guilherme') ||
        lowerCaseText.includes('quem é ele')
    ) {
        await delay(1000); 
        return NextResponse.json({ answer: userInfo.bio });
    }

    if (
        lowerCaseText.includes('quantos anos o guilherme ele tem') || 
        lowerCaseText.includes('quantos anos ele tem') || 
        lowerCaseText.includes('quantos anos') || 
        lowerCaseText.includes('anos')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.age });
    }

    if (
        lowerCaseText.includes('quais são as habilidades do guilherme') || 
        lowerCaseText.includes('quais são as skills do guilherme') || 
        lowerCaseText.includes('habilidades do guilherme') ||
        lowerCaseText.includes('skills do guilherme')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.skills });
    }

    if (
        lowerCaseText.includes('qual é o github do guilherme') ||
        lowerCaseText.includes('qual é o seu github') ||
        lowerCaseText.includes('qual é o endereço do seu github') ||
        lowerCaseText.includes('github')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.github });
    }

    if (
        lowerCaseText.includes('onde o guilherme mora')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.address });
    }

    if (
        lowerCaseText.includes('qual é a data do nascimento do guilherme') ||
        lowerCaseText.includes('quando ele nasceu') ||
        lowerCaseText.includes('nascimento')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.year_of_birth });
    }

    if (
        lowerCaseText.includes('conte-me sobre a vida profissional do guilherme') ||
        lowerCaseText.includes('como é sua vida profissional') ||
        lowerCaseText.includes('vida profissional')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.professional });
    }

    if (
        lowerCaseText.includes('conte-me sobre a vida pessoal do guilherme') ||
        lowerCaseText.includes('como é sua vida pessoal') ||
        lowerCaseText.includes('vida pessoal')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.personal });
    }

    if (
        lowerCaseText.includes('por que querer trabalhar na embracon')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.justification });
    }

    if (
        lowerCaseText.includes('mostre-me as perguntas')
    ) {
        await delay(1000);
        return NextResponse.json({ answer: userInfo.questions });
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text },
                    ],
                },
            ],
        }),
    });

    const data = await response.json();
    await delay(1000);
    return NextResponse.json(data);
}
