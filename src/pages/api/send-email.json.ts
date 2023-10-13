import type { APIRoute } from "astro"
import { createTransport } from "nodemailer"

const recieverEmail = import.meta.env.PERSONAL_EMAIL
const hostEmail = import.meta.env.SENDER_EMAIL
const hostPassword = import.meta.env.SENDER_PASSWORD

const validEmailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
const invalidNameRegex = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\/<>?:;|=.,]{1,20}$/gm

export const post: APIRoute = async ({ request }) => {
  if (request.headers.get("Content-Type") === "application/json") {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!email || !message) {
      return new Response(JSON.stringify({ message: "Must provide email and message!" }), {
        status: 400
      })
    }

    if (!validEmailRegex.test(email)) {
      return new Response(JSON.stringify({ message: "Email is invalid!" }), {
        status: 400
      })
    }

    if (email.length > 100) {
      return new Response(JSON.stringify({ message: "Email is too long!" }), {
        status: 400
      })
    }

    if (message.length > 500) {
      return new Response(JSON.stringify({ message: "Message is too long!" }), {
        status: 400
      })
    }

    if (name && invalidNameRegex.test(name)) {
      return new Response(JSON.stringify({ message: "Name is invalid!" }), {
        status: 400
      })
    }

    try {
      const { messageId } = await sendEmail(name, email, message)
      if (!messageId) throw new Error("Email could not be sent!")

      return new Response(
        JSON.stringify({ message: "Email successfully sent!" }),
        { status: 200 }
      )
    } catch (error: any) {
      return new Response(JSON.stringify({ message: error.message }), {
        status: 500
      })
    }
  }
  return new Response(null, { status: 400 })
}

async function sendEmail(senderName: string, senderEmail: string, message: string) {
  const transporter = createTransport({
    host: "smtp.jesubohrdev.com",
    port: 587,
    auth: {
      user: hostEmail,
      pass: hostPassword
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOptions = {
    from: hostEmail,
    to: recieverEmail,
    subject: `Contact request from ${senderName}`,
    text: `
    You have a new contact request from ${senderName}:
    Email: ${senderEmail}
    Message: ${message}
    `
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return info
  } catch (error: any) {
    throw new Error("Email could not be sent!")
  }
}
