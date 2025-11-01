import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({ message: 'Contact API is working' });
}

export async function POST(request: Request) {
  console.log('API route called');
  try {
    const body = await request.json();
    console.log('Form data received:', body);

    const {
      name,
      companyName,
      email,
      businessType
    } = body;

    // Basic validation
    if (!name || !email || !companyName || !businessType) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin notification email
    const adminMailOptions = {
      from: `"Nisha Roadways" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Business Inquiry from ${companyName}`,
      text: `
        New Business Contact Form Submission
        -----------------------------------
        Name: ${name}
        Company: ${companyName}
        Email: ${email}
        Business Type: ${businessType}
        
        This inquiry was submitted through the Nisha Roadways VCard contact form.
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px;">Nisha Roadways</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New Business Inquiry</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Company:</strong> ${companyName}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Business Type:</strong> ${businessType}</p>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; border-left: 4px solid #2196f3;">
              <p style="margin: 0; color: #1976d2;"><strong>Source:</strong> VCard Contact Form</p>
            </div>
          </div>
        </div>
      `,
    };

    // Thank you email to user
    const thankYouMailOptions = {
      from: `"Nisha Roadways" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank You for Contacting Nisha Roadways - ${companyName}`,
      text: `
        Dear ${name},

        Thank you for contacting Nisha Roadways! We have received your business inquiry and appreciate your interest in our logistics services.

        Your Details:
        Company: ${companyName}
        Business Type: ${businessType}

        Our team will review your inquiry and get back to you within 24-48 hours with information about how we can support your ${businessType.toLowerCase()} business needs.

        Best regards,
        Nisha Roadways Team
        Email: business@nisharoadways.com
        Phone: +91 22 4163 222
      `,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
          <div style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
              <h1 style="margin: 0; font-size: 28px;">Nisha Roadways</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Trusted Logistics Partner</p>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="color: #333; margin-top: 0;">Thank You for Your Interest!</h2>
              
              <p>Dear <strong>${name}</strong>,</p>
              
              <p>Thank you for reaching out to Nisha Roadways! We have successfully received your business inquiry and appreciate your interest in our comprehensive logistics services.</p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #333; margin-top: 0;">Your Inquiry Details:</h3>
                <p><strong>Company:</strong> ${companyName}</p>
                <p><strong>Business Type:</strong> ${businessType}</p>
              </div>
              
              <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; border-left: 4px solid #4caf50;">
                <h3 style="color: #2e7d32; margin-top: 0;">The Way Forward</h3>
                <ol style="color: #333; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>Someone from our Sales/ Marketing will contact you to understand more on your enquiry.</li>
                  <li>We shall update you with all kind of services that we provide and also offer you the best one that suits your requirement.</li>
                  <li>We shall offer you the most competitive pricing, time required for completion and other related action plan from our side.</li>
                </ol>
              </div>
              
              <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #f57c00; margin-top: 0;">Our Services Include (Within India)</h3>
                <ol style="color: #333; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>Road Transportation of any type and size, including odd dimensions</li>
                  <li>Movement of Empty Containers and Tanks</li>
                  <li>Movement of Import and Export Containers</li>
                  <li>Movement of Over Dimension Cargo and Structures</li>
                  <li>Making Empty Containers available for your cargo as per your need on pre agreed rates and timelines</li>
                  <li>Making Specialized Cargo Movements with Double Drivers and Escort Facility</li>
                  <li>Movement of High Value Items</li>
                  <li>Movement of Solar Panels</li>
                  <li>Container buying and selling assistance</li>
                  <li>Other Misc. Services, ancillary to main business</li>
                </ol>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; margin: 0;">Need immediate assistance?</p>
                <p style="color: #333; font-weight: bold; margin: 5px 0;">📞 +91 22 4163 222 | 📱 +91 98 2042 0924</p>
                <p style="color: #666; font-size: 14px;">📧 business@nisharoadways.com</p>
                <p style="color: #666; font-size: 12px; margin-top: 15px;">
                  909, Mayuresh cosmos, plot no 37, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    // Send data to Google Sheets
    try {
      const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
      
      if (GOOGLE_APPS_SCRIPT_URL) {
        const sheetsResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            companyName: companyName,
            email: email,
            businessType: businessType,
            source: 'VCard Contact Form'
          }),
        });
        
        const sheetsResult = await sheetsResponse.json();
        console.log('Google Sheets response:', sheetsResult);
      } else {
        console.warn('Google Apps Script URL not configured');
      }
    } catch (sheetError) {
      console.error('Error sending data to Google Sheets:', sheetError);
      // Don't fail the entire request if Google Sheets fails
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your inquiry! We will contact you soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}