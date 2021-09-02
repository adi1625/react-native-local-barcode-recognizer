### 本地二维码识别器

##Install:
```bash
#install:
npm install git+https://github.com/du6688/react-native-local-barcode-recognizer.git

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
#
#### 1.优化了有些二维码无法识别
#### 2.优化了二维码识别率低的问题
#### 3.添加了typescript类型

优化方法参照 [文章](https://blog.csdn.net/sinat_31231955/article/details/88074422)

#

## API
Options:
| 方法 | 参数 |
|:----:|:----:|
| decode | (base64编码,options)=> Promise\<string>  |


## options

Options:
| 名称 | 描述 |
|:----:|:----:|
| codeTypes  |[aztec,ean13, ean8, qr, pdf417, upc_e, datamatrix, code39, code93, interleaved2of5, codabar, code128, maxicode, rss14, rssexpanded, upc_a, upc_ean] |
