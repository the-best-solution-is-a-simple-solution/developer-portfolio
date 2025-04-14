import {NextResponse} from "next/server";

export async function GET(request) {
    return NextResponse.json({
        success: true,
        message: 'hle!',
        data: {
            message: 'Message and email sent successfully!',
        }
    }, {status: 200});
};

export const dynamic = 'force-static'
export const revalidate = 60 // Optional: revalidate every 60 seconds
