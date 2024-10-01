import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainViewer from './MainViewer'
import PhotoPicker from './PhotoPicker'


function App() {
  const photoIds = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  ];

  function setupUrl(index: number) {
    return `https://picsum.photos/id/${photoIds[index]}/1600/900`;
  }

  const [photoUrl, setPhotoUrl] = useState(setupUrl(0));

  function getSelectedIndex(selectedIndex: number) {
    setPhotoUrl(setupUrl(selectedIndex));
  }

  return (
    <>
      <h1>React Photo Viewer</h1>
      <MainViewer photoUrl={photoUrl} />

      <h2>Select your photo</h2>
      <PhotoPicker photoIds={photoIds} getSelectedIndex={getSelectedIndex} />
    </>
  )
}

export default App
