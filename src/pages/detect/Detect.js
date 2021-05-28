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


import m1 from '../../images/mask/1.jpg'
import m2 from '../../images/mask/2.jpg'
import m3 from '../../images/mask/3.jpg'
import m4 from '../../images/mask/4.jpg'
import m5 from '../../images/mask/5.jpg'
import m6 from '../../images/mask/6.jpg'
import m7 from '../../images/mask/7.jpg'
import m8 from '../../images/mask/8.jpg'
import m9 from '../../images/mask/9.jpg'
import m10 from '../../images/mask/10.jpg'
import m11 from '../../images/mask/11.jpg'
import m12 from '../../images/mask/12.jpg'
// import m13 from '../../images/mask/13.jpg'
// import m14 from '../../images/mask/14.jpg'

import nm1 from '../../images/no_mask/1.jpg'
import nm2 from '../../images/no_mask/2.jpg'
import nm3 from '../../images/no_mask/3.jpg'
import nm4 from '../../images/no_mask/4.jpg'
import nm5 from '../../images/no_mask/5.jpg'
import nm6 from '../../images/no_mask/6.jpg'
import nm7 from '../../images/no_mask/7.jpg'
import nm8 from '../../images/no_mask/8.jpg'
import nm9 from '../../images/no_mask/5.jpg'
import nm10 from '../../images/no_mask/10.jpg'
import nm11 from '../../images/no_mask/11.jpg'
import nm12 from '../../images/no_mask/12.jpg'
// import nm13 from '../../images/no_mask/13.jpg'
// import nm14 from '../../images/no_mask/14.jpg'
// import nm15 from '../../images/no_mask/15.jpg'

import userImage from '../../images/9.jpg'

window.mobilenewModule = ''
window.classifier = ''

export default class Detect extends Component {

    async componentDidMount(){

        // Load mobilenet module
        window.mobilenetModule = await mobilenet.load({version: 2, alpha: 1});
        // Add examples to the KNN Classifier
        window.classifier = await this.trainClassifier(window.mobilenetModule);
        if(window.classifier !== '' && typeof window.classifier === 'object'){
            this.setState({ isLearning: false })
            this.enableVideo()
        }
    }

    componentWillUnmount(){
        this.stop()
        window.mobilenetModule = ''
        window.classifier = ''
    }

    start = async () => {
        

        // Predict class for the test image
        const testImage = document.getElementById('test-img');
        const tfTestImage = tf.browser.fromPixels(testImage);
        const logits = window.mobilenetModule.infer(tfTestImage, 'conv_preds');
        const prediction = await window.classifier.predictClass(logits);

        // Add a border to the test image to display the prediction result
        if (prediction.label == 1) { // no mask - red border
            console.log("False")
        } else { // has mask - green border
            console.log("True")
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
        console.log( classifier )
        return classifier;
    }

    fillImage = () => {
        let image = document.getElementById('test')
        let canvas = document.getElementById('canvas')
        // let ctx = canvas.getContext('2d')
        let img_data = canvas.toDataURL("image/jpg")
        image.src = img_data
        

        const testImage = document.getElementById('test-img');
        testImage.src = canvas.toDataURL('image/jpg')
        let img = canvas.toDataURL('image/jpg')
        setTimeout( () =>{

            this.start()
        }, 280)
    }

    captureVideo = () => {
        var canvas = document.getElementById('canvas');
        var video = document.getElementById('user-video');
        
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

        this.fillImage()
    }

    enableVideo = async () => {
        let vid = document.getElementById("user-video")
        const constraints = {
            audio: false,
            video: true
        }
        try{
            const stream = await navigator.mediaDevices.getUserMedia( constraints )
            window.stream = stream
            console.log( window.stream )
            vid.srcObject = stream
            vid.play()
        }
        catch( e ){

        }
    }

    stop = () => {
        window.stream.getTracks().forEach(function(track) {
            track.stop();
        });
    }

    render() {
        return(
            <React.Fragment>
                {/* { consoel.log( typeof window.)} */}
                
                <Helmet>
                    <title>Detect Mask | {conf.APP_NAME}</title>
                </Helmet>
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


                </div>
                <img id="test-img" crossOrigin="anonymous" src={ userImage }  style={{'width': '200px'}} />
                <section>
                    <div className="container mainsection">
                        <div className="row">
                            <div className="col col-12 col-lg-6" style={{'display': 'grid', 'placeItems': 'center'}}>
                                
                                <video src='' className="w-100" id="user-video" controls={ true } autoPlay={ false } />
                                <button type="button" className="btn mainbtn mt-2" onClick={ this.captureVideo }>
                                    Capture Image
                                </button>
                                <br />
                            </div>

                            <div className="col col-12 col-lg-6 ">
                                <div className="imgmain">
                                    <canvas id="canvas" className="w-100"></canvas>
                                {/* <img src={Mainbg} className="img-fluid homecol" id="user-img" alt="..." /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                <img src="" id="test" />
                </section>
            <Footer />
            {this.state.isLearning ? <Loading /> : null}
          </React.Fragment>
        );
    }
}

