var Othello = function(){
	this.player		= 'black';
	this.mode 		= 'single';
	this.highlight 	= false;
	this.north 		= -8;
	this.northEast 	= -7;
	this.east 		= 1;
	this.southEast	= 9;
	this.south 		= 8;
	this.southWest	= 7;
	this.west 		= -1;
	this.northWest	= -9;

	this.init();
}

Othello.prototype.init = function(){
	for (var i = 0; i < 64; i++) {
		$('#board-inner').append('<div class="tile" id="'+i+'"></div>');
		if (i == 27 ||  i == 36) {
			$('.tile').eq(i).append('<div class="counter black"><div class="counter-flipper"><div class="white"></div><div class="black"></div></div></div>');
		} else if (i == 28 || i == 35) {
			$('.tile').eq(i).append('<div class="counter white"><div class="counter-flipper"><div class="white"></div><div class="black"></div></div></div>');
		}
	}

	this.gameSelectionEvents();
	this.tileEvents();
	this.updatePlayer();
	this.highlightMoves();
}

Othello.prototype.gameSelectionEvents = function(){
	var self = this;
	$('.single').on('click', function(){
		self.mode = 'single';
		$('.mode-change').text('(Computer)');
		$('#splash-screen').hide();
	});

	$('.multi').on('click', function(){
		self.mode = 'multi';
		$('.mode-change').text('(Human)');
		$('#splash-screen').hide();
	});
}

Othello.prototype.highlightMoves = function(){
	if (this.highlight != false) {
		// Check which moves are available
		var tiles = this.moveCheck();
		// Remove highlight class from all tiles
		$('.tile').removeClass('highlight');
		for (var i = 0; i < Object.keys(tiles).length; i++) {
			$('.tile').eq(Object.keys(tiles)[i]).addClass('highlight');
		}
	}

}

Othello.prototype.moveCheck = function(id){
	// Occasionally says that tile 0 is playable when it isn't
	if (id != undefined) {
		var length = 1;
	} else {
		var length = 64;
	}
	var	allToTurn	= {};

	for (var i = 0; i < length; i++) {
		var tempTurn 	= [],
			toTurn 		= [],
			valid 		= false;

		if (length > 1) {
			var id = i;
		}

		if (!$('.tile').eq(id).find('.counter').length > 0) {
			// Checks
			// North
			var northCounter = id + this.north;
			while (northCounter >= 0 && northCounter != null) {
				if ($('.tile').eq(northCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(northCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(northCounter);
						northCounter += this.north;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						northCounter = null;
					}
				} else {
					tempTurn = [];
					northCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// NorthEast
			var northEastCounter = id + this.northEast;
			while (northEastCounter > 0 && northEastCounter % 8 != 0 && northEastCounter != null) {
				if ($('.tile').eq(northEastCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(northEastCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(northEastCounter);
						northEastCounter += this.northEast;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						northEastCounter = null;
					}
				} else {
					tempTurn = [];
					northEastCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// East
			var eastCounter = id + this.east;
			while (eastCounter % 8 != 0 && eastCounter != null) {
				if ($('.tile').eq(eastCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(eastCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(eastCounter);
						eastCounter += this.east;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						eastCounter = null;
					}
				} else {
					tempTurn = [];
					eastCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// SouthEast
			var southEastCounter = id + this.southEast;
			while (southEastCounter < 64 && southEastCounter % 8 != 0 && southEastCounter != null) {
				if ($('.tile').eq(southEastCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(southEastCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(southEastCounter);
						southEastCounter += this.southEast;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						southEastCounter = null;
					}
				} else {
					tempTurn = [];
					southEastCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// South
			var southCounter = id + this.south;
			while (southCounter < 64 && southCounter != null) {
				if ($('.tile').eq(southCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(southCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(southCounter);
						southCounter += this.south;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						southCounter = null;
					}
				} else {
					tempTurn = [];
					southCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// SouthWest
			var southWestCounter = id + this.southWest;
			while (southWestCounter < 64 && southWestCounter % 8 != 7 && southWestCounter != null) {
				if ($('.tile').eq(southWestCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(southWestCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(southWestCounter);
						southWestCounter += this.southWest;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						southWestCounter = null;
					}
				} else {
					tempTurn = [];
					southWestCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// West
			var westCounter = id + this.west;
			while (westCounter >= 0 && westCounter % 8 != 7 && westCounter != null) {
				if ($('.tile').eq(westCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(westCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(westCounter);
						westCounter += this.west;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						westCounter = null;
					}
				} else {
					tempTurn = [];
					westCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			// NorthWest
			var northWestCounter = id + this.northWest;
			while (northWestCounter >= 0 && northWestCounter % 8 != 7 && northWestCounter != null) {
				if ($('.tile').eq(northWestCounter).find('.counter').length > 0) {
					if (!$('.tile').eq(northWestCounter).find('.counter').hasClass(this.player)) {
						tempTurn.push(northWestCounter);
						northWestCounter += this.northWest;
					} else {
						for (var j = 0; j < tempTurn.length; j++) {
							toTurn.push(tempTurn[j]);
						}
						valid = true;
						tempTurn = [];
						northWestCounter = null;
					}
				} else {
					tempTurn = [];
					northWestCounter = null;
				}
			}
			if (valid == false) {
				tempTurn = [];
			} else {
				valid = false;
			}

			if (length > 1 && toTurn.length > 0) {
				allToTurn[i] = toTurn;
			}
		}
	}

	if (length > 1) {
		return allToTurn;
	} else {
		return toTurn;
	}
}

Othello.prototype.turnTiles = function(toTurn){
	for (var i = 0; i < toTurn.length; i++) {
		var delay = 0.1*i;
		$('.tile').eq(toTurn[i]).find('.counter-flipper').css('-webkit-transition-delay', delay+'s')
														.css('-moz-transition-delay', delay+'s')
														.css('-ms-transition-delay', delay+'s')
														.css('-o-transition-delay', delay+'s')
														.css('transition-delay', delay+'s');
		$('.tile').eq(toTurn[i]).find('.counter').removeClass().addClass('counter ' + this.player);
	}
	toTurn = [];
	this.player = (this.player == 'black' ? 'white' : 'black');
	this.updateScores();
	this.updatePlayer();
	$('.hover-counter').removeClass('black white').addClass(this.player);
};

Othello.prototype.tileEvents = function(){
	var self = this;

	$('#board, .hover-counter').on('mousemove mouseover', function(e){
		var x 		= e.clientX,
			y 		= e.clientY,
			size 	= $('.counter').eq(0).width();

		$('.hover-counter').addClass('show ' + self.player).css({'top':y - size / 2,'left':x - size / 2,'width':size,'height':size});
		$('body').css({'cursor':'none'});
	}).on('mouseout', function(){
		$('.hover-counter').removeClass('show');
		$('body').css({'cursor':'default'});
	});

	$(document.body).on('click touchstart', '.tile', function(){
		var $this = $(this);

		if ($this.find('.counter').length > 0) {
			self.notify("error", "Stop that!!", 2000);
			return;
		}

		// Check which moves are available
		var toTurn = self.moveCheck(parseInt($this.attr('id')));

		if (toTurn.length == 0) {
			self.notify("error", "You can't go here.", 2000);
		} else {
			$this.append('<div class="counter ' + self.player + '"><div class="counter-flipper"><div class="white"></div><div class="black"></div></div></div>');
			self.turnTiles(toTurn);

			if (self.mode == 'single') {
				if (self.player != 'black') {
					self.computersGo();
				}
			} else if (self.mode == 'multi') {
				var moves = self.moveCheck();
				if (Object.keys(moves).length == 0 && $('.tile .counter').length != 64) {
					self.skip();
				}
			}
		}

		setTimeout(function(){
			if ($('.tile .counter').length == 64) {
				self.endGame();
			}
		},1510);
	});
}

Othello.prototype.computersGo = function(){
	var self 	= this,
		moves 	= self.moveCheck();
	if (Object.keys(moves).length > 0) {// Computer can move
		var prev = '';
		var largest = '';
		for (key in moves) {
			if (prev == '') {
				prev = key;
				largest = key;
			} else {
				if (key.length > prev.length) {
					largest = key;
				} else {
					largest = prev;
				}
			}
		}

		setTimeout(function(){
			$('.tile').eq(largest).append('<div class="counter ' + self.player + '"><div class="counter-flipper"><div class="white"></div><div class="black"></div></div></div>');
			self.turnTiles(moves[largest]);

			var moves2 = self.moveCheck();
			if (Object.keys(moves2).length == 0 && $('.tile .counter').length != 64) {
				self.skip();
			}

		},1000);

	} else {// Computer can't move
		if ($('.tile .counter').length != 64) {
			self.skip();
		}
	}
}

Othello.prototype.skip = function(){
	var self = this;
	self.notify("error", "No moves available, skipping go.", 2000);
	self.player = (self.player == 'black' ? 'white' : 'black');
	setTimeout(function(){
		$('.hover-counter').removeClass('black white').addClass(self.player);
		$('.player').removeClass('active');
		$('.player.'+self.player).addClass('active');
		if (self.mode == 'single') {
			if (self.player != 'black') {
				self.computersGo();
			}
		}
	},2000);
}

Othello.prototype.updateScores = function(){
	var whites = $('.counter.white').length,
		blacks = $('.counter.black').length;
	$('.player.white p').text(whites);
	$('.player.black p').text(blacks);
	if (whites == 0 || blacks == 0) {
		this.endGame();
	}
}

Othello.prototype.updatePlayer = function(){
	$('.player').removeClass('active');
	$('.player.'+this.player).addClass('active');
}

Othello.prototype.notify = function(type, message, duration){
	// Clear the previous notification
	clearTimeout(this.timeout);
	$('.notify-container .notification').remove();

	var duration = duration ? duration : 0;
	$('.notify-container').append('<div class="notification '+type+'">'+message+'</div>');
	this.timeout = setTimeout(function(){
		$('.notify-container .notification').remove();
	},duration);
}

Othello.prototype.endGame = function(){
	var whites = $('.counter.white').length,
		blacks = $('.counter.black').length;

	$('#winner-screen').removeClass('black white');

	if (whites > blacks) {
		$('.winning-player').text('White');
		$('.winning-score').text(whites);
		$('#winner-screen').addClass('show white');
	} else {
		$('.winning-player').text('Black');
		$('.winning-score').text(blacks);
		$('#winner-screen').addClass('show black');
	}

	if (this.mode == 'single') {
	} else {
	}
}

// Admin
Othello.prototype.fill = function(color){
	for (var i = 1; i < 64; i++) {
		if ($('.tile').eq(i).find('.counter').length == 0 ) {
			$('.tile').eq(i).append('<div class="counter '+color+'"><div class="counter-flipper"><div class="white"></div><div class="black"></div></div></div>');
		}
	}
}
