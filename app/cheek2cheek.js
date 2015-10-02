(function(ctx){

	'use strict';

	var message = '',
		freq_list = [],
		pt = 0,
		speed_frequency = 10;

	var app = {

		init: function(){

			self.audio.init().onNoteOff(next_step);
			self.dictionnary.init();

			log('cheek2cheek is ready to love <3');
		},

		set_dictionnary: function( name ){

			self.dictionnary.use(name);
			return this;
		},

		set_message: function( str ){

			message = str;
			return this;
		},

		prepare: function(){

			freq_list = self.dictionnary.translate(message);
			message = '';
			pt = 0;

			return this;
		},

		transmit: function(){

			self.audio.start();
			emit_sound();
			return this;
		}
	};

	ctx.c2c 	= app;
	var self  	= app;


	function emit_sound(){

		self.audio.play(freq_list[pt], speed_frequency);
	}

	function next_step(){

		pt++;
		if(pt<freq_list.length){
			emit_sound();
		}else{
			self.audio.stop();
		}
	}

	window.log = function(m){
		console.log(m);
	};

})(window);