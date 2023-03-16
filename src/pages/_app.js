import '@/styles/globals.css'
import { ThemeProvider } from "@mui/material";
import { theme } from '@/utils/theme';
import { Inter } from '@next/font/google'
const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin']
})
export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>

        <Component {...pageProps} className={inter.className} />
      </ThemeProvider>
    </>
  )
}
