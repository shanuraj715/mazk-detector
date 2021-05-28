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


import m1 from '../../images/m/1.jpg'
import m2 from '../../images/m/2.jpg'
import m3 from '../../images/m/3.jpg'
import m4 from '../../images/m/4.jpg'
import m5 from '../../images/m/5.jpg'
import m6 from '../../images/m/6.jpg'
import m7 from '../../images/m/7.jpg'
import m8 from '../../images/m/8.jpg'
import m9 from '../../images/m/9.jpg'
import m10 from '../../images/m/10.jpg'
import m11 from '../../images/m/11.jpg'
import m12 from '../../images/m/12.jpg'
import m13 from '../../images/m/13.jpg'
import m14 from '../../images/m/14.jpg'
import m15 from '../../images/m/15.jpg'
import m16 from '../../images/m/16.jpg'
import m17 from '../../images/m/17.jpg'
import m18 from '../../images/m/18.jpg'
import m19 from '../../images/m/19.jpg'
import m20 from '../../images/m/20.jpg'
import m21 from '../../images/m/21.jpg'
import m22 from '../../images/m/22.jpg'
import m23 from '../../images/m/23.jpg'
import m24 from '../../images/m/24.jpg'
import m25 from '../../images/m/25.jpg'
import m26 from '../../images/m/26.jpg'
import m27 from '../../images/m/27.jpg'
import m28 from '../../images/m/28.jpg'
import m29 from '../../images/m/29.jpg'
import m30 from '../../images/m/30.jpg'
import m31 from '../../images/m/31.jpg'
import m32 from '../../images/m/32.jpg'
import m33 from '../../images/m/33.jpg'
import m34 from '../../images/m/34.jpg'
import m35 from '../../images/m/35.jpg'
import m36 from '../../images/m/36.jpg'
import m37 from '../../images/m/37.jpg'
import m38 from '../../images/m/38.jpg'
import m39 from '../../images/m/39.jpg'
import m40 from '../../images/m/40.jpg'


import nm1 from '../../images/nm/1.jpg'
import nm2 from '../../images/nm/2.jpg'
import nm3 from '../../images/nm/3.jpg'
import nm4 from '../../images/nm/4.jpg'
import nm5 from '../../images/nm/5.jpg'
import nm6 from '../../images/nm/6.jpg'
import nm7 from '../../images/nm/7.jpg'
import nm8 from '../../images/nm/8.jpg'
import nm9 from '../../images/nm/9.jpg'
import nm10 from '../../images/nm/10.jpg'
import nm11 from '../../images/nm/11.jpg'
import nm12 from '../../images/nm/12.jpg'
import nm13 from '../../images/nm/13.jpg'
import nm14 from '../../images/nm/14.jpg'
import nm15 from '../../images/nm/15.jpg'
import nm16 from '../../images/nm/16.jpg'
import nm17 from '../../images/nm/17.jpg'
import nm18 from '../../images/nm/18.jpg'
import nm19 from '../../images/nm/19.jpg'
import nm20 from '../../images/nm/20.jpg'
import nm21 from '../../images/nm/21.jpg'
import nm22 from '../../images/nm/22.jpg'
import nm23 from '../../images/nm/23.jpg'
import nm24 from '../../images/nm/24.jpg'
import nm25 from '../../images/nm/25.jpg'
import nm26 from '../../images/nm/26.jpg'
import nm27 from '../../images/nm/27.jpg'
import nm28 from '../../images/nm/28.jpg'
import nm29 from '../../images/nm/29.jpg'
import nm30 from '../../images/nm/30.jpg'
import nm31 from '../../images/nm/31.jpg'
import nm32 from '../../images/nm/32.jpg'
import nm33 from '../../images/nm/33.jpg'
import nm34 from '../../images/nm/34.jpg'
import nm35 from '../../images/nm/35.jpg'
import nm36 from '../../images/nm/36.jpg'
import nm37 from '../../images/nm/37.jpg'
import nm38 from '../../images/nm/38.jpg'
import nm39 from '../../images/nm/39.jpg'
import nm40 from '../../images/nm/40.jpg'


import userImage from '../../images/9.jpg'

window.mobilenetModule = ''
window.classifier = ''

export default class Detect extends Component {


    something = {
        "MYNAME": 'SHANU'
    } 

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
        try{
            window.stream.getTracks().forEach(function(track) {
                track.stop();
            });
        }
        catch( err ){
            console.log( err )
        }
        
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
                { this.state.isLearning ? <Loading /> : null }
            </React.Fragment>
        )
    }
}

