import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCircles from '@/components/BackgroundCircles'


export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-900">
      
      {/* <BackgroundCircles /> */}
      <Header/>
      <Main />
      {/* <Footer/> */}

    </main>
  )
}
