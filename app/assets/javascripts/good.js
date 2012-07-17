(function($){
  TheMostUsefulPlugin = function(el,opt){
    var click_count = 0;
    var self = this;

    this.$el = el

    if(opt !== undefined && opt !== null){
      this.options = $.extend({},this.options, opt);
    }

    this.move();
    this.recolour();

    this.$el.click(function(e){
      click_count++;
      self.$el.text("Clicked " + click_count + " times");
    });
  };

  TheMostUsefulPlugin.prototype.options = {
    color: "#FF0000",
    afterMove: function(){
      this.$el.text("Thanks for moving me!");
    }
  };

  TheMostUsefulPlugin.prototype.move = function(){
    var self = this;

    this.$el.animate({
      top: $(document).height() / 2 - this.$el.height() / 2,
      left: $(document).width() / 2 - this.$el.width() / 2
    },1000,function(){
      self.options.afterMove.call(self);
    });
  };

  TheMostUsefulPlugin.prototype.recolour = function(){
    this.$el.css({
      color: this.options.color
    });
  };


  $.fn.theMostUsefulPlugin = function(options){
    return this.each(function(){
      new TheMostUsefulPlugin($(this),options);
    });
  }
})(jQuery);
