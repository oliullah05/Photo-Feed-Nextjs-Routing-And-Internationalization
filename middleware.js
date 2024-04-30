// import { NextResponse } from "next/server";
// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'

// let defaultLocale = 'en'
// let locales = ['bn', 'en']

// // Get the preferred locale, similar to above or using a library
// function getLocale(request) {
//   const acceptedLanguage = request.headers.get('accept-language') ?? undefined
//   let headers = { 'accept-language': acceptedLanguage }
//   let languages = new Negotiator({ headers }).languages()

//   return match(languages, locales, defaultLocale) // -> 'en-US'
// }

// export function middleware(request) {
//   // Check if there is any supported locale in the pathname
//   const pathname = request.nextUrl.pathname

//   const pathnameIsMissingLocale = locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   )
// console.log("object");
//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request)

//     // e.g. incoming request is /products
//     // The new URL is now /en-US/products
//     return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
//   }
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next, assets, api)
//     '/((?!api|assets|.*\\..*|_next).*)',
//     // Optional: only run on root (/) URL
//     // '/'
//   ],
// }




import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'


let defaultLocale = "en";
let locales = ["en", "bn"];

function getLocale(request) {
    const acceptedLanguage =
        request.headers.get("accept-language") ?? undefined;
    const headers = { "accept-language": acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale); // en or bn
}


export function middleware(request) {
    // get the pathname from request url
    const pathname = request.nextUrl.pathname;

    const pathNameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}`) &&
            !pathname.startsWith(`/${locale}/`)
    );

    if (pathNameIsMissingLocale) {
        // detect user's preference & redirect with a locale with a path eg: /en/about
        const locale = getLocale(request);

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }

    return NextResponse.next();
}


export const config = {
    matcher: [
      // Skip all internal paths (_next, assets, api)
      '/((?!api|assets|.*\\..*|_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }