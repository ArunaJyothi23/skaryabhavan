import { NextRequest, NextResponse } from 'next/server';

const VALID_PASSCODES = [
  process.env.ADMIN_PASSWORD,
  '0k07nvYbQy82',
  'eventsnkab',
  'admin123',
  'skaryabhavan2026',
].filter(Boolean) as string[];

export async function POST(request: NextRequest) {
  try {
    const { passcode } = await request.json();

    if (!passcode) {
      return NextResponse.json(
        { success: false, error: 'Passcode is required' },
        { status: 400 }
      );
    }

    const isValid = VALID_PASSCODES.includes(passcode.trim());

    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid management passcode' },
        { status: 401 }
      );
    }

    const sessionToken = `ab_auth_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    return NextResponse.json({
      success: true,
      message: 'Authentication successful',
      token: sessionToken,
      user: {
        role: 'admin',
        brand: 'Arya Bhavan London',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
