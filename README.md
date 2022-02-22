# React native 本地二维码识别器

## react-native-local-barcode-recognizer

## 安装:
```bash
#install:
npm install git+https://github.com/adi1625/react-native-local-barcode-recognizer.git

#and link:
react-native link react-native-local-barcode-recognizer

```

## 用法：

```typescript 
import LocalBarcodeRecognizer from 'react-native-local-barcode-recognizer';

const imageBase64 = "data:image/jpeg;base64,/9j/4AA.......";

let result = await LocalBarcodeRecognizer.decode(imageBase64.replace("data:image/jpeg;base64,",""), {
            codeTypes: ['ean13', 'qr']
        });

console.log(result);

```

## 说明:
修改源码文件，修复二维码识别率过低的问题，添加了ts类型

优化方法参照 [文章](https://blog.csdn.net/sinat_31231955/article/details/88074422)

修复了ios无法编译的问题。 [文章](https://github.com/KirillPopovsky/react-native-local-barcode-recognizer/commit/47cca87c16549213c29f549fa986ed687f451981)

## API
| 方法 | 参数 |
|:----:|:----:|
| decode | (base64编码,options)=> Promise\<string>  |


## options
| 名称 | 描述 |
|:----:|:----:|
| codeTypes  |[aztec,ean13, ean8, qr, pdf417, upc_e, datamatrix, code39, code93, interleaved2of5, codabar, code128, maxicode, rss14, rssexpanded, upc_a, upc_ean] |
