"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    const senderName = formData.get('senderName');
    const subject = formData.get('subject');

    if (!message || typeof message !== "string"){
        return {
            error: "message"
        }
    }

    if (!senderEmail || typeof senderEmail !== "string"){
        return {
            error: "message"
        }
    }
    if (!senderName || typeof senderName !== "string"){
        return {
            error: "message"
        }
    }
    if (!subject || typeof subject !== "string"){
        return {
            error: "message"
        }
    }

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'aliyasalmanova1@gmail.com',
        subject: subject,
        reply_to: senderEmail,
        text: `By: ${senderName} 
        Message: ${message}`
    });
}
