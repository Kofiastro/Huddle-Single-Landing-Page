import mobileBack from '../assets/bg-mobile.svg'
import desktopBack from '../assets/bg-desktop.svg'
import huddleLogo from '../assets/logo.svg'
import illustration from '../assets/illustration.svg'
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
function HuddleUI() {
  return (
    <div className='bg-Violet md:h-screen '>
      <div className='mx-10 pt-6 w-32 md:w-1/2 md:mx-20'>
        <img src={huddleLogo} alt='logo' />
      </div>

      {/* container to fix reponsiveness */}
      <div className='md:flex md:space-x-24 '>
        {/* Illustration and Back image */}
        <div className='relative -mt-16 md:ml-4 md:w-1/2 '>
            
          <img
            src={desktopBack}
            alt='Desktop'
            className='invisible absolute md:absolute md:visible md:-top-0 md:left-52'
          />
          <img src={mobileBack} alt='mobileBack' className='md:hidden' />
          <img
            src={illustration}
            alt='mockup'
            className='px-10 -mt-60 md:relative md:mt-36 md:mx-20 md:pt-4 md:px-0 '
          />
        </div>
        {/* Text content */}
        <div className='mx-10 mt-16 space-y-4 flex flex-col items-center justify-center md:px-10 md:space-y-6 md:items-start md:mb-24 md:w-1/2 '>
          <h1 className='font-Poppings font-semibold text-2xl text-white max-w-sm  text-center md:text-left md:text-4xl md:max-w-md md:leading-snug '>
            Build The Community Your Fans Will Love
          </h1>
          <p className='text-white font-OpenSans max-w-md text-center font-light md:text-left md:max-w-lg md:leading-8'>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div>
            <button className='font-Poppings max-w-md text-sm shadow-md text-center p-2 px-16 bg-white mx-auto hover:bg-SoftMagenta  hover:text-white text-Violet rounded-full  md:p-4 md:px-16 '>
              Register
            </button>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className='flex items-center  justify-center space-x-4  pt-16 pb-8 text-white text-4xl md:mx-32  md:justify-end'>
        <ImFacebook className='border border-white rounded-full  hover:text-SoftMagenta hover:border-SoftMagenta p-2' />
        <ImTwitter className=' border border-white rounded-full  hover:text-SoftMagenta hover:border-SoftMagenta  p-2' />
        <ImInstagram className='border border-white rounded-full  hover:text-SoftMagenta hover:border-SoftMagenta p-2 ' />
      </div>
    </div>
  )
}

export default HuddleUI
