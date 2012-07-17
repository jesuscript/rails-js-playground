$ = jQuery;

function TheMostUsefulPlugin(el,opt){
  click_count = 0;
  self = this;

  $el = el

  $.extend(options, opt);

  move();
  recolour();

  $el.click(function(e){
    click_count++;
    $el.text("Clicked " + click_count + " times");
  });
};

options = {
  color: "#FF0000",
  afterMove: function(){
    $el.text("Thanks for moving me!");
  }
};

function move(){
  var self = this;

  $el.animate({
    top: $(document).height() / 2 - $el.height() / 2,
    left: $(document).width() / 2 - $el.width() / 2
  },1000,function(){
    options.afterMove();
  });
};

function recolour(){
  $el.css({
    color: options.color
  });
};


$.fn.theMostUsefulPlugin = function(options){
  return this.each(function(){
    new TheMostUsefulPlugin($(this),options);
  });
}



