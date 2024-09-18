import "./App.css";
import QRCodeReader from "./components/QRCodeReader";
import { useState } from "react";

function App() {
  const [scanResult, setScanResult] = useState<string | null>(null);

  const onNewScanResult = (decodedText: string, decodedResult: unknown) => {
    console.log(decodedText, decodedResult);
    setScanResult(decodedText);
  };

  return (
    <>
      <QRCodeReader
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      <div className="App">
        <header className="App-header">
          <p>QR Code Scanner</p>
          <div id="qr-code-result" />
        </header>
      </div>

      {scanResult && (
        <div className="scan-result">
          <p>Scan Result:</p>
          <p>{scanResult}</p>
        </div>
      )}
    </>
  );
}
export default App;
