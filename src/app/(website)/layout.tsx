import { Navbar } from '@/components/layout/navbar';import { Footer } from '@/components/layout/footer';
export default function WebsiteLayout({children}:{children:React.ReactNode}){return <><Navbar/><main className="site-main">{children}</main><Footer/></>}
