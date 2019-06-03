import Vue from 'vue';
// import SectioHeader from './components/section-header.vue';


// var footer = {
//     template:'<p><b>Footer</b></p>'
// };


// let = "abc";
// import HelloComponent from './components/HelloComponent.vue'

function copyToClipboard(text) {
  var input = document.createElement("textarea");
  document.body.appendChild(input);
  input.value = text;
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  // input = null;
}


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
  data: function() {

    let bc = 1;
    return {
      maininput: 'Какой-то текст',
      fontAr: fontAr,
      fontSize: 14,
      fontFamilyList: '',
      selectedFonts: [],
      isBold: false,
      isItalic: false,
      btnCopyLabel: 'Копировать стиль'
    }
  },
  methods: {
    getStyleText: function() {
      let style = '';
      style += `font-size: ${this.fontSize}px; \n`;
      if (this.isItalic) {
        style += 'font-style: italic; \n';
      }
      if (this.isBold) {
        style += 'font-weight: bold; \n';
      }

      style += 'font-family:';
      this.selectedFonts.forEach(function(item) {
        style += ` ,${item}`;
      });

      style += ';';
      style = style.replace(': ,', ': ');
      return style;

    },
    copyStyle: function() {
      let style = this.getStyleText();
      copyToClipboard(style);
      this.btnCopyLabel = 'Скопировано';
      let that = this;
      setTimeout(function(btn) {
        that.btnCopyLabel = 'Копировать стиль';
      }, 1000);
    },
    getFontName: function(name) {
      return name + ', sans-serif;';
    },
    fontSizeInc: function() {
      this.fontSize++;
    },
    fontSizeDec: function() {
      if (this.fontSize != 1)
        this.fontSize--;
    },
    addToSelected: function(item) {
      if (this.selectedFonts.indexOf(item) == -1) {
        this.selectedFonts.push(item);
      }
    },
    removeFromSelected: function(item) {
      let pos = this.selectedFonts.indexOf(item);
      if (pos > -1) {
        this.selectedFonts.splice(pos, 1);
      }
    },
    isSelected: function(item) {
      if (item) {
        return (this.selectedFonts.indexOf(item) != -1);
      } else {
        return false;
      }
    }
  },
  computed: {
    isAbleCopy: function() {
      return this.selectedFonts.length > 0 ? 'btn-success' : 'btn-danger';
    },
    marginBold: function() {
      return this.isItalic ? '100px' : 'unset';
    },
    boldLabel: function() {
      return this.isBold ? 'bold' : 'unset';
    },
    selectedList: function() {
      return this.selectedFonts.join(', ');
    }
  }
}
