(function(ctx){

	var context,
		osc, gain, volume, note_length,
		note_off_callback;

	var audio = {

		init: function(){

			context = new (window.AudioContext || window.webkitAudioContext)();

			// oscillator node
			osc 				= context.createOscillator();	
			osc.type 			= 'square';		

			// gain node
			gain 				= context.createGain();			

			osc.connect(gain);
			gain.connect(context.destination);

			gain.gain.value = 0;
			osc.start(0);

			volume 		= 0.1;
			note_length = 500;

			self.setNote(10);

			log('cheek2cheek.audio is rooted and ready');

			return this;
		},

		onNoteOff: function( callback ){

			note_off_callback = callback;
			return this;
		},

		setGain: function( v ){

			volume = v;
			return this;
		},

		setNote: function( freq ){

			osc.frequency.setValueAtTime( freq, 0 );
			return this;
		},

		setNoteLength: function( milliseconds ){

			note_length = milliseconds;
			return this;
		},

		play: function(freq, length){

			self.setNote(freq);

			var l = (length) ? length : note_length;
			window.setTimeout(on_note_off, l);

			log(freq+' '+length);
		},

		start:  function(){

			gain.gain.value = volume;
			return this;
		},
		stop: function(){

			context.suspend();
			return this;
		},
		pause: function(){

			gain.gain.value = 0;
			return this;
		}
	};

	ctx.audio = audio;
	var self  = audio;

	function on_note_off(){

		if(note_off_callback){
			note_off_callback();
		}else{
			self.pause();
		}
	}

})(c2c);