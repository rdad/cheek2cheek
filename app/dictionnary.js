(function(ctx){

	var list = {};
	var target_name;

	var dictionnary = {

		init: function(){

			log('cheek2cheek.dictionnary is ready');
		},

		add: function(dico){

			list[dico.name] = dico;
			log('cheek2cheek.dictionnary add "'+dico.name+'" to the list');
		},

		use: function( name ){

			target_name = name;
			return this;
		},

		translate: function( message ){
			return list[target_name].translate( message );
		}	
	};

	ctx.dictionnary = dictionnary;
	var self  		= dictionnary;

})(c2c);