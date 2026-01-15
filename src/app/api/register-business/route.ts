import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    
    const body = await request.json();
    
    const { 
      businessName, 
      businessCategory,
      businessSize,
      businessContact, 
      businessLocation, 
      instagramURL, 
      tikTokURL, 
      websiteURL 
    } = body;


    console.log("--- DATA RECEIVED ON SERVER ---");
    console.log("Name:", businessName);
    console.log("Category:", businessCategory);
    console.log("Size:", businessSize);
    console.log("Contact:", businessContact);
    console.log("Location:", businessLocation);
    console.log("Instagram:", instagramURL);
    console.log("TikTok:", tikTokURL);
    console.log("Website:", websiteURL);
    console.log("-------------------------------");

    
    return NextResponse.json({ message: "Data received successfully!" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to parse data" }, { status: 500 });
  }
}