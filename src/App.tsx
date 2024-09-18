import "./App.css";
import QRCodeReader from "./components/QRCodeReader";
import { useState } from "react";

function App() {
  const [scanResult, setScanResult] = useState<string | null>('http://www.fazenda.pr.gov.br/nfce/qrcode?p=41240902168202001144652090003353741000058867|2|1|1|66A8C636CF37A01F46D9635AD16D6A5893165496');

  const onNewScanResult = (decodedText: string, decodedResult: unknown) => {
    console.log(decodedText, decodedResult);
    setScanResult(decodedText);
  };

  return (
    <>
        <header className="app-header">
          <p>QR Code Scanner</p>
          <div id="qr-code-result" />
        </header>
        <QRCodeReader
        fps={10}
        qrbox={{ width: 250, height: 250 }}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />

      {scanResult && (
        <div className="scan-result">
          <h2>Scan Result:</h2>
          <p>{scanResult}</p>
        </div>
      )}
    </>
  );
}
export default App;
