import huddleLogo from '../assets/logo.svg'
import illustration from '../assets/illustration.svg'
import { ImFacebook, ImTwitter, ImInstagram } from 'react-icons/im'
function HuddleUI() {
  return (
    <div className='bg-Violet md:h-screen bg-Desktop bg-mobile '>
      <div className='mx-10 pt-8 w-32 md:w-60 md:mx-20'>
        <img src={huddleLogo} alt='logo' />
      </div>

      {/* container to fix reponsiveness */}
      <div className='pt-20 md:flex md:space-x-24 md:-mt-20 md:pt-5 '>
        {/* Illustration and Back image */}
        <div className=''>
          <img
            src={illustration}
            alt='mockup'
            className='px-10 md:mt-36 md:mx-20 md:pt-4 md:px-0 '
          />
        </div>
        {/* Text content */}
        <div className='mx-10 pt-16  space-y-6 flex flex-col items-center justify-center md:px-10 md:space-y-6 md:items-start  md:w-1/2'>
          <h1 className='font-Poppings leading-normal text-2xl text-white text-center md:text-left md:max-w-md md:text-4xl md:tracking-wide md:leading-snug'>
            Build The Community Your Fans Will Love
          </h1>
          <p className='text-white font-OpenSans  text-center font-light md:text-left md:max-w-lg  md:leading-8 md:tracking-wide'>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <div>
            {/* Button */}
            <button className='font-Poppings  text-sm shadow-lg text-center p-3 px-16 bg-white mx-auto hover:bg-SoftMagenta  hover:text-white text-Violet rounded-full  md:p-4 md:px-20 '>
              Register
            </button>
          </div>
        </div>
      </div>
      {/* Socials */}
      <div className='flex items-center pt-16 justify-center space-x-4 pb-8 text-white text-4xl md:mx-32 md:pt-10 md:justify-end'>
        <ImFacebook className='border border-white rounded-full  hover:text-SoftMagenta hover:border-SoftMagenta p-2' />
        <ImTwitter className=' border border-white rounded-full  hover:text-SoftMagenta hover:border-SoftMagenta  p-2' />
        <ImInstagram className='border border-white rounded-full  hover:text-SoftMagenta hover:border-SoftMagenta p-2 ' />
      </div>
    </div>
  )
}

export default HuddleUI
