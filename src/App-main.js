import Vue from 'vue';
// import SectioHeader from './components/section-header.vue';


// var footer = {
//     template:'<p><b>Footer</b></p>'
// };


// let = "abc";
// import HelloComponent from './components/HelloComponent.vue'
var fontAr = [
'Roboto', 
'Open Sans', 
'Montserrat', 
'Noto Serif SC', 
'Roboto Condensed', 
'Source Sans Pro', 
'Oswald', 
'PT Sans',
'Roboto Slab',
'Merriweather',
'Noto Sans', 
'Ubuntu', 
'Open Sans Condensed', 
'Playfair Display',
'Roboto Mono', 
'Lora',
'PT Serif',
'Arimo', 
'PT Sans Narrow', 
'Fira Sans', 
'Noto Serif',
'Rubik', 
'Lobster', 
'Exo 2',
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
'Impact' 
]
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
  		maininput: 'Какой-то текст',
  		fontAr: fontAr,
  		fontSize: 14,
      fontFamilyList: '',
      selectedFonts: [],
      isBold: false,
      isItalic: false
  	}
  },
  methods:
  {
    getFontName: function(name)
    {
      return name + ', sans-serif;';
    },
    fontSizeInc: function()
    {
      this.fontSize++;
    },
    fontSizeDec: function()
    {
      if(this.fontSize != 1)
      this.fontSize--;
    },
    addToSelected: function(item)
    {
      if(this.selectedFonts.indexOf(item) == -1 )
      {
          this.selectedFonts.push(item);
      }
    },
    removeFromSelected: function(item)
    {
      let pos = this.selectedFonts.indexOf(item);
      if(pos > -1)
      {
        this.selectedFonts.splice(pos, 1);
      }
    }
    ,
    isSelected: function(item)
    {
      if(item)
      {
        return (this.selectedFonts.indexOf(item) != -1 );
      }else {
        return false;
      }
    }
  },
   computed: {
    selectedList: function()
    {
      return this.selectedFonts.join(', ');
    }
   }
}