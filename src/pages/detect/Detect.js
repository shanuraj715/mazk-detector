import React, { Component } from 'react'
import Header from '../../comps/header/Header'
import Footer from '../../comps/footer/Footer'
import Helmet from 'react-helmet'
import conf from '../../config.json'
import './detect.css'

import Loading from '../../comps/loader/Loading'

import * as tf from '@tensorflow/tfjs'
import * as mobilenet from '@tensorflow-models/mobilenet'
import * as knnClassifier from '@tensorflow-models/knn-classifier'


import ReactTooltip from 'react-tooltip'


import m1 from '../../images/m/1.jpg'; import m2 from '../../images/m/2.jpg'; import m3 from '../../images/m/3.jpg';
import m4 from '../../images/m/4.jpg'; import m5 from '../../images/m/5.jpg'; import m6 from '../../images/m/6.jpg';
import m7 from '../../images/m/7.jpg'; import m8 from '../../images/m/8.jpg'; import m9 from '../../images/m/9.jpg';
import m10 from '../../images/m/10.jpg'; import m11 from '../../images/m/11.jpg'; import m12 from '../../images/m/12.jpg';
import m13 from '../../images/m/13.jpg'; import m14 from '../../images/m/14.jpg'; import m15 from '../../images/m/15.jpg';
import m16 from '../../images/m/16.jpg'; import m17 from '../../images/m/17.jpg'; import m18 from '../../images/m/18.jpg';
import m19 from '../../images/m/19.jpg'; import m20 from '../../images/m/20.jpg'; import m21 from '../../images/m/21.jpg';
import m22 from '../../images/m/22.jpg'; import m23 from '../../images/m/23.jpg'; import m24 from '../../images/m/24.jpg';
import m25 from '../../images/m/25.jpg'; import m26 from '../../images/m/26.jpg'; import m27 from '../../images/m/27.jpg';
import m28 from '../../images/m/28.jpg'; import m29 from '../../images/m/29.jpg'; import m30 from '../../images/m/30.jpg';
import m31 from '../../images/m/31.jpg'; import m32 from '../../images/m/32.jpg'; import m33 from '../../images/m/33.jpg';
import m34 from '../../images/m/34.jpg'; import m35 from '../../images/m/35.jpg'; import m36 from '../../images/m/36.jpg';
import m37 from '../../images/m/37.jpg'; import m38 from '../../images/m/38.jpg'; import m39 from '../../images/m/39.jpg';
import m40 from '../../images/m/40.jpg'; import m41 from '../../images/m/41.jpg'; import m42 from '../../images/m/42.jpg';
import m43 from '../../images/m/43.jpg'; import m44 from '../../images/m/44.jpg'; import m45 from '../../images/m/45.jpg';
import m46 from '../../images/m/46.jpg'; import m47 from '../../images/m/47.jpg'; import m48 from '../../images/m/48.jpg';
import m49 from '../../images/m/49.jpg'; import m50 from '../../images/m/50.jpg'; import m51 from '../../images/m/51.jpg';
import m52 from '../../images/m/52.jpg'; import m53 from '../../images/m/53.jpg'; import m54 from '../../images/m/54.jpg';
import m55 from '../../images/m/55.jpg'; import m56 from '../../images/m/56.jpg'; import m57 from '../../images/m/57.jpg';
import m58 from '../../images/m/58.jpg'; import m59 from '../../images/m/59.jpg'; import m60 from '../../images/m/60.jpg';
import m61 from '../../images/m/61.jpg'; import m62 from '../../images/m/62.jpg'; import m63 from '../../images/m/63.jpg';
import m64 from '../../images/m/64.jpg'; import m65 from '../../images/m/65.jpg'; import m66 from '../../images/m/66.jpg';
import m67 from '../../images/m/67.jpg'; import m68 from '../../images/m/68.jpg'; import m69 from '../../images/m/69.jpg';
import m70 from '../../images/m/70.jpg'; import m71 from '../../images/m/71.jpg'; import m72 from '../../images/m/72.jpg';
import m73 from '../../images/m/73.jpg'; import m74 from '../../images/m/74.jpg'; import m75 from '../../images/m/75.jpg';
import m76 from '../../images/m/76.jpg'; import m77 from '../../images/m/77.jpg'; import m78 from '../../images/m/78.jpg';
import m79 from '../../images/m/79.jpg'; import m80 from '../../images/m/80.jpg'; import m81 from '../../images/m/81.jpg';
import m82 from '../../images/m/82.jpg'; import m83 from '../../images/m/83.jpg'; import m84 from '../../images/m/84.jpg';
import m85 from '../../images/m/85.jpg'; import m86 from '../../images/m/86.jpg'; import m87 from '../../images/m/87.jpg';
import m88 from '../../images/m/88.jpg'; import m89 from '../../images/m/89.jpg'; import m90 from '../../images/m/90.jpg';
import m91 from '../../images/m/91.jpg'; import m92 from '../../images/m/92.jpg'; import m93 from '../../images/m/93.jpg';
import m94 from '../../images/m/94.jpg'; import m95 from '../../images/m/95.jpg'; import m96 from '../../images/m/96.jpg';
import m97 from '../../images/m/97.jpg'; import m98 from '../../images/m/98.jpg'; import m99 from '../../images/m/99.jpg';
// import m100 from '../../images/m/100.jpg'; import m101 from '../../images/m/101.jpg'; import m102 from '../../images/m/102.jpg';
// import m103 from '../../images/m/103.jpg'; import m104 from '../../images/m/104.jpg'; import m105 from '../../images/m/105.jpg';
// import m106 from '../../images/m/106.jpg'; import m107 from '../../images/m/107.jpg'; import m108 from '../../images/m/108.jpg';
// import m109 from '../../images/m/109.jpg'; import m110 from '../../images/m/110.jpg'; import m111 from '../../images/m/111.jpg';
// import m112 from '../../images/m/112.jpg'; import m113 from '../../images/m/113.jpg'; import m114 from '../../images/m/114.jpg';
// import m115 from '../../images/m/115.jpg'; import m116 from '../../images/m/116.jpg'; import m117 from '../../images/m/117.jpg';
// import m118 from '../../images/m/118.jpg'; import m119 from '../../images/m/119.jpg'; import m120 from '../../images/m/120.jpg';
// import m121 from '../../images/m/121.jpg'; import m122 from '../../images/m/122.jpg'; import m123 from '../../images/m/123.jpg';
// import m124 from '../../images/m/124.jpg'; import m125 from '../../images/m/125.jpg'; import m126 from '../../images/m/126.jpg';
// import m127 from '../../images/m/127.jpg'; import m128 from '../../images/m/128.jpg'; import m129 from '../../images/m/129.jpg';
// import m130 from '../../images/m/130.jpg'; import m131 from '../../images/m/131.jpg'; import m132 from '../../images/m/132.jpg';
// import m133 from '../../images/m/133.jpg'; import m134 from '../../images/m/134.jpg'; import m135 from '../../images/m/135.jpg';
// import m136 from '../../images/m/136.jpg'; import m137 from '../../images/m/137.jpg'; import m138 from '../../images/m/138.jpg';
// import m139 from '../../images/m/139.jpg'; import m140 from '../../images/m/140.jpg'; import m141 from '../../images/m/141.jpg';


import nm1 from '../../images/nm/1.jpg'; import nm2 from '../../images/nm/2.jpg'; import nm3 from '../../images/nm/3.jpg';
import nm4 from '../../images/nm/4.jpg'; import nm5 from '../../images/nm/5.jpg'; import nm6 from '../../images/nm/6.jpg';
import nm7 from '../../images/nm/7.jpg'; import nm8 from '../../images/nm/8.jpg'; import nm9 from '../../images/nm/9.jpg';
import nm10 from '../../images/nm/10.jpg'; import nm11 from '../../images/nm/11.jpg'; import nm12 from '../../images/nm/12.jpg';
import nm13 from '../../images/nm/13.jpg'; import nm14 from '../../images/nm/14.jpg'; import nm15 from '../../images/nm/15.jpg';
import nm16 from '../../images/nm/16.jpg'; import nm17 from '../../images/nm/17.jpg'; import nm18 from '../../images/nm/18.jpg';
import nm19 from '../../images/nm/19.jpg'; import nm20 from '../../images/nm/20.jpg'; import nm21 from '../../images/nm/21.jpg';
import nm22 from '../../images/nm/22.jpg'; import nm23 from '../../images/nm/23.jpg'; import nm24 from '../../images/nm/24.jpg';
import nm25 from '../../images/nm/25.jpg'; import nm26 from '../../images/nm/26.jpg'; import nm27 from '../../images/nm/27.jpg';
import nm28 from '../../images/nm/28.jpg'; import nm29 from '../../images/nm/29.jpg'; import nm30 from '../../images/nm/30.jpg';
import nm31 from '../../images/nm/31.jpg'; import nm32 from '../../images/nm/32.jpg'; import nm33 from '../../images/nm/33.jpg';
import nm34 from '../../images/nm/34.jpg'; import nm35 from '../../images/nm/35.jpg'; import nm36 from '../../images/nm/36.jpg';
import nm37 from '../../images/nm/37.jpg'; import nm38 from '../../images/nm/38.jpg'; import nm39 from '../../images/nm/39.jpg';
import nm40 from '../../images/nm/40.jpg'; import nm41 from '../../images/nm/41.jpg'; import nm42 from '../../images/nm/42.jpg';
import nm43 from '../../images/nm/43.jpg'; import nm44 from '../../images/nm/44.jpg'; import nm45 from '../../images/nm/45.jpg';
import nm46 from '../../images/nm/46.jpg'; import nm47 from '../../images/nm/47.jpg'; import nm48 from '../../images/nm/48.jpg';
import nm49 from '../../images/nm/49.jpg'; import nm50 from '../../images/nm/50.jpg'; import nm51 from '../../images/nm/51.jpg';
import nm52 from '../../images/nm/52.jpg'; import nm53 from '../../images/nm/53.jpg'; import nm54 from '../../images/nm/54.jpg';
import nm55 from '../../images/nm/55.jpg'; import nm56 from '../../images/nm/56.jpg'; import nm57 from '../../images/nm/57.jpg';
import nm58 from '../../images/nm/58.jpg'; import nm59 from '../../images/nm/59.jpg'; import nm60 from '../../images/nm/60.jpg';
import nm61 from '../../images/nm/61.jpg'; import nm62 from '../../images/nm/62.jpg'; import nm63 from '../../images/nm/63.jpg';
import nm64 from '../../images/nm/64.jpg'; import nm65 from '../../images/nm/65.jpg'; import nm66 from '../../images/nm/66.jpg';
import nm67 from '../../images/nm/67.jpg'; import nm68 from '../../images/nm/68.jpg'; import nm69 from '../../images/nm/69.jpg';
import nm70 from '../../images/nm/70.jpg';



// import userImage from '../../images/9.jpg';

window.mobilenetModule = ''
window.classifier = ''

export default class Detect extends Component {

    async componentDidMount(){
        try{
            
            // Load mobilenet module
            window.mobilenetModule = await mobilenet.load({version: 2, alpha: 1});
            // Add examples to the KNN Classifier
            window.classifier = await this.trainClassifier(window.mobilenetModule);
            if(window.classifier !== '' && typeof window.classifier === 'object'){
                this.setState({ isLearning: false })
                this.enableVideo()
            }
        }
        catch( err ){
            console.log("Unable to train the model")
        }
    }

    componentWillUnmount(){
        this.stop()
        window.mobilenetModule = ''
        window.classifier = ''
    }


    start = async () => {
        if( typeof window.classifier === 'object' && window.mobilenetModule !== '' ){
            // Predict class for the test image
            const testImage = document.getElementById('test-img');
            const tfTestImage = tf.browser.fromPixels(testImage);
            const logits = window.mobilenetModule.infer(tfTestImage, 'conv_preds');
            const prediction = await window.classifier.predictClass(logits);

            if ( prediction.label === 1 || prediction.label === '1' ) { // no mask - red border
                console.log("False")
            } else { // has mask - green border
                console.log("True")
            }
        }
        else{
            console.log("Trained model not ready")
        }
    }

    state = {
        isCameraAccessed: true,
        isLearning: true
    }

    trainClassifier = async (mobilenetModule) => {
        // Create a new KNN Classifier
        const classifier = knnClassifier.create();

        // Train using mask images
        const maskImages = document.querySelectorAll('.mask-img');
        maskImages.forEach(img => {
            const tfImg = tf.browser.fromPixels(img);
            const logits = mobilenetModule.infer(tfImg, 'conv_preds');
            classifier.addExample(logits, 0); // has mask
        });
        // Train using no mask images
        const noMaskImages = document.querySelectorAll('.no-mask-img');
        noMaskImages.forEach(img => {
            const tfImg = tf.browser.fromPixels(img);
            const logits = mobilenetModule.infer(tfImg, 'conv_preds');
            classifier.addExample(logits, 1); // no mask
        });
        return classifier;
    }

    fillImage = () => {
        let canvas = document.getElementById('canvas')
        const testImage = document.getElementById('test-img');
        testImage.src = canvas.toDataURL('image/jpg')
        // let img = canvas.toDataURL('image/jpg')
        setTimeout( () =>{
            this.start()
        }, 200)
    }

    captureVideo = () => {
        var canvas = document.getElementById('canvas');
        var video = document.getElementById('user-video');
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        this.fillImage()
    }

    enableVideo = async () => {
        const constraints = {
            audio: false,
            video: true
        }
        let vid = document.getElementById("user-video")
        const stream = await navigator.mediaDevices.getUserMedia( constraints )
        console.log( stream )
        window.stream = stream
        vid.srcObject = stream
        vid.play()
        if( typeof stream === 'object' ){
            this.setState({ isCameraAccessed: true }, () => {
                
            })
        }
        else{
            this.setState({ isCameraAccessed: false })
        }
    }

    stop = () => {
        try{
            window.stream.getTracks().forEach(function(track) {
                track.stop();
            });
        }
        catch( err ){
            console.log( "Unable to stop the camera." )
        }
    }

    render() {
        return(
            <React.Fragment>
                <Helmet>
                    <title>Detect Mask | {conf.APP_NAME}</title>
                </Helmet>
                {this.state.isLearning ? <Loading /> : null}
                <Header />
                <div className="train-images" style={{'display': 'none'}}>
                    <img src={ m1 } className="mask-img" alt="" />
                    <img src={ m2 } className="mask-img" alt="" />
                    <img src={ m3 } className="mask-img" alt="" />
                    <img src={ m4 } className="mask-img" alt="" />
                    <img src={ m5 } className="mask-img" alt="" />
                    <img src={ m6 } className="mask-img" alt="" />
                    <img src={ m7 } className="mask-img" alt="" />
                    <img src={ m8 } className="mask-img" alt="" />
                    <img src={ m9 } className="mask-img" alt="" />
                    <img src={ m10 } className="mask-img" alt="" />
                    <img src={ m11 } className="mask-img" alt="" />
                    <img src={ m12 } className="mask-img" alt="" />
                    <img src={ m13 } className="mask-img" alt="" />
                    <img src={ m14 } className="mask-img" alt="" />
                    <img src={ m15 } className="mask-img" alt="" />
                    <img src={ m16 } className="mask-img" alt="" />
                    <img src={ m17 } className="mask-img" alt="" />
                    <img src={ m18 } className="mask-img" alt="" />
                    <img src={ m19 } className="mask-img" alt="" />
                    <img src={ m20 } className="mask-img" alt="" />
                    <img src={ m21 } className="mask-img" alt="" />
                    <img src={ m22 } className="mask-img" alt="" />
                    <img src={ m23 } className="mask-img" alt="" />
                    <img src={ m24 } className="mask-img" alt="" />
                    <img src={ m25 } className="mask-img" alt="" />
                    <img src={ m26 } className="mask-img" alt="" />
                    <img src={ m27 } className="mask-img" alt="" />
                    <img src={ m28 } className="mask-img" alt="" />
                    <img src={ m29 } className="mask-img" alt="" />
                    <img src={ m30 } className="mask-img" alt="" />
                    <img src={ m31 } className="mask-img" alt="" />
                    <img src={ m32 } className="mask-img" alt="" />
                    <img src={ m33 } className="mask-img" alt="" />
                    <img src={ m34 } className="mask-img" alt="" />
                    <img src={ m35 } className="mask-img" alt="" />
                    <img src={ m36 } className="mask-img" alt="" />
                    <img src={ m37 } className="mask-img" alt="" />
                    <img src={ m38 } className="mask-img" alt="" />
                    <img src={ m39 } className="mask-img" alt="" />
                    <img src={ m40 } className="mask-img" alt="" />
                    <img src={ m41 } className="mask-img" alt="" />
                    <img src={ m42 } className="mask-img" alt="" />
                    <img src={ m43 } className="mask-img" alt="" />
                    <img src={ m44 } className="mask-img" alt="" />
                    <img src={ m45 } className="mask-img" alt="" />
                    <img src={ m46 } className="mask-img" alt="" />
                    <img src={ m47 } className="mask-img" alt="" />
                    <img src={ m48 } className="mask-img" alt="" />
                    <img src={ m49 } className="mask-img" alt="" />
                    <img src={ m50 } className="mask-img" alt="" />
                    <img src={ m51 } className="mask-img" alt="" />
                    <img src={ m52 } className="mask-img" alt="" />
                    <img src={ m53 } className="mask-img" alt="" />
                    <img src={ m54 } className="mask-img" alt="" />
                    <img src={ m55 } className="mask-img" alt="" />
                    <img src={ m56 } className="mask-img" alt="" />
                    <img src={ m57 } className="mask-img" alt="" />
                    <img src={ m58 } className="mask-img" alt="" />
                    <img src={ m59 } className="mask-img" alt="" />
                    <img src={ m60 } className="mask-img" alt="" />
                    <img src={ m61 } className="mask-img" alt="" />
                    <img src={ m62 } className="mask-img" alt="" />
                    <img src={ m63 } className="mask-img" alt="" />
                    <img src={ m64 } className="mask-img" alt="" />
                    <img src={ m65 } className="mask-img" alt="" />
                    <img src={ m66 } className="mask-img" alt="" />
                    <img src={ m67 } className="mask-img" alt="" />
                    <img src={ m68 } className="mask-img" alt="" />
                    <img src={ m69 } className="mask-img" alt="" />
                    <img src={ m70 } className="mask-img" alt="" />
                    <img src={ m71 } className="mask-img" alt="" />
                    <img src={ m72 } className="mask-img" alt="" />
                    <img src={ m73 } className="mask-img" alt="" />
                    <img src={ m74 } className="mask-img" alt="" />
                    <img src={ m75 } className="mask-img" alt="" />
                    <img src={ m76 } className="mask-img" alt="" />
                    <img src={ m77 } className="mask-img" alt="" />
                    <img src={ m78 } className="mask-img" alt="" />
                    <img src={ m79 } className="mask-img" alt="" />
                    <img src={ m80 } className="mask-img" alt="" />
                    <img src={ m81 } className="mask-img" alt="" />
                    <img src={ m82 } className="mask-img" alt="" />
                    <img src={ m83 } className="mask-img" alt="" />
                    <img src={ m84 } className="mask-img" alt="" />
                    <img src={ m85} className="mask-img" alt="" />
                    <img src={ m86 } className="mask-img" alt="" />
                    <img src={ m87 } className="mask-img" alt="" />
                    <img src={ m88 } className="mask-img" alt="" />
                    <img src={ m89 } className="mask-img" alt="" />
                    <img src={ m90 } className="mask-img" alt="" />
                    <img src={ m91 } className="mask-img" alt="" />
                    <img src={ m92 } className="mask-img" alt="" />
                    <img src={ m93 } className="mask-img" alt="" />
                    <img src={ m94 } className="mask-img" alt="" />
                    <img src={ m95 } className="mask-img" alt="" />
                    <img src={ m96 } className="mask-img" alt="" />
                    <img src={ m97 } className="mask-img" alt="" />
                    <img src={ m98 } className="mask-img" alt="" />
                    <img src={ m99 } className="mask-img" alt="" />
                    {/* <img src={ m100 } className="mask-img" alt="" />
                    <img src={ m101 } className="mask-img" alt="" />
                    <img src={ m102 } className="mask-img" alt="" />
                    <img src={ m103 } className="mask-img" alt="" />
                    <img src={ m104 } className="mask-img" alt="" />
                    <img src={ m105 } className="mask-img" alt="" />
                    <img src={ m106 } className="mask-img" alt="" />
                    <img src={ m107 } className="mask-img" alt="" />
                    <img src={ m108 } className="mask-img" alt="" />
                    <img src={ m109 } className="mask-img" alt="" />
                    <img src={ m110 } className="mask-img" alt="" />
                    <img src={ m111 } className="mask-img" alt="" />
                    <img src={ m112 } className="mask-img" alt="" />
                    <img src={ m113 } className="mask-img" alt="" />
                    <img src={ m114 } className="mask-img" alt="" />
                    <img src={ m115 } className="mask-img" alt="" />
                    <img src={ m116 } className="mask-img" alt="" />
                    <img src={ m117 } className="mask-img" alt="" />
                    <img src={ m118 } className="mask-img" alt="" />
                    <img src={ m119 } className="mask-img" alt="" />
                    <img src={ m120 } className="mask-img" alt="" />
                    <img src={ m121 } className="mask-img" alt="" />
                    <img src={ m122 } className="mask-img" alt="" />
                    <img src={ m123 } className="mask-img" alt="" />
                    <img src={ m124 } className="mask-img" alt="" />
                    <img src={ m125 } className="mask-img" alt="" />
                    <img src={ m126 } className="mask-img" alt="" />
                    <img src={ m127 } className="mask-img" alt="" />
                    <img src={ m128 } className="mask-img" alt="" />
                    <img src={ m129 } className="mask-img" alt="" />
                    <img src={ m130 } className="mask-img" alt="" />
                    <img src={ m131 } className="mask-img" alt="" />
                    <img src={ m132 } className="mask-img" alt="" />
                    <img src={ m133 } className="mask-img" alt="" />
                    <img src={ m134 } className="mask-img" alt="" />
                    <img src={ m135 } className="mask-img" alt="" />
                    <img src={ m136 } className="mask-img" alt="" />
                    <img src={ m137 } className="mask-img" alt="" />
                    <img src={ m138 } className="mask-img" alt="" />
                    <img src={ m139 } className="mask-img" alt="" />
                    <img src={ m140 } className="mask-img" alt="" />
                    <img src={ m141 } className="mask-img" alt="" /> */}

                    
                    <img src={ nm1 } className="no-mask-img" alt="" />
                    <img src={ nm2 } className="no-mask-img" alt="" />
                    <img src={ nm3 } className="no-mask-img" alt="" />
                    <img src={ nm4 } className="no-mask-img" alt="" />
                    <img src={ nm5 } className="no-mask-img" alt="" />
                    <img src={ nm6 } className="no-mask-img" alt="" />
                    <img src={ nm7 } className="no-mask-img" alt="" />
                    <img src={ nm8 } className="no-mask-img" alt="" />
                    <img src={ nm9 } className="no-mask-img" alt="" />
                    <img src={ nm10 } className="no-mask-img" alt="" />
                    <img src={ nm11 } className="no-mask-img" alt="" />
                    <img src={ nm12 } className="no-mask-img" alt="" />
                    <img src={ nm13 } className="no-mask-img" alt="" />
                    <img src={ nm14 } className="no-mask-img" alt="" />
                    <img src={ nm15 } className="no-mask-img" alt="" />
                    <img src={ nm16 } className="no-mask-img" alt="" />
                    <img src={ nm17 } className="no-mask-img" alt="" />
                    <img src={ nm18 } className="no-mask-img" alt="" />
                    <img src={ nm19 } className="no-mask-img" alt="" />
                    <img src={ nm20 } className="no-mask-img" alt="" />
                    <img src={ nm21 } className="no-mask-img" alt="" />
                    <img src={ nm22 } className="no-mask-img" alt="" />
                    <img src={ nm23 } className="no-mask-img" alt="" />
                    <img src={ nm24 } className="no-mask-img" alt="" />
                    <img src={ nm25 } className="no-mask-img" alt="" />
                    <img src={ nm26 } className="no-mask-img" alt="" />
                    <img src={ nm27 } className="no-mask-img" alt="" />
                    <img src={ nm28 } className="no-mask-img" alt="" />
                    <img src={ nm29 } className="no-mask-img" alt="" />
                    <img src={ nm30 } className="no-mask-img" alt="" />
                    <img src={ nm31 } className="no-mask-img" alt="" />
                    <img src={ nm32 } className="no-mask-img" alt="" />
                    <img src={ nm33 } className="no-mask-img" alt="" />
                    <img src={ nm34 } className="no-mask-img" alt="" />
                    <img src={ nm35 } className="no-mask-img" alt="" />
                    <img src={ nm36 } className="no-mask-img" alt="" />
                    <img src={ nm37 } className="no-mask-img" alt="" />
                    <img src={ nm38 } className="no-mask-img" alt="" />
                    <img src={ nm39 } className="no-mask-img" alt="" />
                    <img src={ nm40 } className="no-mask-img" alt="" />
                    <img src={ nm41 } className="no-mask-img" alt="" />
                    <img src={ nm42 } className="no-mask-img" alt="" />
                    <img src={ nm43 } className="no-mask-img" alt="" />
                    <img src={ nm44 } className="no-mask-img" alt="" />
                    <img src={ nm45 } className="no-mask-img" alt="" />
                    <img src={ nm46 } className="no-mask-img" alt="" />
                    <img src={ nm47 } className="no-mask-img" alt="" />
                    <img src={ nm48 } className="no-mask-img" alt="" />
                    <img src={ nm49 } className="no-mask-img" alt="" />
                    <img src={ nm50 } className="no-mask-img" alt="" />
                    <img src={ nm51 } className="no-mask-img" alt="" />
                    <img src={ nm52 } className="no-mask-img" alt="" />
                    <img src={ nm53 } className="no-mask-img" alt="" />
                    <img src={ nm54 } className="no-mask-img" alt="" />
                    <img src={ nm55 } className="no-mask-img" alt="" />
                    <img src={ nm56 } className="no-mask-img" alt="" />
                    <img src={ nm57 } className="no-mask-img" alt="" />
                    <img src={ nm58 } className="no-mask-img" alt="" />
                    <img src={ nm59 } className="no-mask-img" alt="" />
                    <img src={ nm60 } className="no-mask-img" alt="" />
                    <img src={ nm61 } className="no-mask-img" alt="" />
                    <img src={ nm62 } className="no-mask-img" alt="" />
                    <img src={ nm63 } className="no-mask-img" alt="" />
                    <img src={ nm64 } className="no-mask-img" alt="" />
                    <img src={ nm65 } className="no-mask-img" alt="" />
                    <img src={ nm66 } className="no-mask-img" alt="" />
                    <img src={ nm67 } className="no-mask-img" alt="" />
                    <img src={ nm68 } className="no-mask-img" alt="" />
                    <img src={ nm69 } className="no-mask-img" alt="" />
                    <img src={ nm70 } className="no-mask-img" alt="" />


                </div>
                
                <img id="test-img" crossOrigin="anonymous" src=""  style={{'display': 'none'}} alt="" />
                <section>
                    <div className="container mainsection">
                        <div className="row">
                            <div className="col col-12 col-lg-6" style={{'display': 'grid', 'placeItems': 'center'}}>
                                <video src='' className="w-100" id="user-video" controls={ false } autoPlay={ false } style={{'display': this.state.isCameraAccess ? "initial" : 'none'}} />
                                { !this.state.isCameraAccess ? 
                                    <div className="no-cam-cont">
                                        <p data-tip data-for="err-camera">Unable to start the camera</p>
                                        <ReactTooltip place="right" id="err-camera" type="error" place="bottom">
                                            Browser is unable to access the camera.<br />Please check your device cemera and reload the page.
                                        </ReactTooltip>
                                    </div> : null
                                    }
                                <button type="button" className="btn mainbtn mt-2" onClick={ this.captureVideo }>
                                    Capture Image
                                </button>
                                <br />
                            </div>

                            <div className="col col-12 col-lg-6 ">
                                <div className="imgmain">
                                    <canvas id="canvas" className="w-100"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                <img src="" id="test" alt="" />
                </section>
            <Footer />
          </React.Fragment>
        );
    }
}

