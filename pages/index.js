import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kreative Designs & Gifts</title>
        <meta name='description' content='kreative Designs & Gifts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${styles.main} bg-gradient-to-r from-violet-500 to-black`}
      >
        <div className={styles.description}>
          <p>Lets Get Kreative</p>
          <div>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              
              <Image
                src='/KreativeHomePageBanner.png'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={150}
                height={65}
                priority
              />
            </a>
          </div>
        </div>

        <div
          className={`${styles.center} text-4xl font-sans text-transform: uppercase text-center `}
        >
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            Kreative Designs & Gifts
          </h1>
        </div>

        <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2
              className={`${inter.className} bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}
            >
              Gallary <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Explore our Kreative designs for yourself and&nbsp;book us on today.
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2
              className={`${inter.className} bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}
            >
              Purchase <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Purschase products and keepsakes for your next&nbsp;event!
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2
              className={`${inter.className} bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}
            >
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Come and get to know Kreative Designs &&nbsp;gifts.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2
              className={`${inter.className} bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500`}
            >
              Contact Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Book us for your next event and make it 
              &nbsp;memorable.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
