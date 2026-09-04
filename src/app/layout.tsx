import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'THE HISTORY WHEEL | Grade 6 Social Science',
  description: 'A two-team classroom competitive digital quiz game for Chapter 4: Timeline and Sources of History (Theme B: Tapestry of the Past).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-parchment-pattern min-h-screen flex flex-col text-stone-900 antialiased selection:bg-amber-200">
        {children}
      </body>
    </html>
  );
}
