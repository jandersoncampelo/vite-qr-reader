import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import "./QRCodeReader.css";

const QRCodeReader = () => {
  const [result, setResult] = useState<string | null>(null);
  
  useEffect(() => {
        const html5QrcodeScanner = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: { width: 250, height: 250 } },
          false
        );
    
        const onSucess = (decodedText: string) => {
            setResult(decodedText);
            console.log(decodedText);
        };
    
        const onFailure = (error: string) => {
            console.log(error);
        };
    
        html5QrcodeScanner.render(onSucess, onFailure);
  }, []);
  return (
    <>
        <div className="qr-reader-container">
        <div id="reader" className="qr-reader-renderer"></div>
            <p>{result}</p>
        </div>
        
    </>
  );
};

export default QRCodeReader;

/*** Gerado pelo Copilot ***/
/**
    const handleScan = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    setResult(code.data);
                }
            }
        }
    };
 */
