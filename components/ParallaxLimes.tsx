import GlobalSvgSelector from "@/public/svg/GlobalSvgSelector"
import MyMedias from "./MyMedias";

const ParallaxLimes = () => {

  const medias = [
    {
      media: 'Github',
      link: 'https://github.com/PashaLopatuk',
    },
    {
      media: 'Telegram',
      link: 'https://t.me/pashajef',
    },
    {
      media: 'Linkedin',
      link: 'https://www.linkedin.com/in/pavlo-lopatuk-580928250/',
    },
    {
      media: 'Instagram',
      link: 'https://www.instagram.com/pashajef/',
    },
  ]

  const iconSize = '56px';

  return (
    <div className="">
      
      <div className="">
        <ul className="flex flex-col items-center gap-3">
            {

              medias.map( 
                ({ media, link }) => 

                <li className={`p-6 rounded-3xl ${
                 ''  
                }`}>

                  <a href={link} className="flex items-center content-center gap-4">
                    <div className="bg-lime-500 p-2.5 rounded-full">
                      <GlobalSvgSelector id={media.toLowerCase()} 
                        className="max-w-[56px] max-h-[56px] 
                        w-full h-full m-3
                        "
                      />
                    </div>
                    
                    <h2 className="text-[100px] font-semibold">{media}</h2>
                  </a>
                </li>
              )
            }
        </ul>
      </div>
    </div>
  )
}

export default ParallaxLimes
