import './style.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faFileSignature, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Nav = ({isOpen, setIsOpen}) => {
  const variant = {
    initial: {
      opacity: 0,
      x: 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 24,
        staggerChildren: 0.07, 
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        type: 'spring',
        damping: 24,
        delay: 0.2,
        staggerChildren: -0.07,
        delayChildren: 0.2
      }
    }
  }
  const item = {
    initial: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10
      }
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        type: 'spring',
        damping: 10
      }
    }
  }

  return (
    <>
      <motion.div className='hamburger' onClick={() => setIsOpen(!isOpen)} whileHover={{scale: 1.05}} whileTap={{scale: 0.90}}>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
      </motion.div>
      <AnimatePresence>
      { isOpen && 
        <motion.nav className='nav-container' variants={variant} animate='visible' initial='initial' exit='exit'>
          <Link to="/">
            <motion.p variants={item} whileHover={{scale: 1.15}} whileTap={{scale: 0.90}}>
              <FontAwesomeIcon icon={faHouse} style={{color: 'white'}}/>
            </motion.p>
          </Link>
          <Link to="/about">
            <motion.p variants={item} whileHover={{scale: 1.15}} whileTap={{scale: 0.90}}>
              <FontAwesomeIcon initial={{pathLength: 0}} animate={{pathLength: 1}} icon={faAddressCard} style={{color: 'white'}}/>
            </motion.p>
          </Link>
          <Link to='/contact'> 
            <motion.p variants={item} whileHover={{scale: 1.15}} whileTap={{scale: 0.90}}>
              <FontAwesomeIcon icon={faFileSignature} style={{color: 'white'}}/>
            </motion.p>
          </Link>
        </motion.nav>
      }
      </AnimatePresence>
      <motion.div animate={{x: -5, zIndex: 1, color: ['#000','#fff'], position:'absolute', transition: {duration: 1, repeat: Infinity, repeatType: 'reverse'}}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: 'inherit', zIndex: 1, position:'absolute', left: 110, top: 20}}/>
      </motion.div>
      <motion.div animate={{x: -5, zIndex: 1, color: ['#000','#fff'], position:'absolute', transition: {duration: 1, delay: 0.1, repeat: Infinity, repeatType: 'reverse'}}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: 'inherit', zIndex: 1, position:'absolute', left: 120, top: 20}}/>
      </motion.div>
      <motion.div animate={{x: -5, zIndex: 1, color: ['#000','#fff'], position:'absolute', transition: {duration: 1,delay: 0.2, repeat: Infinity, repeatType: 'reverse'}}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{color: 'inherit', zIndex: 1, position:'absolute', left: 130, top: 20}}/>
      </motion.div>
    </>
  )
}

export default Nav;