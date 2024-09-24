import './App.css'
import QRCodeReader from './components/QRCodeReader'

function App() {
  const onNewScanResult = (decodedText: string, decodedResult: unknown) => {
    console.log(decodedText, decodedResult)
};

  return (
    <QRCodeReader
      fps={10}
      disableFlip={false}
      qrCodeSuccessCallback={onNewScanResult}
    />
  )
}

export default App
