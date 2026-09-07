import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const sessions = await prisma.gameSession.findMany({
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: {
        roundLogs: {
          orderBy: { roundNumber: 'asc' },
        },
      },
    });
    return NextResponse.json({ success: true, data: sessions });
  } catch (error: any) {
    console.error('Failed to fetch game sessions:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch sessions' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      totalRounds,
      winnerId,
      teamAName,
      teamBName,
      teamAScore,
      teamBScore,
      teamAEmblem,
      teamBEmblem,
      roundLogs,
    } = body;

    const session = await prisma.gameSession.create({
      data: {
        totalRounds: totalRounds || 5,
        winnerId,
        teamAName: teamAName || 'Team A',
        teamBName: teamBName || 'Team B',
        teamAScore: teamAScore || 0,
        teamBScore: teamBScore || 0,
        teamAEmblem: teamAEmblem || 'scroll',
        teamBEmblem: teamBEmblem || 'monument',
        finishedAt: new Date(),
        roundLogs: {
          create: (roundLogs || []).map((log: any) => ({
            roundNumber: log.roundNumber,
            category: log.category,
            activeTeamId: log.activeTeamId,
            teamAQuestionId: log.teamAQuestionId || null,
            teamBQuestionId: log.teamBQuestionId || null,
            teamACorrect: Boolean(log.teamACorrect),
            teamBCorrect: Boolean(log.teamBCorrect),
            pointsAwardedA: log.pointsAwardedA || 0,
            pointsAwardedB: log.pointsAwardedB || 0,
          })),
        },
      },
      include: {
        roundLogs: true,
      },
    });

    return NextResponse.json({ success: true, data: session });
  } catch (error: any) {
    console.error('Failed to save game session:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save session' },
      { status: 500 }
    );
  }
}
