import * as THREE from '../build/three.module.js';
import { orbitControls } from './jsm/controls/orbitControls.js';

// DATA IMPORT
let data = []; // an array to store the data 
let xhttp = new XMLHttpRequest(); // to fetch data from local storage in nodejs
xhttp.onreadystatechange =  function() {
    if(this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText); // bc i'm trying to parse a json file
        let outPut = Object.values(response);
        for(let i=0; i<outPut.length; i++) {
            data.push(outPut[i]); // all the data/values from outPut will be pushed to the data array
        }
    }
};
xhttp.open("GET", "../DATA/Final_data.json", true); // telling where xhttp is stored. Get response since we're grabbing the data. True here means either render the data straight away or when there's interactivity like clicking a button. This true assumes there's no interactivity needed to get the data
xhttp.send();
