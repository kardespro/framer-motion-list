import { useState } from 'react';
import { motion } from 'framer-motion';

interface NsfwCardProps {
  title: string;
  imgUrl: string;
}

const NsfwCard: React.FC<NsfwCardProps> = ({ title, imgUrl }) => {
  const [showImage, setShowImage] = useState<boolean>(false);

  const handleImageClick = (): void => {
    setShowImage(!showImage);
  };

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden">
      <h2 className="text-lg font-medium mb-2">{title}</h2>
      {!showImage && (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleImageClick}
          className="absolute inset-0 flex items-center justify-center"
        >
          <p className="text-5xl text-gray-400 pt-12">🔞</p>
        </motion.div>
      )}
      {showImage && (
        <motion.img
          src={imgUrl}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleImageClick}
          className="absolute inset-0 max-w-none h-full w-full object-cover"
        />
      )}
      <div className="pt-12"></div>
    </div>
  );
};

export default NsfwCard;
