import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD-DDzktAGHHVJ3_VgSNjdWMw7F5LpWK4Y", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []); //[]는 Mount가 되었을때만, 호출 [name]은 name이 업데이트 될때마다 호출
  return (
    <VideoList videos={videos} />
  );
}

export default App;
