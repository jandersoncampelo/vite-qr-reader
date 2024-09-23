import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import "./QRCodeReader.css";

const qrcodeRegionId = "html5qr-code-full-region";

interface QRCodeReaderProps {
    fps?: number;
    qrbox?: { width: number, height: number };
    disableFlip?: boolean;
    verbose?: boolean;
    qrCodeSuccessCallback: (decodedText: string, result: unknown) => void;
    qrCodeErrorCallback?: (errorMessage: string) => void;
}

const createConfig = (props: QRCodeReaderProps) => {
    const config = {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        disableFlip: false
    };
    
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const QRCodeReader = (props: QRCodeReaderProps) => {
    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, [props]);

    return (
        <div className="qr-reader-container">
            <div id={qrcodeRegionId} className="qr-reader-renderer"/>
        </div>
    );
};

export default QRCodeReader;