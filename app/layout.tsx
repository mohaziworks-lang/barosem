import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '바로셈 - 세금·금융 계산기',
  description: '실수령액, 취득세, 부가가치세, 퇴직금 등 42가지 세금·금융 계산기. 2025년 세법 기준.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
