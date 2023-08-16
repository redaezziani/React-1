import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skeletonEffect = 'absolute z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200';

const imageVariants = {
  hidden: { opacity: 0

  },

  visible: { opacity: 1,
     transition: { duration: 1 }
  },
};

function ImageWithLoading({ src }) {
  const [loading, setLoading] = useState(true);
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <motion.div
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      variants={imageVariants}
      className='w-auto relative h-[11.62rem] rounded-md overflow-hidden'
      layoutId='box1'
    >
      <img
        onLoad={handleLoad}
        src={src}
        alt='img'
        className='w-full h-full object-cover'
      />
      {loading && <div className={skeletonEffect}></div>}
    </motion.div>
  );
}

function App() {
  return (
    <div className='w-full h-screen overflow-hidden flex justify-center items-center'>
      <section className='columns-3 ml-72   space-y-3 place-content-center  place-items-center w-[70%] grid-cols-2 grid-rows-3 gap-3'>
        <ImageWithLoading src='https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg' />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='w-auto h-[11.6rem] rounded-md overflow-hidden'
          layoutId='box3'
        >
          <img src='https://images.pexels.com/photos/698275/pexels-photo-698275.jpeg' alt='img' className='w-full h-full object-cover' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='w-auto h-96 rounded-md overflow-hidden'
          layoutId='box2'
        >
          <img src='https://images.pexels.com/photos/1635088/pexels-photo-1635088.jpeg' alt='img' className='w-full h-full object-cover' />
        </motion.div>
      </section>
    </div>
  );
}

export default App;
