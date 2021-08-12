import React from 'react'

const Media = (props) => {
  return (
    <div className="rounded-lg p-1">
      { props.media.type === "image" &&
      <img src={props.media.url}
      className="rounded-lg w-full" alt="media"/> }

      {
       props.media.type === "gif" && 
       <img src={props.media.url}
        className="lg:rounded-lg w-full" alt="media"/>
      }

      {
       props.media.type === "video" && 
       <div className="relative">
          <iframe className="inset-0 w-full h-96" src={props.media.url} title="video_media" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      }
    </div>
  )
}

export default Media
