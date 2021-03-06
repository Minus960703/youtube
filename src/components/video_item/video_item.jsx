import React, { memo } from 'react';
import styles from './video_item.module.css';
const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;

  return (
    <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} alt="video thumbnail" />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  )
}
);

// const VideoItem = props => <li> //videoItem으로 사용가능.
//   <img src={props.video.snippet.medium.url} alt="video thumbnail" />
//   <div>
//     <p>{props.video.snippet.title}</p>
//     <p>{props.video.snippet.channelTitle}</p>
//   </div>
// </li>

export default VideoItem;