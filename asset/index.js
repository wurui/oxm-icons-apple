define(['zepto','oxm/oxmjs-flip/1.0.1/asset/index'],function(undef,Flip){
  //console.log(typeof Flip)
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
      Flip.init(mod,{
        //wrap:mod.children('div'),
        classes:{
          flipPage:'icon-page',
          flipWindow:'marquee-win',
          transition:'transition'
        }
      })

    }
  }
})
