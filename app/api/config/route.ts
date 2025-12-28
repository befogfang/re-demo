import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { SiteConfig } from '@/types';

const filePath = path.join(process.cwd(), 'site-data.json');

export async function GET() {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({}, { status: 404 });
    }
}

export async function POST(request: Request) {
    try {
        const data: SiteConfig = await request.json();
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save config:', error);
        return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
    }
}
