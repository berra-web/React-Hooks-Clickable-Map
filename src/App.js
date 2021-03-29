import './App.css';
import Info from './components/Info/Info';
import Map from './components/Map/Map';
import Summary from './components/Summary/Summary';
import React, {useEffect, useState} from 'react';
import wiki from 'wikijs';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  const [selectedCountry, setSelectedCountry] = useState('Sweden');
  const [summary, setSummary] = useState('');
  const [info, setInfo] = useState(null);
  const [flag, setFlag] = useState(null);


  // wiki()
  //   .page('Sweden')
  //   .then(page => page.summary())
  //   .then(console.log); //



  function handleSelectCountry(name){
    setSelectedCountry(name);
    console.log(name);
  }


  useEffect(() => {
    async function fetchData(){
      const page = await wiki().page(selectedCountry); // wikijs
      // setSummary(await page.summary());

      const [summary, info, images] = await Promise.all([
        page.summary(),
        page.info(),
        page.images()
      ])

      setSummary(summary); 
      setInfo(info);
      setFlag(images)

      console.log(page.info());
      console.log(page.images());


      const flag = info.imageFlag.replace(/\s/g, '_') // regex => add underline instead space
      console.log(flag);

      images.some(image => {
        if(image.includes(flag)){
          setFlag(image)
          return true
        }
        return false
      })

    }

    fetchData()
  }, [selectedCountry])



  return (
    <div className="container mt-3">
        <div className="row">
            <div className="col col-md-9">
               <Map handleSelectCountry={handleSelectCountry}/>
            </div>
            <div className="col-12 col-md-3">
                <Info info={info} flag={flag}/>
            </div>
        </div>
        <div className="row mt-3">
           <Summary summary={summary}/>
        </div>
    </div>
  );
}

export default App;
