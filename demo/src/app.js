/**
 * Created by dengjian on 2017-05-06.
 */
import Layer from './components/layer/layer.js';
import './css/common.css';
const  App = function(){
    var dom = document.getElementById('app');
    var layer = new Layer();

    dom.innerHTML = layer.tpl({
        name: 'John',
        arr: ['apple','mi','huawei']
    });

};

new App();