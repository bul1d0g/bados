import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import KakaoMapScript from '@/components/KakaoMapScript'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bados Gym - 프리미엄 헬스장',
  description: 'Bados Gym에서 당신의 목표를 달성하세요. 최신 시설과 전문 트레이너가 함께합니다.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <KakaoMapScript />
        {children}
      </body>
    </html>
  )
}
