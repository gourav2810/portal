var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope, $http,$timeout) {
	$scope.Submit = "Submit";
	$scope.submittedCount = 0;
	$scope.app = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r12', 'r13', 'r14', 'r15', 'r16', 'r17', 'r18', 'r19', 'r20', 'r21', 'r22', 'r23', 'r24','r25'];
	$scope.input ;
	$scope.inputJSON;
	
	
	//Gourav_enhancement
	
	$scope.totalattempt = 0;
    //Gourav_enhancement
	
	
    $scope.decide = function() {
		if($scope.submittedCount ==0){
			$scope.submittedCount = 1;
			$scope.makeData();
			
			var i =0,temp,temp1,sum=0;
			for(i=0;i<24;i++)
			{
				temp = document.querySelector('input[name="'+$scope.app[i]+'"]:checked').value;
				temp1 = parseInt(temp);
				if(temp1 != 0)
				{
					$scope.totalattempt++;
					sum = sum +temp1;
				}
			}
			
			console.log("AttemptedQuestions:"+$scope.totalattempt);
			console.log("TotalScore:"+sum);
				avg = sum/$scope.totalattempt;
				avg1 = Math.round(avg * 100) / 100;
				var x = document.getElementById("resDIV");
				x.style.display = "block";
				document.getElementById("result").innerHTML = "Your Score is <strong>" + avg1 + "</strong> out of <strong>5</strong>";
				document.getElementById("resultInModal").innerHTML = "Your Score is <strong>" + avg1 + "</strong> out of <strong>5</strong><br>"+"Please take a print(or save as PDF) of your response in the next screen to identify self-improvement actions.";
				angular.element('#myModalShower').trigger('click');
				$scope.fileSelect();
				//$timeout(function () { angular.element('#resultModalClose').trigger('click'); }, 2800); //to close the result modal
				//$scope.timeoutvar = $timeout(function () { window.print(); }, 3000);
				$scope.Submit = "Print";
				
			
			
			
			/*
			var  temp = document.querySelector('input[name="r25"]:checked').value;
			temp1 = parseInt(temp);
			console.log("value of 25 is "+ temp1);
			if(temp1 === 0 )
			{
				console.log(" in caluculateless");
				var i;
				var sum =0;
				var temp;
				var temp1;
				for (i = 0; i < 23; i++){
						 temp = document.querySelector('input[name="'+$scope.app[i]+'"]:checked').value;
						 temp1 = parseInt(temp);
						 sum = sum +temp1;
					 }
				avg = sum/23;
				avg1 = Math.round(avg * 100) / 100;
				var x = document.getElementById("resDIV");
				x.style.display = "block";
				document.getElementById("result").innerHTML = "Your Score is <strong>" + avg1 + "</strong> out of <strong>5</strong>";
				document.getElementById("resultInModal").innerHTML = "Your Score is <strong>" + avg1 + "</strong> out of <strong>5</strong><br>"+"Please take a print(or save as PDF) of your response in the next screen to identify self-improvement actions.";
				angular.element('#myModalShower').trigger('click');
				$scope.fileSelect();
				//$timeout(function () { angular.element('#resultModalClose').trigger('click'); }, 2800); //to close the result modal
				//$scope.timeoutvar = $timeout(function () { window.print(); }, 3000);
				$scope.Submit = "Print";
			}
			else
			{
				console.log(" in caluculate");
				var i;
				var sum=0;
				var temp;
				var temp1;
				for (i = 0; i < 24; i++){
						 temp = document.querySelector('input[name="'+$scope.app[i]+'"]:checked').value;
						 temp1 = parseInt(temp);
						 sum = sum +temp1;
					}
				avg = sum/24;
				avg1 = Math.round(avg * 100) / 100;
				var x = document.getElementById("resDIV");
				x.style.display = "block";
				document.getElementById("result").innerHTML = "Your Score is <strong>" + avg1 + "</strong> out of <strong>5</strong>";
				document.getElementById("resultInModal").innerHTML = "Your Score is <strong>" + avg1 + "</strong> out of <strong>5</strong><br>"+"Please take a print(or save as PDF) of your response in the next screen to identify self-improvement actions.";
				angular.element('#myModalShower').trigger('click');
				$scope.fileSelect();
				// $timeout(function () { angular.element('#resultModalClose').trigger('click'); }, 2800); //to close the result modal
				//$scope.timeoutvar = $timeout(function () { window.print(); }, 3000);
				$scope.Submit = "Print";
			}
			
			
			
			*/
		}
		else{
				window.print();
			}
    };
	
	$scope.fileSelect = function() {
		var platformName = document.getElementById("platform").value;
		
		switch (platformName){
			case 'accountingSol':
				$scope.readFile('accountingSol.txt');
				break;
			case 'CreditRisk':
				$scope.readFile('CreditRisk.txt');
				break;
			case 'EPMandMarkets':
				$scope.readFile('EPMandMarkets.txt');
				break;
			case 'NonFinancial':
				$scope.readFile('NonFinancial.txt');
				break;
			case 'ReportingSolutions':
				$scope.readFile('ReportingSolutions.txt');
				break;
			case 'TreasurySolutions':
				$scope.readFile('TreasurySolutions.txt');
				break;
			case 'HRSolutions':
				$scope.readFile('HRSolutions.txt');
				break;
			case 'ICBTransformation':
				$scope.readFile('ICBTransformation.txt');
				break;
			case 'ResolutionsPlanning':
				$scope.readFile('ResolutionsPlanning.txt');
				break;
			case 'TechnologyTransformation':
				$scope.readFile('TechnologyTransformation.txt');
				break;
			case 'TreasuryTransformation':
				$scope.readFile('TreasuryTransformation.txt');
				break;
			case 'PerformanceBusiness':
				$scope.readFile('PerformanceBusiness.txt');
				break;
			default:
				alert("Failed to update contact admin");
			}
	};
	
	$scope.FileData;
    $scope.readFile = function(fileName) {
		$http({
		method: 'GET',
		url: fileName
		}).then(function (response){
			$scope.FileData = JSON.stringify(response.data);
			$scope.updateFile(fileName);
			$http({method: 'GET',url: 'results.txt'}).then(function (response){
					$scope.FileData = JSON.stringify(response.data);
					data = response.data;
					$scope.updateFile('results.txt');
								},function (error){
					console.log("error");
				});
		},function (error){console.log("error");});
   };
	
	$scope.updateFile = function ( fileName) {
		console.log("in update file");
		if(($scope.FileData).indexOf("]") === 1){
			console.log("first time");
			$scope.FileData = ($scope.FileData).substr(0,($scope.FileData.length)-1);
			$scope.finalData = $scope.FileData+$scope.inputJSON+']';
			//	console.log($scope.finalData);
			console.log("json obj changed --"+JSON.parse($scope.finalData));
		}
		else{
			$scope.FileData = ($scope.FileData).substr(0,($scope.FileData.length)-1);
			$scope.finalData = $scope.FileData+','+$scope.inputJSON+']';
			//	console.log($scope.finalData);
			console.log("json obj changed --"+JSON.parse($scope.finalData));
		}
		
        $http({
			method: 'PUT',
			url: fileName,
            body: "updated file",
			data: JSON.parse($scope.finalData),
			//transformRequest: angular.identity,
            headers: {'Content-Type': 'application/json'}
        }).then(function (response){
		},function (error){console.log("error");});
	};

	$scope.makeData = function() {
		var platform = document.getElementById('platform').value;
		var loc = document.getElementById('location').value;
		console.log(platform);
		console.log(loc);
		$scope.input = {"Platform":platform,"Location":loc, "r1":$scope.r1, "r2":$scope.r2, "r3":$scope.r3, "r4":$scope.r4, "r5":$scope.r5,
							"r6":$scope.r6, "r7":$scope.r7, "r8":$scope.r8, "r9":$scope.r9, "r10":$scope.r10,
										"r12":$scope.r12, "r13":$scope.r13, "r14":$scope.r14, "r15":$scope.r15, "r16":$scope.r16,
												"r17":$scope.r17, "r18":$scope.r18, "r19":$scope.r19, "r20":$scope.r20, "r21":$scope.r21,
														"r22":$scope.r22, "r23":$scope.r23, "r24":$scope.r24, "r25":$scope.r25};
		$scope.inputJSON = JSON.stringify($scope.input);	
		console.log($scope.input);	
		console.log($scope.inputJSON );	
		
	};	
});