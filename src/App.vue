<template>
        <div id="fonttable" class="container fonttable">
            <div class="page-header">
                <div>
                    <div class="row">
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-1">
                            Размер
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <input name="maininput" placeholder="Начните печатать текст" type="text" v-model='maininput'>
                            </input>
                        </div>
                        <div class="col-md-1">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 fontelem">
                  <div class="row fontname pd5">
                    Verdana
                  </div>
                  <div class="row text">
                    {{maininput}}
                  </div>
                  <div class="row">
                    <div class="col-md-11">
                      
                    </div>
                    <div class="col-md">
                      <button>+</button>
                    </div>
                  </div>
                </div>      
                <div class="col-md-4">
                </div>
                <div class="col-md-4">
                </div>                                                        
            </div>
        </div>
</template>

<!-- https://itnext.io/@petrefax66 -->

<script>
let = "abc";
// import HelloComponent from './components/HelloComponent.vue'
export default {
  // components: {
  //   HelloComponent
  // }
  data: function()
  {
  	return {
  		maininput: 'ewr'
  	}
  }
}
</script>