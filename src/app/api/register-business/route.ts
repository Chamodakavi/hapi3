import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    
    const formData = await request.formData();

    
    const businessName = formData.get('businessName');
    const businessCategory = formData.get('businessCategory');
    const businessSize = formData.get('businessSize');
    const businessContact = formData.get('businessContact');
    const businessLocation = formData.get('businessLocation');
    const instagramURL = formData.get('instagramURL');
    const tikTokURL = formData.get('tikTokURL');
    const websiteURL = formData.get('websiteURL');
    
    
    const businessLogo = formData.get('businessLogo');     
    const businessBanner = formData.get('businessBanner'); 

    console.log("--- DATA RECEIVED ON SERVER ---");
    console.log("Name:", businessName);
    console.log("Category:", businessCategory);
    console.log("Size:", businessSize);
    console.log("Contact:", businessContact);
    console.log("Location:", businessLocation);
    console.log("Instagram:", instagramURL);
    console.log("TikTok:", tikTokURL);
    console.log("Website:", websiteURL);
    
    
    if (businessLogo && typeof businessLogo === 'object' && 'name' in businessLogo) {
       console.log("Logo File:", (businessLogo as File).name, (businessLogo as File).size, "bytes");
    } else {
       console.log("Logo:", "No file uploaded");
    }

    if (businessBanner && typeof businessBanner === 'object' && 'name' in businessBanner) {
       console.log("Banner File:", (businessBanner as File).name, (businessBanner as File).size, "bytes");
    } else {
       console.log("Banner:", "No file uploaded");
    }

    console.log("-------------------------------");

    return NextResponse.json({ message: "Data received successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Server Error:", error); 
    return NextResponse.json({ error: "Failed to parse data" }, { status: 500 });
  }
}