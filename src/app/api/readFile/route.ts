import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const fileName = searchParams.get("fileName");

  if (!fileName) {
    return NextResponse.json({ error: "File name must be specified." }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'public', fileName);

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return NextResponse.json({ content: data });
  } catch (error) {
    return NextResponse.json({ error: "File not found or cannot be read." }, { status: 500 });
  }
}
