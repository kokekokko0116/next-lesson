import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "HP by Next.js" }){
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="h-14 pl-8 flex items-center">
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Home
              </Link>
              <Link href="/blog-page" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Blog
              </Link>
              <Link href="/contact-page" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
      <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
        <img src="/vercel.svg" alt="Logo" className="h-4 ml-2" />
                
              </Link>
      </footer>
    </div>
  );
}