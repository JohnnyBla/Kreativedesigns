import ImageFiles from '@/components/ImageFiles';
import styles from '@/styles/Home.module.css';

const Gallery = () => {
  return (
    <>
      <main
        className={`${styles.main} bg-gradient-to-r from-violet-500 to-black`}
      >
        <h1>Gallery</h1>
        <div className={styles.center}>
          <ImageFiles />
        </div>
      </main>
    </>
  );
};

export default Gallery;
