define(['zepto'],function(undef){

  var log=function(s){
    var $log=$('#log');
    if(!$log.length){
      $log=$('<div id="log" style="position: fixed;height: 20px;top:0;color:red;"></div>').appendTo('body')
    }
    $log.html(s)
  };
  return {
    init:function(mod){//alert(1)
      //console.log(mod.attr('ox-mod'),'init')
      //mod.css({'border':'solid 1px red'})
      var wrap=this.wrap= mod.children('div'),
          that=this;
      this.count=wrap.find('.icon-page').length;
      //this.play();

       mod.on('swipeLeft swipeRight',function(e){
        // log(e.type)
        that.go(e.type =='swipeLeft'?1:-1)
      })

    },
    go:function(direction){
      if(!this.count) return this;

      direction=(direction||1)>0?1:-1;

      //this.currentIndex+;

      this.currentIndex=Math.max(0,Math.min(this.count-1,this.currentIndex+direction))


      this.wrap.attr('data-on',(this.currentIndex+1));
    },
    currentIndex:0,
    play:function(){
      if(!this.count) return this;
      this.currentIndex++;

      this.currentIndex=this.currentIndex%this.count;

      this.wrap.attr('data-on',(this.currentIndex+1));

      var _this=this;

      setTimeout(function(){
        _this.play();
      },3000)

      return this;
    }
  }
})
