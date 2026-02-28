import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='w-full flex flex-row justify-center gap-8 py-16'>
      <a href='https://github.com/mateotiedra'>
        <FaGithub className='text-white text-2xl' />
      </a>
      <a href='https://www.linkedin.com/in/mateo-tiedra-405614282'>
        <FaLinkedin className='text-white text-2xl' />
      </a>
      <a href='mailto:mateo@tiedra.com'>
        <FaEnvelope className='text-white text-2xl' />
      </a>
      <a href='https://www.instagram.com/mateo.tdr'>
        <FaInstagram className='text-white text-2xl' />
      </a>
    </div>
  );
}

export default Footer;
