import { faFistRaised, faHandshake, faHeart, faHeartBroken, faMehBlank, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {Helmet} from 'react-helmet';

const about = () => {
  return (
    <div className="flex flex-col w-full max-h-full justify-center items-center p-5 mt-10">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Perspctve | About</title>
                <link rel="canonical" href={`${process.env.REACT_APP_DOMAIN}/about`} />
                <meta name="description"
                  content='Perspctve is an opinion based social network which enables users to share their opinions without getting trolled.'
                />
                 <meta property="og:title" content='Perspctve | About'/>
                 <meta property="og:image" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`} />
                 <meta property="og:url" content={`${process.env.REACT_APP_DOMAIN}/about`} />
                 <meta property="og:description" content='Perspctve is an opinion based social network which enables users to share their opinions without getting trolled.' />
                 <meta property="twitter:title" content="Perspctve | About"/>
                <meta property="twitter:card" content={`${process.env.REACT_APP_DOMAIN}/images/perspctve.png`}/>
                <meta property="twitter:description" content='Perspctve is an opinion based social network which enables users to share their opinions without getting trolled.' />
        </Helmet>
      <div className="md:w-9/12">
        <article className="lg:text-5xl md:text-4xl sm:text-2xl text-white">
          Today the internet runs on <u>opinions</u>. Everyone has their own opinion and you have yours too.
        </article>
        <article className="lg:text-5xl md:text-4xl sm:text-2xl text-white mt-10">
          <Link to="/"><span className="font-semibold hover:text-blue-400">Perspctve</span></Link> respects it, allows you to share it with the world and figure out what the world thinks of your opinion without you getting trolled.
        </article>
        <article className="lg:text-5xl md:text-4xl sm:text-2xl text-white mt-10">
          Things you can do over here:
        </article>
        <ul className="md:list-inside list-disc md:text-4xl sm:text-2xl text-white p-4">
          <li>Post your opinions with or without revealing your identity.</li>
          <li>Agree(<FontAwesomeIcon icon={faHeart}/>, <FontAwesomeIcon icon={faThumbsUp}/>),Disagree(<FontAwesomeIcon icon={faHeartBroken}/>, <FontAwesomeIcon icon={faThumbsDown}/>) or react neutral(<FontAwesomeIcon icon={faMehBlank}/>) with other's opinions.</li>
          <li>Re-opinion in support(<FontAwesomeIcon icon={faHandshake}/>) or opposing(<FontAwesomeIcon icon={faFistRaised}/>) other's opinions.</li>
        </ul>
        <article className="lg:text-5xl md:text-4xl sm:text-2xl text-white mt-10">
          Community guidelines:
        </article>
        <ul className="md:list-inside list-disc md:text-4xl sm:text-2xl text-white p-4">
          <li>Be respectful to other people and their opinions.</li>
          <li>Don't post any offensive content.</li>
          <li>For any kind of help, queries or anything else reach out to <a href="mailto:support@perspctve.com" className="underline">support@perspctve.com</a></li>
        </ul>

      </div>
    </div>
  )
}

export default about
