import Image from 'next/image';
import { ImageList, ImageListItem, Box, Tab } from '@mui/material';
import { useState } from 'react';
import { Images } from '@/shared/Images';
import styles from '@/styles/Home.module.css';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import { Favorite, Star, MiscellaneousServices } from '@mui/icons-material';

const ImageFiles = () => {
  const [value, setValue] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label='tabJoins' centered>
            <Tab
              label='KeepSakes'
              icon={<Star />}
              iconPosition='end'
              value='1'
            />
            <Tab
              label='Tables'
              icon={<Favorite />}
              iconPosition='end'
              value='2'
            />
            <Tab
              label='miscellaneous'
              icon={<MiscellaneousServices />}
              iconPosition='end'
              value='3'
            />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <div>
            <ImageList
              sx={{ width: 'fit-content', height: 'auto', overflow: 'visible' }}
              cols={4}
              gap={17}
              rowHeight={'auto'}
            >
              {Images.map((pictures) => {
                if (pictures.display === 'keepsake') {
                  return (
                    <ImageListItem key={pictures.id}>
                      <Image
                        className={styles.imageGallery}
                        width={250}
                        src={pictures.src}
                        alt={pictures.id}
                        loading='lazy'
                      />
                    </ImageListItem>
                  );
                }
              })}
            </ImageList>
          </div>
        </TabPanel>
        <TabPanel value='2'>
          <div>
            <ImageList
              sx={{ width: 'fit-content', height: 'auto', overflow: 'visible' }}
              cols={4}
              gap={17}
              rowHeight={'auto'}
            >
              {Images.map((pictures) => {
                if (pictures.display === 'table') {
                  return (
                    <ImageListItem key={pictures.id}>
                      <Image
                        className={styles.imageGallery}
                        width={250}
                        src={pictures.src}
                        alt={pictures.id}
                        loading='lazy'
                      />
                    </ImageListItem>
                  );
                }
              })}
            </ImageList>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ImageFiles;
