//= require jquery
//= require good

/* NOT USED */
// require reallyBad

(function($){
  $(document).ready(function(){
    //$("h1").theMostUsefulPlugin();
    $("#first").theMostUsefulPlugin({
      afterMove: function(){
        this.$el.css({
          "font-size" : "50px"
        });
      }
    });
    $("#second").theMostUsefulPlugin({
      color: "#00f"
    });
  });

})(jQuery);
