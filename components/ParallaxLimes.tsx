import GlobalSvgSelector from "@/public/svg/GlobalSvgSelector"
import MyMedias from "./MyMedias";
import LinkItem from "./LinkItem";

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
    <div className="my-[6em]">
      
      <div className=" overflow-hidden">
        <ul className="flex flex-col items-end md:items-center gap-10">
            {

              medias.map( 
                ({ media, link }) => 

                <li className={' rounded-3xl items-center focus:self-start'}>

                  <a href={link} 
                  className="flex items-center gap-4 w-full ">
                    
                    <div className="bg-lime-500 p-2.5 rounded-full w-[5em] h-[5em] flex content-center items-center">
                      <GlobalSvgSelector id={media.toLowerCase()} 
                        className="text-black w-[4em] h-[4em] ml-[0.1em] "
                      />
                    </div>
                    
                    <h2 className="lg:text-[5em] text-[5em] font-semibold">
                      <LinkItem className={''} content={media}/>
                    </h2>

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
