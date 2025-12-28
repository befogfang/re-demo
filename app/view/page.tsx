import { SiteConfig } from '@/types';
import AgencyTemplate from '@/components/AgencyTemplate';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

async function getData(): Promise<SiteConfig> {
  try {
    const filePath = path.join(process.cwd(), 'site-data.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Fallback if file missing
    return {
      brandName: "Default Brand",
      themeColor: "#000000",
      headerBg: "#ffffff",
      heroTitle: "Welcome",
      heroSubtitle: "",
      heroImage: "",
      address: "Unknown",
      mapUrl: ""
    };
  }
}

export default async function Home() {
  const config = await getData();
  return <AgencyTemplate config={config} />;
}
