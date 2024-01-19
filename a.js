function show01(){
	var food = document.getElementsByName("food")[0];
	// selectedIndex : 선택한 option의 index 반환
	var idx = food.selectedIndex;
	// options : select 태그가 가진 option 태그들
	var foodName = food.options[idx].value;
	alert(foodName + " 먹어야지먹어야지먹어야지먹어야지먹어야지먹어야지!");
}