"use client";

import React, { useState, useEffect } from 'react';
import AgencyTemplate from '@/components/AgencyTemplate';
import { SiteConfig } from '@/types';
import { QRCodeSVG } from 'qrcode.react';

const THEME_PRESETS = [
    "#137fec", // Default Blue
    "#ec1313", // Red
    "#13ec7f", // Green
    "#8b13ec", // Purple
    "#ec8b13", // Orange
];

const defaultConfig: SiteConfig = {
    brandName: "",
    themeColor: "#137fec",
    headerBg: "#ffffff",
    heroTitle: "",
    heroSubtitle: "",
    heroImage: "",
    address: "",
    mapUrl: ""
};

export default function BuilderPage() {
    const [config, setConfig] = useState<SiteConfig>(defaultConfig);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showQr, setShowQr] = useState(false);
    const [origin, setOrigin] = useState('');

    // Fetch initial data
    useEffect(() => {
        setOrigin(window.location.origin);
        fetch('/api/config')
            .then(res => res.json())
            .then(data => {
                setConfig(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleChange = (field: keyof SiteConfig, value: string) => {
        setConfig(prev => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', { method: 'POST', body: formData });
            const data = await res.json();
            if (data.success) {
                handleChange('heroImage', data.url);
            } else {
                alert('Upload failed');
            }
        } catch (err) {
            alert('Upload error');
        }
    };

    const saveConfig = async () => {
        setSaving(true);
        try {
            await fetch('/api/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
            setShowQr(true);
        } catch (err) {
            alert('Failed to save');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-10">Loading Builder...</div>;

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
            {/* LEFT: Controls */}
            <div className="w-1/3 min-w-[350px] bg-white border-r border-gray-200 overflow-y-auto p-6 shadow-xl z-10">
                <h1 className="text-2xl font-black mb-6 text-gray-800 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">build</span>
                    Page Builder
                </h1>

                <div className="space-y-6">
                    {/* Brand */}
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Brand Name</label>
                        <input
                            value={config.brandName}
                            onChange={(e) => handleChange('brandName', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Colors */}
                    <div className="space-y-4 border-t pt-4 border-gray-100">
                        <label className="text-xs font-bold text-gray-500 uppercase block">Theme Color</label>
                        <div className="flex gap-3">
                            {THEME_PRESETS.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => handleChange('themeColor', color)}
                                    className={`w-10 h-10 rounded-full border-2 transition-all ${config.themeColor === color ? 'border-gray-900 scale-110 shadow-md' : 'border-transparent hover:scale-105'}`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        {/* Header Bg Simple Toggle */}
                        <div className="mt-4">
                            <label className="text-xs font-bold text-gray-500 uppercase block mb-2">Header Theme</label>
                            <div className="flex gap-2">
                                <button onClick={() => handleChange('headerBg', '#ffffff')} className={`px-4 py-2 text-xs font-bold rounded border ${config.headerBg === '#ffffff' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Light</button>
                                <button onClick={() => handleChange('headerBg', '#1a2632')} className={`px-4 py-2 text-xs font-bold rounded border ${config.headerBg === '#1a2632' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Dark</button>
                            </div>
                        </div>
                    </div>



                    {/* Hero */}
                    <div className="space-y-2 border-t pt-4 border-gray-100">
                        <label className="text-xs font-bold text-gray-500 uppercase">Hero Title (HTML Supported)</label>
                        <textarea
                            rows={3}
                            value={config.heroTitle}
                            onChange={(e) => handleChange('heroTitle', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Hero Subtitle</label>
                        <textarea
                            rows={2}
                            value={config.heroSubtitle}
                            onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Hero Image</label>
                        <input type="file" onChange={handleImageUpload} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        {config.heroImage && <img src={config.heroImage} className="w-full h-20 object-cover rounded mt-2 border border-gray-200" />}
                    </div>

                    {/* Address */}
                    <div className="space-y-2 border-t pt-4 border-gray-100">
                        <label className="text-xs font-bold text-gray-500 uppercase">Office Address</label>
                        <input
                            value={config.address}
                            onChange={(e) => handleChange('address', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Google Maps Link</label>
                        <input
                            value={config.mapUrl}
                            onChange={(e) => handleChange('mapUrl', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="https://maps.google.com/..."
                        />
                    </div>


                    <button
                        onClick={saveConfig}
                        disabled={saving}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 mt-8"
                    >
                        {saving ? 'Saving...' : 'Save & Publish'}
                        <span className="material-symbols-outlined">save</span>
                    </button>
                </div>
            </div>

            {/* RIGHT: Live Preview */}
            <div className="flex-1 bg-gray-200 p-8 overflow-y-auto flex justify-center">
                <div className="w-full max-w-[1280px] bg-white shadow-2xl min-h-screen origin-top transform scale-[.9] md:scale-100 transition-transform">
                    <AgencyTemplate config={config} />
                </div>
            </div>

            {/* Success Modal */}
            {showQr && (
                <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center space-y-6">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <span className="material-symbols-outlined text-4xl">check</span>
                        </div>
                        <h2 className="text-2xl font-bold">Site Published!</h2>
                        <p className="text-gray-500">Scan this code to view the live site on your mobile.</p>

                        <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block">
                            <QRCodeSVG value={`${origin}/view`} size={180} />
                        </div>

                        <div className="flex gap-3">
                            <button onClick={() => setShowQr(false)} className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg">Keep Editing</button>
                            <a href="/view" target="_blank" className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center">Open Live Site</a>
                        </div>
                    </div>
                </div>
            )}

            {/* Font for Builder Icons */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </div>
    );
}
