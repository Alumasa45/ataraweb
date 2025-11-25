// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail recommended)
// 4. Create an email template with these variables:
//    - {{from_name}} - Client's name
//    - {{phone}} - Client's phone number
//    - {{membership}} - Selected membership
//    - {{reference_number}} - Payment reference
//    - {{message}} - Full message
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the placeholder values in BookNow.tsx

export const emailConfig = {
  serviceId: 'service_atara', // Replace with your EmailJS service ID
  templateId: 'template_booking', // Replace with your EmailJS template ID
  publicKey: 'your_public_key' // Replace with your EmailJS public key
};

// Example email template:
/*
Subject: New Booking Request - Atara Studio

Hello,

You have received a new booking request:

Name: {{from_name}}
Phone: {{phone}}
Membership/Service: {{membership}}
Payment Reference: {{reference_number}}

Message:
{{message}}

Please contact the client to confirm their booking.

Best regards,
Atara Studio Website
*/