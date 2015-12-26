$(document).ready(function(){
			$("#010").on({
			    mouseenter: function(){
			      $(this).addClass("active red");
			    },
			    mouseleave: function(){
			      $(this).removeClass("active red");
			    },
			    click: function(){
			      $('.ui.labeled.icon.sidebar')
  					.sidebar('toggle')
					;}
			  });

			$("#020").on({
			    mouseenter: function(){
			      $(this).addClass("active pink");
			    },
			    mouseleave: function(){
			      $(this).removeClass("active pink");
			    },
			    click: function(){
			      $('html,body').animate({scrollTop:$('#channle').offset().top},600);
			    }
			  });

			$("#030").on({
			    mouseenter: function(){
			      $(this).addClass("active green");
			    },
			    mouseleave: function(){
			      $(this).removeClass("active green");
			    },
			    click: function(){
			      $('html,body').animate({scrollTop:$('#com').offset().top},600);
			    }
			  });

			$("#home").on({
			    mouseenter: function(){
			      $(this).addClass("active purple");
			    },
			    mouseleave: function(){
			      $(this).removeClass("active purple");
			    },
			    click: function(){
			      $('html,body').animate({scrollTop:$('#photoSlide').offset().top},600);
			    }
			  });

			$("#block").on({
			    mouseenter: function(){
			      $(this).addClass("active brown");
			    },
			    mouseleave: function(){
			      $(this).removeClass("active brown");
			    },
			    click: function(){
			      $('html,body').animate({scrollTop:$('#selfIntroduction').offset().top},600);
			    }
			  });

			$("#smile").on({
			    mouseenter: function(){
			      $(this).addClass("active olive");
			    },
			    mouseleave: function(){
			      $(this).removeClass("active olive");
			    },
			    click: function(){
			      $('html,body').animate({scrollTop:$('#people').offset().top},600);
			    }
			  });


			$("#011").on({
			    mouseenter: function(){
			      $(this).addClass("animated rubberBand");
			    },
			    mouseleave: function(){
			      $(this).removeClass("animated rubberBand");
			    },
			});

			$("#021").on({
			    mouseenter: function(){
			      $(this).addClass("animated rubberBand");
			    },
			    mouseleave: function(){
			      $(this).removeClass("animated rubberBand");
			    },
			});

			$("#031").on({
			    mouseenter: function(){
			      $(this).addClass("animated rubberBand");
			    },
			    mouseleave: function(){
			      $(this).removeClass("animated rubberBand");
			    },
			});

			$("#041").on({
			    mouseenter: function(){
			      $(this).addClass("animated rubberBand");
			    },
			    mouseleave: function(){
			      $(this).removeClass("animated rubberBand");
			    },
			});

			$("#051").on({
			    mouseenter: function(){
			      $(this).addClass("animated rubberBand");
			    },
			    mouseleave: function(){
			      $(this).removeClass("animated rubberBand");
			    },
			});

			$("#061").on({
			    mouseenter: function(){
			      $(this).addClass("animated rubberBand");
			    },
			    mouseleave: function(){
			      $(this).removeClass("animated rubberBand");
			    },
			});







	});
