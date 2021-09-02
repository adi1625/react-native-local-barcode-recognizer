import { NativeModules, } from 'react-native';

type codeType = 'aztec' | 'ean13' | 'ean8' | 'qr' | 'pdf417' | 'upc_e' | 'datamatrix' | 'code39' | 'code93' | 'interleaved2of5' | 'codabar' | 'code128' | 'maxicode' | 'rss14' | 'rssexpanded' | 'upc_a' | 'upc_ean'

type OptionsType = {
    codeTypes: codeType[]
}

interface LocalBarcodeRecognizerType {
    decode: (imageBase64: string, options: OptionsType) => Promise<string>
}

const LocalBarcodeRecognizer: LocalBarcodeRecognizerType = NativeModules.LocalBarcodeRecognizer;

export default LocalBarcodeRecognizer