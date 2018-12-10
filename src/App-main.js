import Vue from 'vue';
// import SectioHeader from './components/section-header.vue';


// var footer = {
//     template:'<p><b>Footer</b></p>'
// };


// let = "abc";
// import HelloComponent from './components/HelloComponent.vue'
var fontAr = [
'Arial',
'Helvetica',
'Times New Roman',
'Times',
'Courier New',
'Courier',
'Verdana',
'Georgia',
'Palatino',
'Garamond',
'Bookman',
'Comic Sans MS',
'Trebuchet MS',
'Arial Black',
'Impact']
export default {
    // components:{
    //     'section-footer':footer
    // },
    // components:{
    // 	SectionHeader
    // },
  data: function()
  {

  	let bc = 1;
  	return {
  		maininput: '',
  		fontAr: fontAr,
  		fontSize: 14
  	}
  }
}