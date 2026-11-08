import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geist=Geist({variable:'--font-geist-sans',subsets:['latin'],display:'swap'});
const mono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin'],display:'swap'});
export const metadata:Metadata={metadataBase:new URL('https://learningpattern.in'),title:{default:'Learning Pattern | Learn with purpose. Build with confidence.',template:'%s | Learning Pattern'},description:'Practical online technology training in Data Engineering, Data Science, Generative AI, Agentic AI and Full Stack Development.',openGraph:{type:'website',siteName:'Learning Pattern',title:'Learning Pattern — Build what’s next',description:'Structured technical learning across software, data and AI.'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${geist.variable} ${mono.variable}`}><body>{children}</body></html>}
