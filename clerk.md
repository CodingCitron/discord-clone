# clerk
- [홈](https://clerk.com/?utm_source=www.google.com&utm_medium=referral&utm_campaign=none)

# 순서
1. API KEY 받기
    - 회원가입 클릭 후 진행
    - Let's build your <SignIn /> 이런 페이지가 나옴
    - 현재 만들고 있는 discord-clone을 Application name 부분에 입력
    - 여러가지 옵션 중 여기서는 Email address와 Google만 선택
    - CREATE APPLICATION 클릭
    - API KEY가 나옴 이 API를 env파일 생성하고 이곳에 입력
    - 그다음은 CONTINUR DOCS 클릭

2. Use Clerk with Next.js (여기는 DOCS 나온부분 그대로 따라하면 된다.)
- 설치
```shell
npm install @clerk/nextjs
```
- set environment keys 위에서 진행함
- Mount
```javascript
app/layout.tsx

import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team Chat Application',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
```
- Protect your application (middleware 작성)
```javascript
import { authMiddleware } from "@clerk/nextjs"
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({})
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
```

