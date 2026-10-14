import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const mediaList: { url: string; name: string; folder: string }[] = [];

    const folders = [
      { dir: path.join(process.cwd(), 'public', 'images', 'uploads'), prefix: '/images/uploads', folder: 'Uploads' },
      { dir: path.join(process.cwd(), 'public', 'images', 'catering'), prefix: '/images/catering', folder: 'Catering' },
      { dir: path.join(process.cwd(), 'public', 'images', 'migrated'), prefix: '/images/migrated', folder: 'Migrated' },
    ];

    for (const item of folders) {
      try {
        const files = await fs.readdir(/*turbopackIgnore: true*/ item.dir);
        for (const file of files) {
          if (/\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file)) {
            mediaList.push({
              url: `${item.prefix}/${file}`,
              name: file,
              folder: item.folder,
            });
          }
        }
      } catch {}
    }

    return NextResponse.json({
      success: true,
      count: mediaList.length,
      media: mediaList,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to list media' },
      { status: 500 }
    );
  }
}
