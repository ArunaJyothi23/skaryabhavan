import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const sitePath = path.join(process.cwd(), 'src', 'data', 'site_content.json');
    const stat = await fs.stat(sitePath);
    return NextResponse.json({
      success: true,
      version: stat.mtimeMs,
      updatedAt: stat.mtime.toISOString(),
    });
  } catch {
    return NextResponse.json({
      success: true,
      version: Date.now(),
      updatedAt: new Date().toISOString(),
    });
  }
}
