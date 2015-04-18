$(document).ready(function() {
	function bodyW() {
		var listOfExercise = ['push-ups', 'pull-ups', 'sit-ups', 'lunges', 'squats'];
		var newList = [];
		$('#output').html('BodyWeight Workout<br>3 to 5 rounds<br><br>each exercise should be done for as many reps possible')
		for(var x = 0; x < 5; x++) {
			var currentHtml = $('#output').html();
			var current = listOfExercise[Math.floor(Math.random() * listOfExercise.length)];
			$('#output').html(currentHtml + '<h4>' + current + '</h4>');
			listOfExercise.splice(listOfExercise.indexOf(current), 1);
		}

	}
	
	function WeightL() {
		$('#output').html('Weights Workout<br> 3 to 5 rounds<br>light to moderate weight<br>reps per exercise 8-12')
		var push = ['Shoulder press', 'Bench press'];
		var choice = Math.floor(Math.random() * 2);
		if(choice === 0) {
			$('#output').append('<h4>Bent over rows</h4>');
			$('#output').append( '<h4>' + push[Math.floor(Math.random() * 2)] + '</h4>');
		}
		else if(choice === 1) {
			$('#output').append( '<h4>' + push[Math.floor(Math.random() * 2)] + '</h4>');
			$('#output').append('<h4>Bent over rows</h4>');
		}
		var legs = ['Squats', 'Lunges'];
		$('#output').append('<h4>' + legs[Math.floor(Math.random() * 2)] + '</h4>');
		var curl = ['Bicep curl', 'Reverse curls'];
		var choice2 = Math.floor(Math.random() * 2);
		if(choice2 === 0) {
			$('#output').append('<h4>Tricep extensions</h4>');
			$('#output').append( '<h4>' + curl[Math.floor(Math.random() * 2)] + '</h4>');
			$('#output').append( '<h4>Calf Raises</h4>');
		}
		else if(choice2 === 1) {
			$('#output').append( '<h4>' + curl[Math.floor(Math.random() * 2)] + '</h4>');
			$('#output').append('<h4>Tricep extensions</h4>');
			$('#output').append( '<h4>Calf Raises</h4>');
		}
	}
	
	function bAndw() {
		var listOfExercise2 = ['Push-ups', 'Pull-ups', 'Sit-ups', 'Lunges', 'Squats', 'Shoulder press', 'Bench press', 'Calf Raises', 'Tricep extensions', 'Bicep curl', 'Reverse curls' , 'Bent over rows', 'Squats(with weights)', 'Lunges(with weights)'];
		$('#output').html('BodyWeight & weights Workout<br>3 to 5 rounds<br>Weigyts reps: 8-12 light to moderate weight<br>Bodyweight reps: one less rep than failure')
		for(var x = 0; x < 6; x++) {
			var currentHtml2 = $('#output').html();
			var current1 = listOfExercise2[Math.floor(Math.random() * listOfExercise2.length)];
			$('#output').html(currentHtml2 + '<h4>' + current1 + '</h4>');
			listOfExercise2.splice(listOfExercise2.indexOf(current1), 1);
		}
	}
	$('#page2').hide();
	$('#page3').hide();
	$('#page1').show();
	$('.display').hide();
	$('#home').click(function() {
		$('#page2').hide();
		$('#page3').hide();
		$('#page1').show();
	})
	$('#exer').click(function() {
		$('#page1').hide();
		$('#page3').hide();
		$('#page2').show();
	})
	$('#generate').click(function() {
		$('#page2').hide();
		$('#page1').hide();
		$('#page3').show();
	})
	$('.exercises').click(function() {
		$(this).children().toggle();
	})
	$('#but').click(function() {
		$('#output').html('');
		var workoutT = $('input:radio[name=typeW]:checked').val();
		if(workoutT === 'bodyweight') {
			bodyW();
		}
		else if(workoutT === 'weights') {
			WeightL();
		}
		else if(workoutT === 'WeightsAndBody') {
			bAndw();
		}
	})
})
