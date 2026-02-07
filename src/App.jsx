import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import MessagePage from './pages/Message';
import AppLayout from './layouts/AppLayout';
import SlideShow from './pages/SlideShow';


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchValentineData = async () => 
    {
      const result = await fetch('/data.json')
        .then(res => res.json())
        .then(data => data.valentines);

        setData(result);
    }
    fetchValentineData();
  }, [])

  const getSlides = () => {
    const captions = data?.reasons.slice(0, 5);  

    return captions.map((caption, i) => ({
      image: `https://picsum.photos/seed/val-${i}/800/1000`,
      caption,
    }));
  }
  
  console.log(data)
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Home nickname={data?.recipient?.nickname}/>}></Route>
        <Route path='/message' element={<MessagePage message={data?.message} />}></Route>
        <Route path='/slideShow' element={<SlideShow nickname={data?.recipient?.nickname} getSlides={getSlides}/>}/>
      </Routes>
    </AppLayout>
  );
}

export default App;
