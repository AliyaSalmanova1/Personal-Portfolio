"use server"

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

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

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'aliyasalmanova1@gmail.com',
        subject: 'Hello World',
        reply_to: senderEmail,
        text: message
    });
}
