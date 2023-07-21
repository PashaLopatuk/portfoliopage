import Main from '@/components/Main'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackgroundCircles from '@/components/BackgroundCircles'


export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      
      <BackgroundCircles />
      <Header/>
      <Main />
      {/* <Footer/> */}

    </main>
  )
}
