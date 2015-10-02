(function(ctx){

	var start_freq 	= 100,
		step_freq 	= 10;

	var dico = {

		name: 'alphabet',

		translate: function( message ){

			var list = [],
				length = message.length, one;

			for(var j=0; j<length; j++){
				list.push(self.get(message[j]));
			}

			return list;
		},
		get: function( letter ){

			// a=97
			var ascii 			= letter.charCodeAt(0);
			var first_letter 	= 32;
			var result 			= start_freq + ((ascii - first_letter) * step_freq);
			return result;
		}		
	};

	ctx.add(dico);
	var self = dico;

})(c2c.dictionnary);