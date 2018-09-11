const nodes = [
	{
		'name': 'Burgtor',
		'id': 1,
		'edges': [{
			'to': 3,
			'distance': 80
		}],
		"coordinates": {
			"latitude": 53.874461,
			"longitude": 10.691588
		},
	},
	{
		'name': 'An der Untertrave / Kleine Altefähre',
		'id': 2,
		'edges': [
			{
				'to': 4,
				'distance': 89
			},
			{
				'to': 6,
				'distance': 100
			},
			{
				'to': 8,
				'distance': 500
			}
		],
		"coordinates": {
			"latitude": 53.874076,
			"longitude": 10.688678
		},
	},
	{
		'name': 'Große Burgstraße / Kaiserstraße',
		'id': 3,
		'edges': [
			{
				'to': 1,
				'distance': 80
			},
			{
				'to': 7,
				'distance': 210
			},
			{
				'to': 12,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.873780,
			"longitude": 10.691043
		},
	},
	{
		'name': 'An der Untertrave / Große Altefähre',
		'id': 4,
		'edges': [
			{
				'to': 2,
				'distance': 89
			},
			{
				'to': 5,
				'distance': 52
			},
			{
				'to': 9,
				'distance': 210
			}
		],
		"coordinates": {
			"latitude": 53.873760,
			"longitude": 10.687306
		},
	},
	{
		'name': 'Große Altefähre / Engelswisch',
		'id': 5,
		'edges': [
			{
				'to': 4,
				'distance': 52
			},
			{
				'to': 6,
				'distance': 65
			},
			{
				'to': 10,
				'distance': 170
			}
		],
		"coordinates": {
			"latitude": 53.873415,
			"longitude": 10.688030
		},
	},
	{
		'name': 'Große Altefähre / Klein Altefähre',
		'id': 6,
		'edges': [
			{
				'to': 2,
				'distance': 100
			},
			{
				'to': 5,
				'distance': 65
			},
			{
				'to': 11,
				'distance': 240
			}
		],
		"coordinates": {
			"latitude": 53.873157,
			"longitude": 10.688858
		},
	},
	{
		'name': 'Wakenitzmauer / Rosenpforte',
		'id': 7,
		'edges': [
			{
				'to': 3,
				'distance': 210
			},
			{
				'to': 8,
				'distance': 74
			},
			{
				'to': 13,
				'distance': 120
			},
			{
				'to': 15,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.872350,
			"longitude": 10.692397
		},
	},
	{
		'name': 'Kanalestraße / Rosenpforte',
		'id': 8,
		'edges': [
			{
				'to': 2,
				'distance': 500
			},
			{
				'to': 7,
				'distance': 74
			},
			{
				'to': 17,
				'distance': 230
			}
		],
		"coordinates": {
			"latitude": 53.872537,
			"longitude": 10.693264
		},
	},
	{
		'name': 'An der Untertrave / Alsheide',
		'id': 9,
		'edges': [
			{
				'to': 4,
				'distance': 210
			},
			{
				'to': 10,
				'distance': 110
			},
			{
				'to': 18,
				'distance': 86
			}
		],
		"coordinates": {
			"latitude": 53.872812,
			"longitude": 10.684715
		},
	},
	{
		'name': 'Alsheide / Engelswisch',
		'id': 10,
		'edges': [
			{
				'to': 5,
				'distance': 170
			},
			{
				'to': 9,
				'distance': 110
			},
			{
				'to': 20,
				'distance': 63
			}
		],
		"coordinates": {
			"latitude": 53.872347,
			"longitude": 10.686122
		},

	},
	{
		'name': 'Koberg / Engelsgrube',
		'id': 11,
		'edges': [
			{
				'to': 6,
				'distance': 240
			},
			{
				'to': 12,
				'distance': 130
			},
			{
				'to': 20,
				'distance': 190
			},
			{
				'to': 25,
				'distance': 94
			}
		],
		"coordinates": {
			"latitude": 53.871208,
			"longitude": 10.688435
		},
	},
	{
		'name': 'Große Burgstraße / Große Gröpelgrube',
		'id': 12,
		'edges': [
			{
				'to': 3,
				'distance': 130
			},
			{
				'to': 11,
				'distance': 130
			},
			{
				'to': 13,
				'distance': 120
			},
			{
				'to': 35,
				'distance': 260
			}
		],
		"coordinates": {
			"latitude": 53.871661,
			"longitude": 10.690022
		},
	},
	{
		'name': 'Große Gröpelgrube / Rosenstraße',
		'id': 13,
		'edges': [
			{
				'to': 7,
				'distance': 120
			},
			{
				'to': 12,
				'distance': 120
			},
			{
				'to': 14,
				'distance': 35
			}
		],
		"coordinates": {
			"latitude": 53.871392,
			"longitude": 10.691802
		},
	},
	{
		'name': 'Große Gröpelgrube / Langer Lohberg',
		'id': 14,
		'edges': [
			{
				'to': 13,
				'distance': 35
			},
			{
				'to': 15,
				'distance': 85
			},
			{
				'to': 36,
				'distance': 270
			}
		],
		"coordinates": {
			"latitude": 53.871370,
			"longitude": 10.692307
		},
	},
	{
		'name': 'Wakenitzmauer / Große Gröpelgrube',
		'id': 15,
		'edges': [
			{
				'to': 7,
				'distance': 130
			},
			{
				'to': 14,
				'distance': 85
			},
			{
				'to': 16,
				'distance': 120
			}
		],
		"coordinates": {
			"latitude": 53.871522,
			"longitude": 10.693535
		},
	},
	{
		'name': 'Wakenitzmauer / Weiter Lohberg',
		'id': 16,
		'edges': [
			{
				'to': 15,
				'distance': 120
			},
			{
				'to': 17,
				'distance': 89
			},
			{
				'to': 37,
				'distance': 170
			}
		],
		"coordinates": {
			"latitude": 53.870475,
			"longitude": 10.693809
		},
	},
	{
		'name': 'Kanalstraße / Weiter Lohberg',
		'id': 17,
		'edges': [
			{
				'to': 8,
				'distance': 230
			},
			{
				'to': 16,
				'distance': 89
			},
			{
				'to': 38,
				'distance': 200
			}
		],
		"coordinates": {
			"latitude": 53.870750,
			"longitude": 10.695016
		},
	},
	{
		'name': 'An der Untertrave / Engelsgrube',
		'id': 18,
		'edges': [
			{
				'to': 9,
				'distance': 86
			},
			{
				'to': 19,
				'distance': 61
			},
			{
				'to': 21,
				'distance': 200
			}
		],
		"coordinates": {
			"latitude": 53.872341,
			"longitude": 10.683654
		},
	},
	{
		'name': 'Engelsgrube / Große Kiesau',
		'id': 19,
		'edges': [
			{
				'to': 18,
				'distance': 61
			},
			{
				'to': 20,
				'distance': 86
			},
			{
				'to': 23,
				'distance': 170
			}
		],
		"coordinates": {
			"latitude": 53.872142,
			"longitude": 10.684458
		},
	},
	{
		'name': 'Engelswisch / Engelsgrube',
		'id': 20,
		'edges': [
			{
				'to': 10,
				'distance': 63
			},
			{
				'to': 11,
				'distance': 190
			},
			{
				'to': 19,
				'distance': 86
			},
			{
				'to': 24,
				'distance': 150
			}
		],
		"coordinates": {
			"latitude": 53.871854,
			"longitude": 10.685740
		},
	},
	{
		'name': 'An der Untertrave / Fischergrube',
		'id': 21,
		'edges': [
			{
				'to': 18,
				'distance': 200
			},
			{
				'to': 22,
				'distance': 62
			},
			{
				'to': 28,
				'distance': 110
			}
		],
		"coordinates": {
			"latitude": 53.871183,
			"longitude": 10.681444
		},
	},
	{
		'name': 'Fischergrube / Böttcherstraße',
		'id': 22,
		'edges': [
			{
				'to': 21,
				'distance': 62
			},
			{
				'to': 23,
				'distance': 47
			},
			{
				'to': 26,
				'distance': 54
			}
		],
		"coordinates": {
			"latitude": 53.871006,
			"longitude": 10.682415
		},
	},
	{
		'name': 'Fischergrube / Ellerbrook',
		'id': 23,
		'edges': [
			{
				'to': 19,
				'distance': 170
			},
			{
				'to': 22,
				'distance': 47
			},
			{
				'to': 24,
				'distance': 110
			},
			{
				'to': 27,
				'distance': 69
			}
		],
		"coordinates": {
			"latitude": 53.870930,
			"longitude": 10.683155
		},
	},
	{
		'name': 'Fischergrube / Schwönekenquerstraße',
		'id': 24,
		'edges': [
			{
				'to': 20,
				'distance': 150
			},
			{
				'to': 23,
				'distance': 110
			},
			{
				'to': 25,
				'distance': 220
			},
			{
				'to': 33,
				'distance': 120
			}
		],
		"coordinates": {
			"latitude": 53.870756,
			"longitude": 10.684716
		},
	},
	{
		'name': 'Fischergrube / Koberg',
		'id': 25,
		'edges': [
			{
				'to': 11,
				'distance': 94
			},
			{
				'to': 24,
				'distance': 220
			},
			{
				'to': 34,
				'distance': 86
			}
		],
		"coordinates": {
			"latitude": 53.870361,
			"longitude": 10.688036
		},
	},
	{
		'name': 'Böttcherstraße / Bierspünderstraße',
		'id': 26,
		'edges': [
			{
				'to': 22,
				'distance': 54
			},
			{
				'to': 27,
				'distance': 62
			},
			{
				'to': 29,
				'distance': 52
			}
		],
		"coordinates": {
			"latitude": 53.870529,
			"longitude": 10.682055
		},
	},
	{
		'name': 'Ellerbrook / Bierspünderstraße',
		'id': 27,
		'edges': [
			{
				'to': 23,
				'distance': 69
			},
			{
				'to': 26,
				'distance': 62
			},
			{
				'to': 32,
				'distance': 72
			}
		],
		"coordinates": {
			"latitude": 53.870298,
			"longitude": 10.682913
		},
	},
	{
		'name': 'An der Untertrave / Clemensstraße',
		'id': 28,
		'edges': [
			{
				'to': 21,
				'distance': 110
			},
			{
				'to': 29,
				'distance': 100
			},
			{
				'to': 30,
				'distance': 84
			}
		],
		"coordinates": {
			"latitude": 53.870421,
			"longitude": 10.680317
		},
	},
	{
		'name': 'Böttcherstraße / Clemensstraße',
		'id': 29,
		'edges': [
			{
				'to': 26,
				'distance': 52
			},
			{
				'to': 28,
				'distance': 100
			},
			{
				'to': 31,
				'distance': 52
			}
		],
		"coordinates": {
			"latitude": 53.870117,
			"longitude": 10.681771
		},
	},
	{
		'name': 'An der Untertrave / Beckergrube',
		'id': 30,
		'edges': [
			{
				'to': 28,
				'distance': 84
			},
			{
				'to': 31,
				'distance': 100
			},
			{
				'to': 39,
				'distance': 85
			}
		],
		"coordinates": {
			"latitude": 53.869713,
			"longitude": 10.680027
		},
	},
	{
		'name': 'Beckergrube / Böttcherstraße',
		'id': 31,
		'edges': [
			{
				'to': 29,
				'distance': 52
			},
			{
				'to': 30,
				'distance': 100
			},
			{
				'to': 32,
				'distance': 83
			},
			{
				'to': 40,
				'distance': 100
			}
		],
		"coordinates": {
			"latitude": 53.869681,
			"longitude": 10.681567
		},
	},
	{
		'name': 'Beckergrube / Ellerbrook',
		'id': 32,
		'edges': [
			{
				'to': 27,
				'distance': 72
			},
			{
				'to': 31,
				'distance': 83
			},
			{
				'to': 33,
				'distance': 110
			},
			{
				'to': 41,
				'distance': 120
			}
		],
		"coordinates": {
			"latitude": 53.869665,
			"longitude": 10.682833
		},
	},
	{
		'name': 'Beckergrube / Kupferschmiedestraße',
		'id': 33,
		'edges': [
			{
				'to': 24,
				'distance': 120
			},
			{
				'to': 32,
				'distance': 110
			},
			{
				'to': 34,
				'distance': 200
			},
			{
				'to': 42,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.869646,
			"longitude": 10.684571
		},
	},
	{
		'name': 'Beckergrube / Koberg',
		'id': 34,
		'edges': [
			{
				'to': 25,
				'distance': 86
			},
			{
				'to': 33,
				'distance': 200
			},
			{
				'to': 35,
				'distance': 99
			},
			{
				'to': 43,
				'distance': 180
			}
		],
		"coordinates": {
			"latitude": 53.869637,
			"longitude": 10.687645
		},
	},
	{
		'name': 'Königstraße / Glockengießerstraße',
		'id': 35,
		'edges': [
			{
				'to': 12,
				'distance': 260
			},
			{
				'to': 34,
				'distance': 99
			},
			{
				'to': 36,
				'distance': 250
			},
			{
				'to': 44,
				'distance': 100
			}
		],
		"coordinates": {
			"latitude": 53.869431,
			"longitude": 10.689045
		},
	},
	{
		'name': 'Glockengießerstraße / Langer Lohberg',
		'id': 36,
		'edges': [
			{
				'to': 14,
				'distance': 270
			},
			{
				'to': 35,
				'distance': 250
			},
			{
				'to': 37,
				'distance': 110
			},
			{
				'to': 46,
				'distance': 99
			}
		],
		"coordinates": {
			"latitude": 53.869007,
			"longitude": 10.692795
		},
	},
	{
		'name': 'Wakenitzmauer / Glockengießerstraße',
		'id': 37,
		'edges': [
			{
				'to': 16,
				'distance': 170
			},
			{
				'to': 36,
				'distance': 110
			},
			{
				'to': 38,
				'distance': 82
			},
			{
				'to': 48,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.868995,
			"longitude": 10.694484
		},
	},
	{
		'name': 'Kanalstraße / Glockengießerstraße',
		'id': 38,
		'edges': [
			{
				'to': 17,
				'distance': 200
			},
			{
				'to': 37,
				'distance': 82
			},
			{
				'to': 49,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.868979,
			"longitude": 10.695606
		},
	},
	{
		'name': 'An der Untertrave / Mengstraße',
		'id': 39,
		'edges': [
			{
				'to': 30,
				'distance': 85
			},
			{
				'to': 40,
				'distance': 83
			},
			{
				'to': 51,
				'distance': 80
			}
		],
		"coordinates": {
			"latitude": 53.868931,
			"longitude": 10.680140
		},
	},
	{
		'name': 'Mengstraße / Siebente Querstraße',
		'id': 40,
		'edges': [
			{
				'to': 31,
				'distance': 100
			},
			{
				'to': 39,
				'distance': 83
			},
			{
				'to': 41,
				'distance': 78
			},
			{
				'to': 52,
				'distance': 78
			}
		],
		"coordinates": {
			"latitude": 53.868766,
			"longitude": 10.681401
		},
	},
	{
		'name': 'Mengstraße / Blocksquerstraße',
		'id': 41,
		'edges': [
			{
				'to': 32,
				'distance': 120
			},
			{
				'to': 40,
				'distance': 78
			},
			{
				'to': 42,
				'distance': 120
			}
		],
		"coordinates": {
			"latitude": 53.868620,
			"longitude": 10.682531
		},
	},
	{
		'name': 'Mengstraße / Fünfhausen',
		'id': 42,
		'edges': [
			{
				'to': 33,
				'distance': 140
			},
			{
				'to': 41,
				'distance': 120
			},
			{
				'to': 43,
				'distance': 140
			},
			{
				'to': 54,
				'distance': 34
			}
		],
		"coordinates": {
			"latitude": 53.868350,
			"longitude": 10.684285
		},
	},
	{
		'name': 'Mengstraße / Breite Straße',
		'id': 43,
		'edges': [
			{
				'to': 34,
				'distance': 180
			},
			{
				'to': 42,
				'distance': 140
			},
			{
				'to': 45,
				'distance': 120
			},
			{
				'to': 55,
				'distance': 48
			}
		],
		"coordinates": {
			"latitude": 53.868133,
			"longitude": 10.686331
		},
	},
	{
		'name': 'Königstraße / Hundestraße',
		'id': 44,
		'edges': [
			{
				'to': 35,
				'distance': 100
			},
			{
				'to': 45,
				'distance': 71
			},
			{
				'to': 46,
				'distance': 280
			}
		],
		"coordinates": {
			"latitude": 53.868568,
			"longitude": 10.688515
		},
	},
	{
		'name': 'Königstraße / Dr.-Julius-Leber-Straße',
		'id': 45,
		'edges': [
			{
				'to': 43,
				'distance': 120
			},
			{
				'to': 44,
				'distance': 71
			},
			{
				'to': 47,
				'distance': 290
			},
			{
				'to': 56,
				'distance': 72
			}
		],
		"coordinates": {
			"latitude": 53.867949,
			"longitude": 10.688118
		},
	},
	{
		'name': 'Hundestraße / Tünkenhagen',
		'id': 46,
		'edges': [
			{
				'to': 36,
				'distance': 99
			},
			{
				'to': 44,
				'distance': 280
			},
			{
				'to': 47,
				'distance': 100
			},
			{
				'to': 48,
				'distance': 160
			}
		],
		"coordinates": {
			"latitude": 53.868097,
			"longitude": 10.692724
		},
	},
	{
		'name': 'Dr.-Julius-Leber-Straße / Rosengarten',
		'id': 47,
		'edges': [
			{
				'to': 45,
				'distance': 290
			},
			{
				'to': 46,
				'distance': 100
			},
			{
				'to': 50,
				'distance': 190
			},
			{
				'to': 64,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.867222,
			"longitude": 10.692396
		},
	},
	{
		'name': 'Hundestraße / Wakenitzmauer',
		'id': 48,
		'edges': [
			{
				'to': 37,
				'distance': 140
			},
			{
				'to': 46,
				'distance': 160
			},
			{
				'to': 49,
				'distance': 40
			}
		],
		"coordinates": {
			"latitude": 53.867842,
			"longitude": 10.695069
		},
	},
	{
		'name': 'Kanalstraße / Hundestraße',
		'id': 49,
		'edges': [
			{
				'to': 38,
				'distance': 140
			},
			{
				'to': 48,
				'distance': 40
			},
			{
				'to': 50,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.867762,
			"longitude": 10.695499
		},
	},
	{
		'name': 'Kanalstraße / Dr.-Julius-Leber-Straße',
		'id': 50,
		'edges': [
			{
				'to': 47,
				'distance': 190
			},
			{
				'to': 49,
				'distance': 140
			},
			{
				'to': 66,
				'distance': 100
			}
		],
		"coordinates": {
			"latitude": 53.866573,
			"longitude": 10.694887
		},
	},
	{
		'name': 'An der Untertrave / Alfstraße',
		'id': 51,
		'edges': [
			{
				'to': 39,
				'distance': 80
			},
			{
				'to': 52,
				'distance': 57
			},
			{
				'to': 57,
				'distance': 74
			}
		],
		"coordinates": {
			"latitude": 53.868237,
			"longitude": 10.680410
		},
	},
	{
		'name': 'Alfstraße / Gerade Querstraße',
		'id': 52,
		'edges': [
			{
				'to': 40,
				'distance': 78
			},
			{
				'to': 51,
				'distance': 57
			},
			{
				'to': 53,
				'distance': 130
			},
			{
				'to': 58,
				'distance': 65
			}
		],
		"coordinates": {
			"latitude": 53.868215,
			"longitude": 10.681343
		},
	},
	{
		'name': 'Alfstraße / Neue Querstraße',
		'id': 53,
		'edges': [
			{
				'to': 52,
				'distance': 130
			},
			{
				'to': 54,
				'distance': 54
			},
			{
				'to': 59,
				'distance': 59
			}
		],
		"coordinates": {
			"latitude": 53.868107,
			"longitude": 10.683299
		},
	},
	{
		'name': 'Alfstraße / Schüsselbuden',
		'id': 54,
		'edges': [
			{
				'to': 42,
				'distance': 34
			},
			{
				'to': 53,
				'distance': 54
			},
			{
				'to': 60,
				'distance': 59
			}
		],
		"coordinates": {
			"latitude": 53.868066,
			"longitude": 10.684132
		},
	},
	{
		'name': 'Breite Straße / Schrangen',
		'id': 55,
		'edges': [
			{
				'to': 43,
				'distance': 48
			},
			{
				'to': 56,
				'distance': 110
			},
			{
				'to': 62,
				'distance': 47
			}
		],
		"coordinates": {
			"latitude": 53.867708,
			"longitude": 10.686115
		},
	},
	{
		'name': 'Königstraße / Schrangen',
		'id': 56,
		'edges': [
			{
				'to': 45,
				'distance': 72
			},
			{
				'to': 55,
				'distance': 110
			},
			{
				'to': 63,
				'distance': 47
			}
		],
		"coordinates": {
			"latitude": 53.867401,
			"longitude": 10.687631
		},
	},
	{
		'name': 'An der Untertrave / Fischstraße',
		'id': 57,
		'edges': [
			{
				'to': 51,
				'distance': 74
			},
			{
				'to': 58,
				'distance': 50
			},
			{
				'to': 67,
				'distance': 75
			}
		],
		"coordinates": {
			"latitude": 53.867593,
			"longitude": 10.680590
		},
	},
	{
		'name': 'Fischstraße / Gerade Querstraße',
		'id': 58,
		'edges': [
			{
				'to': 52,
				'distance': 65
			},
			{
				'to': 57,
				'distance': 50
			},
			{
				'to': 59,
				'distance': 120
			},
			{
				'to': 68,
				'distance': 100
			}
		],
		"coordinates": {
			"latitude": 53.867619,
			"longitude": 10.681336
		},
	},
	{
		'name': 'Fischstraße / Neue Querstraße',
		'id': 59,
		'edges': [
			{
				'to': 53,
				'distance': 59
			},
			{
				'to': 58,
				'distance': 120
			},
			{
				'to': 60,
				'distance': 54
			}
		],
		"coordinates": {
			"latitude": 53.867593,
			"longitude": 10.683237
		},
	},
	{
		'name': 'Fischstraße / Schüselbuden',
		'id': 60,
		'edges': [
			{
				'to': 54,
				'distance': 59
			},
			{
				'to': 59,
				'distance': 54
			},
			{
				'to': 61,
				'distance': 45
			},
			{
				'to': 69,
				'distance': 55
			}
		],
		"coordinates": {
			"latitude": 53.867557,
			"longitude": 10.684034
		},
	},
	{
		'name': 'Marienkirchhof / Markttwiete',
		'id': 61,
		'edges': [
			{
				'to': 60,
				'distance': 45
			},
			{
				'to': 62,
				'distance': 81
			},
			{
				'to': 70,
				'distance': 55
			}
		],
		"coordinates": {
			"latitude": 53.867506,
			"longitude": 10.684661
		},
	},
	{
		'name': 'Breite Straße / Fleischhauerstraße',
		'id': 62,
		'edges': [
			{
				'to': 55,
				'distance': 47
			},
			{
				'to': 61,
				'distance': 81
			},
			{
				'to': 63,
				'distance': 110
			},
			{
				'to': 72,
				'distance': 69
			}
		],
		"coordinates": {
			"latitude": 53.867281,
			"longitude": 10.685901
		},
	},
	{
		'name': 'Königstraße / Fleischhauerstraße',
		'id': 63,
		'edges': [
			{
				'to': 56,
				'distance': 47
			},
			{
				'to': 62,
				'distance': 110
			},
			{
				'to': 64,
				'distance': 300
			},
			{
				'to': 73,
				'distance': 75
			}
		],
		"coordinates": {
			"latitude": 53.867005,
			"longitude": 10.687360
		},
	},
	{
		'name': 'Bei St. Johannis / Fleischhauerstraße',
		'id': 64,
		'edges': [
			{
				'to': 47,
				'distance': 130
			},
			{
				'to': 63,
				'distance': 300
			},
			{
				'to': 65,
				'distance': 87
			},
			{
				'to': 74,
				'distance': 190
			}
		],
		"coordinates": {
			"latitude": 53.866139,
			"longitude": 10.691881
		},
	},
	{
		'name': 'Fleischhauerstraße / An der Mauer',
		'id': 65,
		'edges': [
			{
				'to': 64,
				'distance': 87
			},
			{
				'to': 66,
				'distance': 83
			},
			{
				'to': 75,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.865949,
			"longitude": 10.693170
		},
	},
	{
		'name': 'Kanalstraße / Fleischhauerstraße',
		'id': 66,
		'edges': [
			{
				'to': 50,
				'distance': 100
			},
			{
				'to': 65,
				'distance': 83
			},
			{
				'to': 75,
				'distance': 170
			}
		],
		"coordinates": {
			"latitude": 53.865761,
			"longitude": 10.694382
		},
	},
	{
		'name': 'An der Untertrave / Braunstraße',
		'id': 67,
		'edges': [
			{
				'to': 57,
				'distance': 75
			},
			{
				'to': 68,
				'distance': 83
			},
			{
				'to': 76,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.866941,
			"longitude": 10.680717
		},
	},
	{
		'name': 'Braunstraße / Lederstraße',
		'id': 68,
		'edges': [
			{
				'to': 58,
				'distance': 100
			},
			{
				'to': 67,
				'distance': 83
			},
			{
				'to': 69,
				'distance': 130
			},
			{
				'to': 77,
				'distance': 75
			}
		],
		"coordinates": {
			"latitude": 53.867001,
			"longitude": 10.681985
		},
	},
	{
		'name': 'Braunstraße / Schüsselbuden',
		'id': 69,
		'edges': [
			{
				'to': 60,
				'distance': 55
			},
			{
				'to': 68,
				'distance': 130
			},
			{
				'to': 70,
				'distance': 44
			},
			{
				'to': 78,
				'distance': 89
			}
		],
		"coordinates": {
			"latitude": 53.867052,
			"longitude": 10.683976
		},
	},
	{
		'name': 'Markttwiete / Markt',
		'id': 70,
		'edges': [
			{
				'to': 61,
				'distance': 55
			},
			{
				'to': 69,
				'distance': 44
			},
			{
				'to': 71,
				'distance': 61
			},
			{
				'to': 79,
				'distance': 97
			}
		],
		"coordinates": {
			"latitude": 53.867003,
			"longitude": 10.684541
		},
	},
	{
		'name': 'Markt / Hüxstraße',
		'id': 71,
		'edges': [
			{
				'to': 70,
				'distance': 61
			},
			{
				'to': 72,
				'distance': 25
			},
			{
				'to': 80,
				'distance': 91
			}
		],
		"coordinates": {
			"latitude": 53.866897,
			"longitude": 10.685327
		},
	},
	{
		'name': 'Breite Straße / Hüxstraße',
		'id': 72,
		'edges': [
			{
				'to': 62,
				'distance': 69
			},
			{
				'to': 71,
				'distance': 25
			},
			{
				'to': 73,
				'distance': 99
			},
			{
				'to': 81,
				'distance': 87
			}
		],
		"coordinates": {
			"latitude": 53.866664,
			"longitude": 10.685624
		},
	},
	{
		'name': 'Königstraße / Hüxstraße',
		'id': 73,
		'edges': [
			{
				'to': 63,
				'distance': 75
			},
			{
				'to': 72,
				'distance': 99
			},
			{
				'to': 74,
				'distance': 300
			},
			{
				'to': 82,
				'distance': 99
			}
		],
		"coordinates": {
			"latitude": 53.866376,
			"longitude": 10.686992
		},
	},
	{
		'name': 'Hüxstraße / Schlumacherstraße',
		'id': 74,
		'edges': [
			{
				'to': 64,
				'distance': 190
			},
			{
				'to': 73,
				'distance': 300
			},
			{
				'to': 75,
				'distance': 130
			},
			{
				'to': 83,
				'distance': 76
			}
		],
		"coordinates": {
			"latitude": 53.865248,
			"longitude": 10.691280
		},
	},
	{
		'name': 'Hüxstraße / An der Mauer',
		'id': 75,
		'edges': [
			{
				'to': 65,
				'distance': 130
			},
			{
				'to': 66,
				'distance': 170
			},
			{
				'to': 74,
				'distance': 130
			},
			{
				'to': 84,
				'distance': 88
			}
		],
		"coordinates": {
			"latitude": 53.864789,
			"longitude": 10.693104
		},
	},
	{
		'name': 'Holstenbrücke',
		'id': 76,
		'edges': [
			{
				'to': 67,
				'distance': 140
			},
			{
				'to': 77,
				'distance': 80
			},
			{
				'to': 85,
				'distance': 70
			}
		],
		"coordinates": {
			"latitude": 53.866283,
			"longitude": 10.680926
		},
	},
	{
		'name': 'Holstenstraße / Lederstraße',
		'id': 77,
		'edges': [
			{
				'to': 68,
				'distance': 75
			},
			{
				'to': 76,
				'distance': 80
			},
			{
				'to': 78,
				'distance': 110
			},
			{
				'to': 86,
				'distance': 53
			}
		],
		"coordinates": {
			"latitude": 53.866355,
			"longitude": 10.682178
		},
	},
	{
		'name': 'Holstenstraße / Schüsselbuden',
		'id': 78,
		'edges': [
			{
				'to': 69,
				'distance': 89
			},
			{
				'to': 77,
				'distance': 110
			},
			{
				'to': 79,
				'distance': 32
			},
			{
				'to': 89,
				'distance': 41
			}
		],
		"coordinates": {
			"latitude": 53.866283,
			"longitude": 10.683904
		},
	},
	{
		'name': 'Kohlmarkt / Markt',
		'id': 79,
		'edges': [
			{
				'to': 70,
				'distance': 97
			},
			{
				'to': 78,
				'distance': 32
			},
			{
				'to': 80,
				'distance': 46
			}
		],
		"coordinates": {
			"latitude": 53.866217,
			"longitude": 10.684319
		},
	},
	{
		'name': 'Kohlmarkt / Markt (Fresh)',
		'id': 80,
		'edges': [
			{
				'to': 71,
				'distance': 91
			},
			{
				'to': 79,
				'distance': 46
			},
			{
				'to': 81,
				'distance': 19
			}
		],
		"coordinates": {
			"latitude": 53.866076,
			"longitude": 10.684950
		},
	},
	{
		'name': 'Kohlmarkt / Breite Straße',
		'id': 81,
		'edges': [
			{
				'to': 72,
				'distance': 87
			},
			{
				'to': 80,
				'distance': 19
			},
			{
				'to': 82,
				'distance': 98
			},
			{
				'to': 94,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.865973,
			"longitude": 10.685370
		},
	},
	{
		'name': 'Wahmstraße / Königstraße',
		'id': 82,
		'edges': [
			{
				'to': 73,
				'distance': 99
			},
			{
				'to': 81,
				'distance': 98
			},
			{
				'to': 83,
				'distance': 300
			},
			{
				'to': 95,
				'distance': 110
			}
		],
		"coordinates": {
			"latitude": 53.865524,
			"longitude": 10.686535
		},
	},
	{
		'name': 'Wahmstraße / Balauerfohr',
		'id': 83,
		'edges': [
			{
				'to': 74,
				'distance': 76
			},
			{
				'to': 82,
				'distance': 300
			},
			{
				'to': 84,
				'distance': 160
			},
			{
				'to': 97,
				'distance': 67
			}
		],
		"coordinates": {
			"latitude": 53.864599,
			"longitude": 10.690844
		},
	},
	{
		'name': 'Wahmstraße / An der Mauer',
		'id': 84,
		'edges': [
			{
				'to': 75,
				'distance': 88
			},
			{
				'to': 83,
				'distance': 160
			},
			{
				'to': 109,
				'distance': 150
			}
		],
		"coordinates": {
			"latitude": 53.863951,
			"longitude": 10.692983
		},
	},
	{
		'name': 'An der Obertrave / Pagönnienstraße',
		'id': 85,
		'edges': [
			{
				'to': 76,
				'distance': 70
			},
			{
				'to': 86,
				'distance': 81
			},
			{
				'to': 87,
				'distance': 32
			}
		],
		"coordinates": {
			"latitude": 53.865658,
			"longitude": 10.681179
		},
	},
	{
		'name': 'Pagönnienstraße / Kolk',
		'id': 86,
		'edges': [
			{
				'to': 77,
				'distance': 53
			},
			{
				'to': 85,
				'distance': 81
			},
			{
				'to': 88,
				'distance': 29
			}
		],
		"coordinates": {
			"latitude": 53.865847,
			"longitude": 10.682304
		},
	},
	{
		'name': 'An der Obertrave / Kleine Petersgrube',
		'id': 87,
		'edges': [
			{
				'to': 85,
				'distance': 32
			},
			{
				'to': 88,
				'distance': 86
			},
			{
				'to': 90,
				'distance': 44
			}
		],
		"coordinates": {
			"latitude": 53.865366,
			"longitude": 10.681244
		},
	},
	{
		'name': 'Kleine Petersgrube / Kolk',
		'id': 88,
		'edges': [
			{
				'to': 86,
				'distance': 29
			},
			{
				'to': 87,
				'distance': 86
			},
			{
				'to': 91,
				'distance': 36
			}
		],
		"coordinates": {
			"latitude": 53.865623,
			"longitude": 10.682426
		},
	},
	{
		'name': 'Große Petersgrube / Schmiedestraße',
		'id': 89,
		'edges': [
			{
				'to': 78,
				'distance': 41
			},
			{
				'to': 91,
				'distance': 63
			},
			{
				'to': 94,
				'distance': 150
			}
		],
		"coordinates": {
			"latitude": 53.865586,
			"longitude": 10.683796
		},
	},
	{
		'name': 'An der Obertrave / Große Petersgrube',
		'id': 90,
		'edges': [
			{
				'to': 87,
				'distance': 44
			},
			{
				'to': 91,
				'distance': 110
			},
			{
				'to': 92,
				'distance': 76
			}
		],
		"coordinates": {
			"latitude": 53.864967,
			"longitude": 10.681266
		},
	},
	{
		'name': 'Große Petersgrube / Kleine Kiesau',
		'id': 91,
		'edges': [
			{
				'to': 88,
				'distance': 36
			},
			{
				'to': 89,
				'distance': 63
			},
			{
				'to': 90,
				'distance': 110
			},
			{
				'to': 93,
				'distance': 69
			}
		],
		"coordinates": {
			"latitude": 53.865352,
			"longitude": 10.682769
		},
	},
	{
		'name': 'An der Obertrave / Depenau',
		'id': 92,
		'edges': [
			{
				'to': 90,
				'distance': 76
			},
			{
				'to': 93,
				'distance': 160
			},
			{
				'to': 98,
				'distance': 69
			}
		],
		"coordinates": {
			"latitude": 53.864310,
			"longitude": 10.681167
		},
	},
	{
		'name': 'Depenau / Kleine Kiesau',
		'id': 93,
		'edges': [
			{
				'to': 91,
				'distance': 69
			},
			{
				'to': 92,
				'distance': 160
			},
			{
				'to': 100,
				'distance': 81
			}
		],
		"coordinates": {
			"latitude": 53.864858,
			"longitude": 10.683382
		},
	},
	{
		'name': 'Schmiedestraße / Sandstraße',
		'id': 94,
		'edges': [
			{
				'to': 81,
				'distance': 140
			},
			{
				'to': 89,
				'distance': 150
			},
			{
				'to': 95,
				'distance': 86
			},
			{
				'to': 101,
				'distance': 40
			},
			{
				'to': 102,
				'distance': 37
			}
		],
		"coordinates": {
			"latitude": 53.864633,
			"longitude": 10.685249
		},
	},
	{
		'name': 'Aegidienstraße / Königstraße',
		'id': 95,
		'edges': [
			{
				'to': 82,
				'distance': 110
			},
			{
				'to': 94,
				'distance': 86
			},
			{
				'to': 96,
				'distance': 96
			},
			{
				'to': 106,
				'distance': 98
			}
		],
		"coordinates": {
			"latitude": 53.864504,
			"longitude": 10.686485
		},
	},
	{
		'name': 'Aegidienstraße / Pergamentmachergang',
		'id': 96,
		'edges': [
			{
				'to': 95,
				'distance': 96
			},
			{
				'to': 97,
				'distance': 170
			},
			{
				'to': 108,
				'distance': 140
			},
			{
				'to': 111,
				'distance': 190
			}
		],
		"coordinates": {
			"latitude": 53.864282,
			"longitude": 10.687923
		},
	},
	{
		'name': 'Aegidienstraße / Balauerfohr',
		'id': 97,
		'edges': [
			{
				'to': 83,
				'distance': 67
			},
			{
				'to': 96,
				'distance': 170
			},
			{
				'to': 108,
				'distance': 73
			},
			{
				'to': 109,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.864088,
			"longitude": 10.690416
		},
	},
	{
		'name': 'An der Obertrave / Marlesgrube',
		'id': 98,
		'edges': [
			{
				'to': 92,
				'distance': 69
			},
			{
				'to': 99,
				'distance': 63
			},
			{
				'to': 103,
				'distance': 110
			}
		],
		"coordinates": {
			"latitude": 53.863704,
			"longitude": 10.680833
		},
	},
	{
		'name': 'Marlesgrube / Düstere Querstraße',
		'id': 99,
		'edges': [
			{
				'to': 98,
				'distance': 63
			},
			{
				'to': 100,
				'distance': 130
			},
			{
				'to': 104,
				'distance': 99
			}
		],
		"coordinates": {
			"latitude": 53.863830,
			"longitude": 10.681719
		},
	},
	{
		'name': 'Marlesgrube / Kleine Kiesau',
		'id': 100,
		'edges': [
			{
				'to': 93,
				'distance': 81
			},
			{
				'to': 99,
				'distance': 130
			},
			{
				'to': 101,
				'distance': 86
			}
		],
		"coordinates": {
			"latitude": 53.864145,
			"longitude": 10.683655
		},
	},
	{
		'name': 'Marlesgrube / Schmiedestraße',
		'id': 101,
		'edges': [
			{
				'to': 94,
				'distance': 40
			},
			{
				'to': 100,
				'distance': 86
			},
			{
				'to': 102,
				'distance': 36
			},
			{
				'to': 105,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.864286,
			"longitude": 10.685007
		},
	},
	{
		'name': 'Mühlenstraße / Marlesgrube',
		'id': 102,
		'edges': [
			{
				'to': 94,
				'distance': 37
			},
			{
				'to': 101,
				'distance': 36
			},
			{
				'to': 106,
				'distance': 96
			}
		],
		"coordinates": {
			"latitude": 53.864464,
			"longitude": 10.685371
		},
	},
	{
		'name': 'An der Obertrave / Dankwartsgrube',
		'id': 103,
		'edges': [
			{
				'to': 98,
				'distance': 110
			},
			{
				'to': 104,
				'distance': 110
			},
			{
				'to': 117,
				'distance': 95
			}
		],
		"coordinates": {
			"latitude": 53.862815,
			"longitude": 10.680360
		},
	},
	{
		'name': 'Dankwartsgrube / Düstere Querstraße',
		'id': 104,
		'edges': [
			{
				'to': 99,
				'distance': 99
			},
			{
				'to': 103,
				'distance': 110
			},
			{
				'to': 105,
				'distance': 200
			},
			{
				'to': 118,
				'distance': 110
			}
		],
		"coordinates": {
			"latitude": 53.862949,
			"longitude": 10.681924
		},
	},
	{
		'name': 'Dankwartsgrube / Pferdemarkt',
		'id': 105,
		'edges': [
			{
				'to': 101,
				'distance': 130
			},
			{
				'to': 104,
				'distance': 200
			},
			{
				'to': 107,
				'distance': 100
			},
			{
				'to': 120,
				'distance': 150
			}
		],
		"coordinates": {
			"latitude": 53.863139,
			"longitude": 10.685044
		},
	},
	{
		'name': 'Mühlenstraße / Königstraße',
		'id': 106,
		'edges': [
			{
				'to': 95,
				'distance': 98
			},
			{
				'to': 102,
				'distance': 96
			},
			{
				'to': 107,
				'distance': 40
			}
		],
		"coordinates": {
			"latitude": 53.863652,
			"longitude": 10.686258
		},
	},
	{
		'name': 'Mühlenstraße / Kapitelstraße',
		'id': 107,
		'edges': [
			{
				'to': 105,
				'distance': 100
			},
			{
				'to': 106,
				'distance': 40
			},
			{
				'to': 111,
				'distance': 49
			}
		],
		"coordinates": {
			"latitude": 53.863318,
			"longitude": 10.686546
		},
	},
	{
		'name': 'Sankt-Annen-Straße / Schildstraße',
		'id': 108,
		'edges': [
			{
				'to': 96,
				'distance': 140
			},
			{
				'to': 97,
				'distance': 73
			},
			{
				'to': 110,
				'distance': 110
			},
			{
				'to': 113,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.863591,
			"longitude": 10.689687
		},
	},
	{
		'name': 'An der Mauer / Stavenstraße',
		'id': 109,
		'edges': [
			{
				'to': 84,
				'distance': 150
			},
			{
				'to': 97,
				'distance': 130
			},
			{
				'to': 110,
				'distance': 59
			}
		],
		"coordinates": {
			"latitude": 53.863016,
			"longitude": 10.691465
		},
	},
	{
		'name': 'An der Mauer / Weberstraße',
		'id': 110,
		'edges': [
			{
				'to': 108,
				'distance': 110
			},
			{
				'to': 109,
				'distance': 59
			},
			{
				'to': 115,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.862776,
			"longitude": 10.690721
		},
	},
	{
		'name': 'Mühlenstraße / Pergamentmachergang',
		'id': 111,
		'edges': [
			{
				'to': 96,
				'distance': 190
			},
			{
				'to': 107,
				'distance': 49
			},
			{
				'to': 112,
				'distance': 34
			}
		],
		"coordinates": {
			"latitude": 53.862971,
			"longitude": 10.686929
		},
	},
	{
		'name': 'Mühlenstraße / Fegefeuer',
		'id': 112,
		'edges': [
			{
				'to': 111,
				'distance': 34
			},
			{
				'to': 114,
				'distance': 33
			},
			{
				'to': 121,
				'distance': 140
			}
		],
		"coordinates": {
			"latitude": 53.862633,
			"longitude": 10.687200
		},
	},
	{
		'name': 'Sankt-Annen-Straße / Düvekenstraße',
		'id': 113,
		'edges': [
			{
				'to': 108,
				'distance': 130
			},
			{
				'to': 114,
				'distance': 63
			},
			{
				'to': 115,
				'distance': 110
			}
		],
		"coordinates": {
			"latitude": 53.862780,
			"longitude": 10.688171
		},
	},
	{
		'name': 'Mühlenstraße / Sankt-Annen-Straße',
		'id': 114,
		'edges': [
			{
				'to': 112,
				'distance': 33
			},
			{
				'to': 113,
				'distance': 63
			},
			{
				'to': 116,
				'distance': 120
			}
		],
		"coordinates": {
			"latitude": 53.862432,
			"longitude": 10.687454
		},
	},
	{
		'name': 'An der Mauer / Düvekenstraße',
		'id': 115,
		'edges': [
			{
				'to': 110,
				'distance': 130
			},
			{
				'to': 113,
				'distance': 110
			},
			{
				'to': 116,
				'distance': 72
			}
		],
		"coordinates": {
			"latitude": 53.862046,
			"longitude": 10.689187
		},
	},
	{
		'name': 'Mühlenstraße / An der Mauer',
		'id': 116,
		'edges': [
			{
				'to': 114,
				'distance': 120
			},
			{
				'to': 115,
				'distance': 72
			},
			{
				'to': 125,
				'distance': 130
			},
			{
				'to': 127,
				'distance': 220
			}
		],
		"coordinates": {
			"latitude": 53.861556,
			"longitude": 10.688540
		},
	},
	{
		'name': 'An der Obertrave / Hartengrube',
		'id': 117,
		'edges': [
			{
				'to': 103,
				'distance': 95
			},
			{
				'to': 118,
				'distance': 97
			},
			{
				'to': 122,
				'distance': 190
			}
		],
		"coordinates": {
			"latitude": 53.861946,
			"longitude": 10.680605
		},
	},
	{
		'name': 'Hartengrube / Lichte Querstraße',
		'id': 118,
		'edges': [
			{
				'to': 104,
				'distance': 110
			},
			{
				'to': 117,
				'distance': 97
			},
			{
				'to': 119,
				'distance': 110
			}
		],
		"coordinates": {
			"latitude": 53.862009,
			"longitude": 10.681977
		},
	},
	{
		'name': 'Hartengrube / Großer Bauhof',
		'id': 119,
		'edges': [
			{
				'to': 118,
				'distance': 110
			},
			{
				'to': 120,
				'distance': 69
			},
			{
				'to': 123,
				'distance': 68
			}
		],
		"coordinates": {
			"latitude": 53.861886,
			"longitude": 10.683768
		},
	},
	{
		'name': 'Großer Bauhof / Parade',
		'id': 120,
		'edges': [
			{
				'to': 105,
				'distance': 150
			},
			{
				'to': 119,
				'distance': 69
			},
			{
				'to': 121,
				'distance': 98
			},
			{
				'to': 124,
				'distance': 85
			}
		],
		"coordinates": {
			"latitude": 53.861816,
			"longitude": 10.684948
		},
	},
	{
		'name': 'Domkirchhof / Fegefeuer',
		'id': 121,
		'edges': [
			{
				'to': 112,
				'distance': 140
			},
			{
				'to': 120,
				'distance': 98
			},
			{
				'to': 125,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.861559,
			"longitude": 10.686194
		},
	},
	{
		'name': 'An der Obertrave / Effengrube',
		'id': 122,
		'edges': [
			{
				'to': 117,
				'distance': 190
			},
			{
				'to': 123,
				'distance': 81
			}
		],
		"coordinates": {
			"latitude": 53.860879,
			"longitude": 10.682808
		},
	},
	{
		'name': 'Effengrube / Großer Bauhof',
		'id': 123,
		'edges': [
			{
				'to': 119,
				'distance': 68
			},
			{
				'to': 122,
				'distance': 81
			},
			{
				'to': 124,
				'distance': 51
			}
		],
		"coordinates": {
			"latitude": 53.861301,
			"longitude": 10.683873
		},
	},
	{
		'name': 'Kleiner Bauhof / Mühlendamm',
		'id': 124,
		'edges': [
			{
				'to': 120,
				'distance': 85
			},
			{
				'to': 123,
				'distance': 51
			},
			{
				'to': 126,
				'distance': 130
			}
		],
		"coordinates": {
			"latitude": 53.861112,
			"longitude": 10.684513
		},
	},
	{
		'name': 'Domkirchhof / Musterbahn',
		'id': 125,
		'edges': [
			{
				'to': 116,
				'distance': 130
			},
			{
				'to': 121,
				'distance': 130
			},
			{
				'to': 126,
				'distance': 170
			}
		],
		"coordinates": {
			"latitude": 53.860660,
			"longitude": 10.687417
		},
	},
	{
		'name': 'Mühlendamm / Musterbahn',
		'id': 126,
		'edges': [
			{
				'to': 124,
				'distance': 130
			},
			{
				'to': 125,
				'distance': 170
			},
			{
				'to': 128,
				'distance': 220
			}
		],
		"coordinates": {
			"latitude": 53.860108,
			"longitude": 10.685071
		},
	},
	{
		'name': 'Mühlenbrücke / Wallstraße',
		'id': 127,
		'edges': [
			{
				'to': 116,
				'distance': 220
			},
			{
				'to': 128,
				'distance': 300
			}
		],
		"coordinates": {
			"latitude": 53.859910,
			"longitude": 10.690474
		},
	},
	{
		'name': 'Mühlendamm / Wallstraße',
		'id': 128,
		'edges': [
			{
				'to': 126,
				'distance': 220
			},
			{
				'to': 127,
				'distance': 300
			}
		],
		"coordinates": {
			"latitude": 53.858456,
			"longitude": 10.686757
		},
	}
]

export default nodes