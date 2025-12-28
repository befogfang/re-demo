import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { SiteConfig } from '@/types';

export async function POST(request: Request) {
    try {
        const data: SiteConfig = await request.json();

        // Path to site-data.json
        const filePath = path.join(process.cwd(), 'site-data.json');

        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save config:', error);
        return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
    }
}
