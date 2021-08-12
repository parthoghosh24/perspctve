import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createRef, useContext, useState } from 'react'
import OpinionContext from '../../contexts/OpinionContext';

const Media = () => {
  const {opinion, setOpinion} = useContext(OpinionContext);
  const [addMedia, setAddMedia] = useState(false);
  const [imageSelected, setImageSelected] = useState(true);
  const [gifSelected, setGifSelected] = useState(false);
  const [videoSelected, setVideoSelected] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('A public image url (.jpeg, .png, etc.)...');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const imageRef = createRef();
  const gifRef = createRef();
  const videoRef = createRef();
  const mediaUrlRef = createRef();


  const youtubeUrlBuilder = (url)=>{
    const code =  url.substring(17);
    return `https://www.youtube.com/embed/${code}`;
  }  
  const toggleMedia = ()=>{
    setAddMedia(!addMedia);
    let localOpinion = opinion;
    localOpinion.media = {url: undefined, type: 'image'};
    setOpinion(localOpinion);
  }

  const handleUrl = (e)=>{
    let localOpinion = opinion;
    localOpinion.media.url = e.target.value;
    if(localOpinion.media.type === 'video')
    {
      localOpinion.media.url = youtubeUrlBuilder(localOpinion.media.url);
    }
    setOpinion(localOpinion);
    console.log(opinion);
    setShowPreview(true);
  }

  const clearUrl = ()=>{
    let localOpinion = opinion;
    localOpinion.media.url = undefined;
    setOpinion(localOpinion);
    mediaUrlRef.current.value = '';
    setShowPreview(false);
  }

  const updateType = (type)=>{
    let localOpinion = opinion;
    localOpinion.media.type = type;
    setOpinion(localOpinion);
  }

  const handleImageSelect = ()=>{

    setImageSelected(true);
    setGifSelected(false);
    setVideoSelected(false);
    setPlaceholderText('A public image url (.jpeg, .png, etc.)');
    updateType('image');
    clearUrl();
  }

  const handleGifSelect = ()=>{
    setImageSelected(false);
    setGifSelected(true);
    setVideoSelected(false);
    setPlaceholderText('A public gif animation url.');
    updateType('gif');
    clearUrl();
  }

  const handleVideoSelect = ()=>{
    setImageSelected(false);
    setGifSelected(false);
    setVideoSelected(true);
    setPlaceholderText('Youtube video share url.');
    updateType('video');
    clearUrl();
  }

  return (
    <>
      <div className="pl-5 mt-10 text-gray-400 font-medium">
        <input type='checkbox' checked={addMedia} className="focus:ring-0 appearance-none checked:bg-blue-600 checked:border-transparent" onClick={toggleMedia}/> Add Media
      </div>
      {addMedia ?
      <>
        <div className="flex flex-wrap mt-10">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px ml-2 mr-2 last:mr-0 flex-auto text-center">
                <input onChange={handleImageSelect} checked={imageSelected} ref={imageRef} type="radio" id="image" name="media_type"/>
                <span className={imageSelected ? "text-sm md:text-xl font-bold  px-5 py-3 block leading-normal text-blue-600" : "text-sm md:text-xl font-bold  px-5 py-3 block leading-normal text-gray-400"}>
                  <FontAwesomeIcon className="" icon={faImage}/> Image
                </span>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <input onChange={handleGifSelect} checked={gifSelected} ref={gifRef} type="radio" id="gif" name="media_type"/>
                <span className={gifSelected ? "text-sm md:text-xl font-bold  px-5 py-3 block leading-normal text-blue-600" : "text-sm md:text-xl font-bold  px-5 py-3 block leading-normal text-gray-400"}>
                  GIF
                </span>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <input onChange={handleVideoSelect} checked={videoSelected} ref={videoRef} type="radio" id="video" name="media_type"/>
                <span className={videoSelected ? "text-sm md:text-xl font-bold  px-5 py-3 block leading-normal text-blue-600" : "text-sm md:text-xl font-bold  px-5 py-3 block leading-normal text-gray-400"}>
                <FontAwesomeIcon icon={faYoutube}/> Youtube video
                </span>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                    <div>
                      <input ref={mediaUrlRef} value={opinion.media.url} onChange={handleUrl} className="focus:ring-0 placeholder-gray-400 mt-0 block w-full pt-4 px-1 border-0 border-b-2 border-gray-200 text-md md:text-xl font-bold mb-2" placeholder={placeholderText}/>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {
        showPreview ?
        <div className="rounded-lg p-1">
          {opinion.media.type === 'image'? 
            <img src={opinion.media.url}
            className="rounded-lg w-full" alt="media"/>
            :
            ''
          }
          {opinion.media.type === 'gif'? 
            <img src={opinion.media.url}
            className="lg:rounded-lg w-full" alt="media"/>
            :
            ''
          }
          {opinion.media.type === 'video'? 
            <div className="relative">
              <iframe className="inset-0 w-full h-96" src={opinion.media.url} title="video_media" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            :
            ''
          }
        </div>
        :
        ''
      }
      </>
      :
      ''
      }
      
    </>
  )
}

export default Media
