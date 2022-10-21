import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>

            <p className={styles.extraColor}>Hi I am Brandon.</p>

            {/* load an image locally */}
            <Image 
                src='/vercel.svg'
                alt='logo'
                width={300}
                height={300}
                layout='fill'
            />

            {/* load an image hosted on another domain */}
            <Image 
                src='https://placekitten.com/400/500'
                alt='portfolio cat'
                width={400}
                height={500}
            />

        </div>
    )
}