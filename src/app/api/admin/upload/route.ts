import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided in form data' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Sanitize filename
    const originalName = file.name || 'uploaded_image.jpg';
    const ext = path.extname(originalName) || '.jpg';
    const cleanBase = path
      .basename(originalName, ext)
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      .toLowerCase();
    const filename = `${cleanBase}_${Date.now()}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'images', 'uploads');
    try {
      await fs.mkdir(uploadDir, { recursive: true });
    } catch {}

    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    const publicUrl = `/images/uploads/${filename}`;

    return NextResponse.json({
      success: true,
      url: publicUrl,
      filename,
      size: file.size,
      type: file.type,
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to upload asset' },
      { status: 500 }
    );
  }
}
