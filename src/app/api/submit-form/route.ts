import { NextRequest, NextResponse } from 'next/server';
import { getSiteContent } from '@/lib/firebaseService';

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const siteContent = await getSiteContent();

    const recipientEmail = siteContent?.web3forms?.email || 'eventsnkab@gmail.com';
    const web3formsKey = siteContent?.web3forms?.accessKey || process.env.WEB3FORMS_ACCESS_KEY;

    let emailSent = false;

    // 1. Dispatch Email via Web3Forms API if configured
    if (web3formsKey) {
      try {
        const web3Res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Arya Bhavan Booking Request: ${data.serviceType || 'Inquiry'} from ${data.name}`,
            to: recipientEmail,
            ...data
          }),
        });
        const web3Json = await web3Res.json();
        if (web3Json.success) emailSent = true;
      } catch (e) {
        console.error('Web3Forms dispatch error:', e);
      }
    }

    // 2. Persistent Lead Archival in Firestore Database if configured
    if (API_KEY && PROJECT_ID) {
      try {
        const enquiryId = `enquiry_${Date.now()}`;
        await fetch(`${FIRESTORE_BASE}/enquiries/${enquiryId}?key=${API_KEY}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: {
              name: { stringValue: data.name || '' },
              email: { stringValue: data.email || '' },
              phone: { stringValue: data.phone || '' },
              serviceType: { stringValue: data.serviceType || '' },
              dateOfEvent: { stringValue: data.dateOfEvent || '' },
              noOfPax: { stringValue: String(data.noOfPax || '') },
              message: { stringValue: data.message || '' },
              createdAt: { stringValue: new Date().toISOString() }
            }
          })
        });
      } catch (e) {
        console.error('Firestore archive error:', e);
      }
    }

    return NextResponse.json({ success: true, emailSent, message: 'Inquiry received successfully' });
  } catch (error: any) {
    console.error('Submit form error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
