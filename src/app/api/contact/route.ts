import { NextResponse } from "next/server";
import { z } from "zod";

// Define schema for contact form input validation
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate inputs using Zod
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const errors = validation.error.format();
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // Log the message receipt (e.g. standard output console logs)
    console.log(`Received contact form submission:`, { name, email, message });

    // =========================================================================
    // FUTURE POSTGRESQL / PRISMA INTEGRATION BLUEPRINT
    // =========================================================================
    // When you decide to connect to PostgreSQL database in the future:
    //
    // 1. Uncomment the Prisma import (run: npm i @prisma/client, npx prisma db push)
    //    import { PrismaClient } from "@prisma/client";
    //    const prisma = new PrismaClient();
    //
    // 2. Insert record into your database:
    //    try {
    //      await prisma.contactMessage.create({
    //        data: { name, email, message }
    //      });
    //    } catch (dbError) {
    //      console.error("Database connection or insertion failure:", dbError);
    //      // Handle db failure (you can still choose to notify the user or return 500)
    //    }
    // =========================================================================

    return NextResponse.json(
      { 
        message: "Thank you for reaching out. Your message has been received!",
        received: { name, email }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
