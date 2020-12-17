import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(img => (
        <ImageGalleryItem src={img.webformatURL} alt={img.id} key={img.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
