'use client';

import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, Loader2, X, Check } from 'lucide-react';

interface ImageUploadFieldProps {
  label?: string;
  value: string;
  onChange: (url: string) => void;
  recommendation?: string;
  className?: string;
}

export default function ImageUploadField({
  label,
  value,
  onChange,
  recommendation,
  className = '',
}: ImageUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setImgError(false);
    setUploadedSuccess(false);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        onChange(data.url);
        setUploadedSuccess(true);
        setTimeout(() => setUploadedSuccess(false), 3000);
      } else {
        alert(data.error || 'Failed to upload image. Please try again.');
      }
    } catch (err: any) {
      alert('Upload failed: ' + (err.message || 'Network error'));
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <div className="flex justify-between items-center">
          <label className="block text-xs font-semibold text-slate-700">{label}</label>
          {recommendation && (
            <span className="text-[10px] text-slate-400">{recommendation}</span>
          )}
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Visual Preview Box */}
        <div className="relative w-14 h-14 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden shrink-0 flex items-center justify-center shadow-2xs group">
          {value && !imgError ? (
            <img
              src={value}
              alt="Preview"
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
              onLoad={() => setImgError(false)}
            />
          ) : (
            <div className="text-slate-400 flex flex-col items-center justify-center p-1 text-center">
              <ImageIcon className="w-5 h-5 text-slate-300" />
              <span className="text-[9px] text-slate-400 font-mono">No Img</span>
            </div>
          )}

          {uploading && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex items-center justify-center text-white">
              <Loader2 className="w-5 h-5 animate-spin text-orange-400" />
            </div>
          )}
        </div>

        {/* URL Text Input & Upload Button */}
        <div className="flex-1 space-y-1">
          <div className="flex gap-2">
            <input
              type="text"
              value={value || ''}
              onChange={(e) => {
                setImgError(false);
                onChange(e.target.value);
              }}
              placeholder="/images/... or https://..."
              className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-orange-500 font-mono"
            />

            {/* Hidden native file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif"
              className="hidden"
            />

            {/* Upload Button */}
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
              className="bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shrink-0 transition-colors shadow-2xs cursor-pointer active:scale-95"
            >
              {uploading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-orange-400" />
                  <span>Uploading...</span>
                </>
              ) : uploadedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Uploaded!</span>
                </>
              ) : (
                <>
                  <Upload className="w-3.5 h-3.5 text-orange-400" />
                  <span>Upload File</span>
                </>
              )}
            </button>

            {value && (
              <button
                type="button"
                onClick={() => onChange('')}
                title="Clear image"
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <p className="text-[10px] text-slate-400">
            Upload any image (.jpg, .png, .webp) from your computer or paste an asset path.
          </p>
        </div>
      </div>
    </div>
  );
}
