import { betterFetch } from "@better-fetch/fetch";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Session } from "@/lib/auth-types";

// Rutas protegidas
const authRoutes = ["/sign-in", "/sign-up"];
const adminRoutes = ["/admin"];
const protectedRoutes = ["/dashboard", ...adminRoutes];
const analyticsRoute = "/dashboard/analytics";

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthRoute = authRoutes.includes(pathName);
  const isAdminRoute = adminRoutes.includes(pathName);
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathName.startsWith(route)
  );

  try {
    // Obtener la sesión desde la API de Better Auth.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: session, error } = await betterFetch<Session>(
      "/api/auth/get-session",
      {
        baseURL: process.env.BETTER_AUTH_URL,
        headers: {
          cookie: request.headers.get("cookie") || "",
        },
      }
    );

    // Si no hay sesión y es una ruta protegida.
    if (!session) {
      if (isAuthRoute) {
        return NextResponse.next();
      }

      if (isProtectedRoute){
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }else{
        return NextResponse.next();
      }
    }

    // Si el usuario está autenticado y quiere acceder a rutas públicas (sign-in, sign-up).
    if (isAuthRoute) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // Validar acceso de admin.
    if (isAdminRoute && session.user.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Validar acceso a /dashboard/analytics para "admin" y "tesorero".
    if (pathName === analyticsRoute && !["admin", "tesorero"].includes(session.user.role || "")) {
      return NextResponse.redirect(new URL("/dashboard", request.url)); // Redirige si no es admin ni tesorero
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Error en el middleware:", error);
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

// Configuración del matcher.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.).*)"], // Excluir rutas estáticas y API.
};
