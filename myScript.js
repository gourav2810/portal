var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope, $http) {
	$scope.selectOption = 'totalData';
	$scope.selectOption2 = 'totalData';
	$scope.input ;
	$scope.inputJSON;
    $scope.platforms = ["Accounting Solutions","Credit Risk Solutions","EPM and Markets Solutions","Non-Financial Risk Solutions",
												"Reporting Solutions","Treasury Solutions","HR Solutions","ICB Transformation",
													"Resolutions Planning and Brexit","Technology Transformation","Treasury Transformation",
																		"Performance & Business Management"];
	
	$scope.locations = ["London","Edinburgh","Bangalore","Chennai","Gurugram"];
	
	$scope.cleanData = function() {
		$scope.rowTotal = 0;
		$scope.r1Never = 0;$scope.r1Sometimes = 0;$scope.r1Often = 0;$scope.r1Mostly = 0;$scope.r1Always = 0;$scope.r1NA = 0;$scope.r1Avg = 0;
		$scope.r2Never = 0;$scope.r2Sometimes = 0;$scope.r2Often = 0;$scope.r2Mostly = 0;$scope.r2Always = 0;$scope.r2NA = 0;$scope.r2Avg = 0;
		$scope.r3Never = 0;$scope.r3Sometimes = 0;$scope.r3Often = 0;$scope.r3Mostly = 0;$scope.r3Always = 0;$scope.r3NA = 0;$scope.r3Avg = 0;
		$scope.r4Never = 0;$scope.r4Sometimes = 0;$scope.r4Often = 0;$scope.r4Mostly = 0;$scope.r4Always = 0;$scope.r4NA = 0;$scope.r4Avg = 0;
		$scope.r5Never = 0;$scope.r5Sometimes = 0;$scope.r5Often = 0;$scope.r5Mostly = 0;$scope.r5Always = 0;$scope.r5NA = 0;$scope.r5Avg = 0;
		$scope.r6Never = 0;$scope.r6Sometimes = 0;$scope.r6Often = 0;$scope.r6Mostly = 0;$scope.r6Always = 0;$scope.r6NA = 0;$scope.r6Avg = 0;
		$scope.r7Never = 0;$scope.r7Sometimes = 0;$scope.r7Often = 0;$scope.r7Mostly = 0;$scope.r7Always = 0;$scope.r7NA = 0;$scope.r7Avg = 0;
		$scope.r8Never = 0;$scope.r8Sometimes = 0;$scope.r8Often = 0;$scope.r8Mostly = 0;$scope.r8Always = 0;$scope.r8NA = 0;$scope.r8Avg = 0;
		$scope.r9Never = 0;$scope.r9Sometimes = 0;$scope.r9Often = 0;$scope.r9Mostly = 0;$scope.r9Always = 0;$scope.r9NA = 0;$scope.r9Avg = 0;
		$scope.r10Never = 0;$scope.r10Sometimes = 0;$scope.r10Often = 0;$scope.r10Mostly = 0;$scope.r10Always = 0;$scope.r10NA = 0;$scope.r10Avg = 0;
	//	$scope.r11Never = 0;$scope.r11Sometimes = 0;$scope.r11Often = 0;$scope.r11Mostly = 0;$scope.r11Always = 0;$scope.r11NA = 0;$scope.r11Avg = 0;
		$scope.r12Never = 0;$scope.r12Sometimes = 0;$scope.r12Often = 0;$scope.r12Mostly = 0;$scope.r12Always = 0;$scope.r12NA = 0;$scope.r12Avg = 0;
		$scope.r13Never = 0;$scope.r13Sometimes = 0;$scope.r13Often = 0;$scope.r13Mostly = 0;$scope.r13Always = 0;$scope.r13NA = 0;$scope.r13Avg = 0;
		$scope.r14Never = 0;$scope.r14Sometimes = 0;$scope.r14Often = 0;$scope.r14Mostly = 0;$scope.r14Always = 0;$scope.r14NA = 0;$scope.r14Avg = 0;
		$scope.r15Never = 0;$scope.r15Sometimes = 0;$scope.r15Often = 0;$scope.r15Mostly = 0;$scope.r15Always = 0;$scope.r15NA = 0;$scope.r15Avg = 0;
		$scope.r16Never = 0;$scope.r16Sometimes = 0;$scope.r16Often = 0;$scope.r16Mostly = 0;$scope.r16Always = 0;$scope.r16NA = 0;$scope.r16Avg = 0;
		$scope.r17Never = 0;$scope.r17Sometimes = 0;$scope.r17Often = 0;$scope.r17Mostly = 0;$scope.r17Always = 0;$scope.r17NA = 0;$scope.r17Avg = 0;
		$scope.r18Never = 0;$scope.r18Sometimes = 0;$scope.r18Often = 0;$scope.r18Mostly = 0;$scope.r18Always = 0;$scope.r18NA = 0;$scope.r18Avg = 0;
		$scope.r19Never = 0;$scope.r19Sometimes = 0;$scope.r19Often = 0;$scope.r19Mostly = 0;$scope.r19Always = 0;$scope.r19NA = 0;$scope.r19Avg = 0;
		$scope.r20Never = 0;$scope.r20Sometimes = 0;$scope.r20Often = 0;$scope.r20Mostly = 0;$scope.r20Always = 0;$scope.r20NA = 0;$scope.r20Avg = 0;
		$scope.r21Never = 0;$scope.r21Sometimes = 0;$scope.r21Often = 0;$scope.r21Mostly = 0;$scope.r21Always = 0;$scope.r21NA = 0;$scope.r21Avg = 0;
		$scope.r22Never = 0;$scope.r22Sometimes = 0;$scope.r22Often = 0;$scope.r22Mostly = 0;$scope.r22Always = 0;$scope.r22NA = 0;$scope.r22Avg = 0;
		$scope.r23Never = 0;$scope.r23Sometimes = 0;$scope.r23Often = 0;$scope.r23Mostly = 0;$scope.r23Always = 0;$scope.r23NA = 0;$scope.r23Avg = 0;
		$scope.r24Never = 0;$scope.r24Sometimes = 0;$scope.r24Often = 0;$scope.r24Mostly = 0;$scope.r24Always = 0;$scope.r24NA = 0;$scope.r24Avg = 0;
		$scope.r25Never = 0;$scope.r25Sometimes = 0;$scope.r25Often = 0;$scope.r25Mostly = 0;$scope.r25Always = 0;$scope.r25NA = 0;$scope.r25Avg = 0;
	}

	$scope.London = 0;
	$scope.Edinburgh = 0;
	$scope.Bangalore = 0;
	$scope.Chennai = 0;
	$scope.Gurugram = 0;
	$scope.cleanData();
	
	$scope.GetTotData = function() {
		var meth = 'GET';
		var filenam = 'results.txt';
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		$http({method: meth,url: filenam}).then(function (response){
					$scope.totalData = response.data; //JSON.stringify(response.data);
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.totalData);
					}
					else{ 
						$scope.SpecificLocPlatform($scope.totalData ,$scope.loc);
					}
					//data = response.data;
					
					//Platform_location response count
					for(var i = 0;i<Object.keys($scope.totalData).length; i++)
					{
						//console.log(i);
						switch($scope.totalData[i].Location) {
							case "London":
								$scope.London++;
						//		console.log("london");
								break;
							case "Edinburgh":
								$scope.Edinburgh++;
						//		console.log("Edinburgh");
								break;
							case "Bangalore":
								$scope.Bangalore++;
						//		console.log("Bangalore");
								break;
							case "Chennai":
								$scope.Chennai++;
						//		console.log("Chennai");
								break;
							case "Gurugram":
								$scope.Gurugram++;
						//		console.log("Gurugram");
								break;
							default:
								alert("Something wrong contact admin");
						}
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetaccountingSol = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'accountingSol.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
			$scope.accountingSol = response.data; //JSON.stringify(response.data);
			$scope.Accounting = Object.keys($scope.accountingSol).length;
			if($scope.loc == 'totalData') {
				$scope.allLoc($scope.accountingSol);
			}
			else{ 
				$scope.SpecificLocPlatform($scope.accountingSol ,$scope.loc);
			}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetCreditRisk =function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'CreditRisk.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.CreditRisk = response.data; //JSON.stringify(response.data);
					$scope.Credit = Object.keys($scope.CreditRisk).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.CreditRisk);
					}
					else{
						$scope.SpecificLocPlatform($scope.CreditRisk ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetEPMandMarkets = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'EPMandMarkets.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.EPMandMarkets = response.data; //JSON.stringify(response.data);
					$scope.EPM = Object.keys($scope.EPMandMarkets).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.EPMandMarkets);
					}
					else{
						$scope.SpecificLocPlatform($scope.EPMandMarkets ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetNonFinancial = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'NonFinancial.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.NonFinancial = response.data; //JSON.stringify(response.data);
					$scope.Financial = Object.keys($scope.NonFinancial).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.NonFinancial);
					}
					else{
						$scope.SpecificLocPlatform($scope.NonFinancial ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetReportingSolutions = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'ReportingSolutions.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.ReportingSolutions = response.data; //JSON.stringify(response.data);
					$scope.Reporting = Object.keys($scope.ReportingSolutions).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.ReportingSolutions);
					}
					else{
						$scope.SpecificLocPlatform($scope.ReportingSolutions ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetTreasurySolutions = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'TreasurySolutions.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.TreasurySolutions = response.data; //JSON.stringify(response.data);
					$scope.TreasurySol1 = Object.keys($scope.TreasurySolutions).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.TreasurySolutions);
					}
					else{
						$scope.SpecificLocPlatform($scope.TreasurySolutions ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetHRSolutions = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'HRSolutions.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.HRSolutions = response.data; //JSON.stringify(response.data);
					$scope.HR = Object.keys($scope.HRSolutions).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.HRSolutions);
					}
					else{
						$scope.SpecificLocPlatform($scope.HRSolutions ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetICBTransformation = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'ICBTransformation.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.ICBTransformation = response.data; //JSON.stringify(response.data);
					$scope.ICB = Object.keys($scope.ICBTransformation).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.ICBTransformation);
					}
					else{
						$scope.SpecificLocPlatform($scope.ICBTransformation ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetResolutionsPlanning = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'ResolutionsPlanning.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.ResolutionsPlanning = response.data; //JSON.stringify(response.data);
					$scope.Resolutions = Object.keys($scope.ResolutionsPlanning).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.ResolutionsPlanning);
					}
					else{
						$scope.SpecificLocPlatform($scope.ResolutionsPlanning ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetTechnologyTransformation = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'TechnologyTransformation.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.TechnologyTransformation = response.data; //JSON.stringify(response.data);
					$scope.Technology = Object.keys($scope.TechnologyTransformation).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.TechnologyTransformation);
					}
					else{
						$scope.SpecificLocPlatform($scope.TechnologyTransformation ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetTreasuryTransformation = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'TreasuryTransformation.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.TreasuryTransformation = response.data; //JSON.stringify(response.data);
					$scope.Treasury = Object.keys($scope.TreasuryTransformation).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.TreasuryTransformation);
					}
					else{
						$scope.SpecificLocPlatform($scope.TreasuryTransformation ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	$scope.GetPerformanceBusiness = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		var meth = 'GET';
		var filenam = 'PerformanceBusiness.txt';
		
		$http({method: meth,url: filenam}).then(function (response){
					$scope.PerformanceBusiness = response.data; //JSON.stringify(response.data);
					$scope.Performance = Object.keys($scope.PerformanceBusiness).length;
					if($scope.loc == 'totalData') {
						$scope.allLoc($scope.PerformanceBusiness);
					}
					else{
						$scope.SpecificLocPlatform($scope.PerformanceBusiness ,$scope.loc);
					}
				},function (error){
					console.log("error");
				});
	};
	
/*	$scope.GetData = function(dataName, fileName) {
		console.log(" in GetData dataName: "+dataName+";fileName:"+fileName);
		$http({
		method: 'GET',
		url: fileName
		}).then(function (response){
			console.log(response.data);
			eval('$scope.'+dataName) = response.data;
			//eval('($scope.'+dataName+') = '+ response.data );
			console.log('after assign');
			console.log(eval('$scope.'+dataName));
			$scope.allLoc('$scope.' + $scope.platform);
			
		},function (error){console.log("error");});
	};
*/	
		//Initialize data
		$scope.GetaccountingSol();
		$scope.GetCreditRisk();
		$scope.GetEPMandMarkets();
		$scope.GetNonFinancial();
		$scope.GetReportingSolutions();
		$scope.GetTreasurySolutions();
		$scope.GetHRSolutions();
		$scope.GetICBTransformation();
		$scope.GetResolutionsPlanning();
		$scope.GetTechnologyTransformation();
		$scope.GetTreasuryTransformation();
		$scope.GetPerformanceBusiness();
		$scope.GetTotData();
		
	$scope.DataInit = function(){
		$scope.GetTotData();
		$scope.GetaccountingSol();
		$scope.GetCreditRisk();
		$scope.GetEPMandMarkets();
		$scope.GetNonFinancial();
		$scope.GetReportingSolutions();
		$scope.GetTreasurySolutions();
		$scope.GetHRSolutions();
		$scope.GetICBTransformation();
		$scope.GetResolutionsPlanning();
		$scope.GetTechnologyTransformation();
		$scope.GetTreasuryTransformation();
		$scope.GetPerformanceBusiness();
	}

	$scope.app = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r12', 'r13', 'r14', 'r15', 'r16', 'r17', 'r18', 'r19', 'r20', 'r21', 'r22', 'r23', 'r24','r25'];
	
	 $scope.error =0;
	 
	 $scope.decide = function() {
		$scope.platform = document.getElementById('platform').value;
		$scope.loc = document.getElementById('location').value;
		console.log($scope.platform);
		console.log($scope.loc);
		
		if ($scope.platform == 'totalData' && $scope.loc == 'totalData')
		{
			 $scope.cleanData();
			 $scope.GetTotData();
		}
		else 
		{
			console.log("in decide else");
			$scope.cleanData();
			//$scope.GetData($scope.platform,String($scope.platform)+'.txt');
			switch ($scope.platform){
				case 'accountingSol':
						 $scope.GetaccountingSol();
						// $scope.allLoc($scope.accountingSol);
						break;
				case 'CreditRisk':
						 $scope.GetCreditRisk();
						// $scope.allLoc($scope.CreditRisk);
						break;
				case 'EPMandMarkets':
						 $scope.GetEPMandMarkets();
						// $scope.allLoc($scope.EPMandMarkets);
						break;
				case 'NonFinancial':
						 $scope.GetNonFinancial();
						// $scope.allLoc($scope.NonFinancial);
						break;
				case 'ReportingSolutions':
						 $scope.GetReportingSolutions();
						// $scope.allLoc($scope.ReportingSolutions);
						break;
				case 'TreasurySolutions':
						 $scope.GetTreasurySolutions();
						// $scope.allLoc($scope.TreasurySolutions);
						break;
				case 'HRSolutions':
						 $scope.GetHRSolutions();
						// $scope.allLoc($scope.HRSolutions);
						break;
				case 'ICBTransformation':
						 $scope.GetICBTransformation();
						// $scope.allLoc($scope.ICBTransformation);
						break;
				case 'ResolutionsPlanning':
						 $scope.GetResolutionsPlanning();
						// $scope.allLoc($scope.ResolutionsPlanning);
						break;
				case 'TechnologyTransformation':
						 $scope.GetTechnologyTransformation();
						// $scope.allLoc($scope.TechnologyTransformation);
						break;
				case 'TreasuryTransformation':
						 $scope.GetTreasuryTransformation();
						// $scope.allLoc($scope.TreasuryTransformation);
						break;
				case 'PerformanceBusiness':
						 $scope.GetPerformanceBusiness();
						// $scope.allLoc($scope.PerformanceBusiness);
						break;
				case 'totalData':
						 $scope.GetTotData();
						 break;
				default:
					alert("Failed to update contact admin");
			}
		}
	 };
	 
	
	$scope.allLoc = function(dataFinal) {
		$scope.cleanData();
		console.log("In final function ");
		console.log(dataFinal);
		for(var j =0;j<24;j++)
		{
			var x = $scope.app[j];
			for(var i = 0;i<Object.keys(dataFinal).length; i++)
			{
				var obj = dataFinal[i];
				
				switch(eval('obj.' + x)) {
					case 1:
						eval('($scope.'+x+'Never)'+'='+ '($scope.'+x+'Never)' + '+1');
				//		eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				//		console.log("london");
						break;
					case 2:
						eval('($scope.'+x+'Sometimes)'+'='+ '($scope.'+x+'Sometimes)' + '+1');
				//		eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				//		console.log("Edinburgh");
						break;
					case 3:
						eval('($scope.'+x+'Often)'+'='+ '($scope.'+x+'Often)' + '+1');
				//		eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				//		console.log("Bangalore");
						break;
					case 4:
						eval('($scope.'+x+'Mostly)'+'='+ '($scope.'+x+'Mostly)' + '+1');
				//		eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				//		console.log("Chennai");
						break;
					case 5:
						eval('($scope.'+x+'Always)'+'='+ '($scope.'+x+'Always)' + '+1');
				//		eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				//		console.log("Gurugram");
						break;
					case 0:
						eval('($scope.'+x+'NA)'+'='+ '($scope.'+x+'NA)' + '+1');
				//		eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				//		console.log("Gurugram");
						break;
					default:
						alert("Something wrong contact admin");
						 $scope.error =1;
						break;
						//eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '+1');
				        //console.log("Gurugram");
						//break;
		
				}
				
				if($scope.error === 1)
				{
					break;
				}
			}	
			eval('($scope.'+x+'rowTotal)'+'='+ '0');
			
			/*
			eval('($scope.'+x+'Avg)'+'=' + '(1 * ($scope.'+x+'Never)) + ' + '(2 * ($scope.'+x+'Sometimes) )+ '+ '(3 * ($scope.'+x+'Often)) + '+'(4 * ($scope.'+x+'Mostly) )+ '+'(5 * ($scope.'+x+'Always)) + ' + '(0 * ($scope.'+x+'NA))' ); 
			//row total 
			eval('($scope.'+x+'rowTotal)'+'=' + '($scope.'+x+'Never) + ' + '($scope.'+x+'Sometimes)+ '+ '($scope.'+x+'Often) + '+'($scope.'+x+'Mostly) + '+'($scope.'+x+'Always) + ' + '($scope.'+x+'NA)' ); 
			//avr of row
			*/
			
			eval('($scope.'+x+'Avg)'+'=' + '(1 * ($scope.'+x+'Never)) + ' + '(2 * ($scope.'+x+'Sometimes) )+ '+ '(3 * ($scope.'+x+'Often)) + '+'(4 * ($scope.'+x+'Mostly) )+ '+'(5 * ($scope.'+x+'Always))'); 
			//row total 
			eval('($scope.'+x+'rowTotal)'+'=' + '($scope.'+x+'Never) + ' + '($scope.'+x+'Sometimes)+ '+ '($scope.'+x+'Often) + '+'($scope.'+x+'Mostly) + '+'($scope.'+x+'Always)'); 
			//avr of row
			
			
			
			eval('($scope.'+x+'Avg)'+'='+ '($scope.'+x+'Avg)' + '/' + '($scope.'+x+'rowTotal)');
			eval('($scope.'+x+'Avg)'+'='+ 'Math.round(($scope.'+x+'Avg) * 100)' + '/100');
			if($scope.error === 1)
				{
					break;
				}
		}
	};	
/*	console.log($scope.r1Never);
	console.log($scope.r1Sometimes);
	console.log($scope.r1Often);console.log($scope.r1Mostly);
	console.log($scope.r1Always);
	console.log($scope.r1NA);
*/	
	$scope.SpecificLocPlatform = function(originalData, loc) {
		
		var newArray = [];
		
		for(var i = 0;i<Object.keys(originalData).length; i++)
		{
			if (originalData[i].Location == loc)
			{
				newArray.push(originalData[i]);
			}
		}
		if(Object.keys(newArray).length ===0){
			$scope.cleanData();
			console.log("empty array");
		}
		else {
			console.log(newArray);
			$scope.allLoc(newArray);
		}
	}
	$scope.ragClassFunc = function (score_type) {
  if (score_type >= 0 && score_type < 2) {
    return 'red';
  } else if (score_type >= 2 && score_type <3.5) {
    return 'amber';
  } else if (score_type >= 3.5 && score_type <=5) {
    return 'green';
  } else {
	return 'default';
  }
};
});