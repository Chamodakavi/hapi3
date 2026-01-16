import { NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase'; 

//Helper function to upload a File to Firebase Storage
async function uploadImageToStorage(file: File, folder: string): Promise<string> {
  if (!file) return "";

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${folder}/${Date.now()}_${file.name.replace(/\s/g, '_')}`;
  const bucket = storage.bucket();
  const fileRef = bucket.file(filename);

  await fileRef.save(buffer, {
    metadata: { contentType: file.type },
  });

  // Make the file public so we can get a URL (Optional: strictly depends on your security rules)
  await fileRef.makePublic();

  // Return the public URL
  return `https://storage.googleapis.com/${bucket.name}/${filename}`;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // 1. Extract Text Data
    const businessData = {
      businessName: formData.get('businessName') as string,
      businessCategory: formData.get('businessCategory') as string,
      businessSize: formData.get('businessSize') as string,
      businessContact: formData.get('businessContact') as string,
      businessLocation: formData.get('businessLocation') as string,
      instagramURL: formData.get('instagramURL') as string,
      tikTokURL: formData.get('tikTokURL') as string,
      websiteURL: formData.get('websiteURL') as string,
      createdAt: new Date().toISOString(), // Good practice to add timestamp
    };

    // 2. Extract Files
    const logoFile = formData.get('businessLogo') as File | null;
    const bannerFile = formData.get('businessBanner') as File | null;

    // 3. Upload Images (if they exist)
    let logoUrl = "";
    let bannerUrl = "";

    //Upload Logo
    if (logoFile && logoFile.size > 0) {
      console.log("Uploading Logo...");
      logoUrl = await uploadImageToStorage(logoFile, 'business_logos');
    }

    //Upload Banner
    if (bannerFile && bannerFile.size > 0) {
      console.log("Uploading Banner...");
      bannerUrl = await uploadImageToStorage(bannerFile, 'business_banners');
    }

    // 4. Save everything to Firestore
    const docRef = await db.collection('businesses').add({
      ...businessData,
      logoUrl: logoUrl,
      bannerUrl: bannerUrl,
    });

    console.log("Document written with ID: ", docRef.id);

    return NextResponse.json(
      { message: "Business registered successfully!", id: docRef.id }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("Firebase Error:", error);
    return NextResponse.json(
      { error: "Failed to save data" }, 
      { status: 500 }
    );
  }
}