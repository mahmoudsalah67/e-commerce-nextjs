import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getMyUserToken() {
    const cookieStore = await cookies();

    // قراءة قيمة التوكن مباشرة من الكوكي الموجودة في المتصفح
    const token = cookieStore.get('next-auth.session-token')?.value 
               || cookieStore.get('__Secure-next-auth.session-token')?.value;

    console.log("Raw Token String:", token);

    if (!token) return null;

    // فك تشفير الكوكي بالـ Secret
    const decodedToken = await decode({
        token: token,
        secret: process.env.NEXTAUTH_SECRET || "my_super_secret_key_12345",
    });

    console.log("Decoded Token Data:", decodedToken);

    // إرجاع الـ accessToken المطلوب
    return (decodedToken as any)?.accessToken || decodedToken || null;
}