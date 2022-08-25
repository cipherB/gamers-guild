import footerLogo from '../assets/footer-logo.png';
import playstore from '../assets/playstore.png';
import appstore from '../assets/appstore.png';

const Footer = () => {
  return (
    <footer className='w-full bg-site-primary py-3 px-4 md:py-6 md:flex justify-center' >
      <div>
        <section className='border-b border-[#ffffff6d] pb-3 mt-5' >
          <div className='w-full md:flex justify-center'>
            <img src={footerLogo} alt="logo" className='h-14 w-24 mb-2 cursor-pointer' />
          </div>
          <ul className='flex md:gap-5 gap-3 list-none md:justify-center'>
            <li><a href='/' >About</a></li>
            <li><a href='/' >FAQ</a></li>
            <li><a href='/' >Terms</a></li>
            <li><a href='/' >Privacy</a></li>
          </ul>
        </section>
        <section className='pt-3'>
          <p className=' md:text-center' >Get Gamers Guild App </p>
          <div className='flex gap-x-3 items-center md:justify-center'>
            <img src={playstore} alt='playstore' className=' h-12 w-32 cursor-pointer' />
            <img src={appstore} alt='appstore' className=' h-10 w-32 cursor-pointer' />
          </div>
        </section>
        <p className='text-sm opacity-90 text-center mt-5 md:mt-8' >© 2022 ,CypherB</p>
      </div>
    </footer>
  )
}

export default Footer