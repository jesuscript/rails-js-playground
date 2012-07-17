$ = jQuery;

TheMostUsefulPlugin = function(el,opt){
  //click_count
  //extend options
  //call move and recolour
  //onclick event
};

options = {};

$.fn.theMostUsefulPlugin = function(options){
  return this.each(function(){
    new TheMostUsefulPlugin($(this),options);
  });
}
