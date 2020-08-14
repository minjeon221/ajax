//snapshots_add.js
$(document).ready(function(){
	//배열패턴 = ["이미지 파일", "이미지 타이틀"]
	var $add_arr = [
		["cont_07.jpg", "snapshot_07"],
		["cont_08.jpg", "snapshot_08"],
		["cont_09.jpg", "snapshot_09"],
		["cont_10.jpg", "snapshot_10"],
		["cont_11.jpg", "snapshot_11"],
		["cont_12.jpg", "snapshot_12"],
		["cont_13.jpg", "snapshot_13"],
		["cont_14.jpg", "snapshot_14"]
	];
	var $sh_box = `
			<div class="sh_box">
				<div class="dark">
					<h4>snapshot_01</h4>
				</div>
			</div>
	`;
	for(i=0; i<$add_arr.length; i++){
		$(".add_box").append($sh_box);
	}
	$(".add_box .sh_box").each(function(index){
		$(this).css("background-image", "url(img/"+$add_arr[index][0]+")");
		$(this).find("h4").text($add_arr[index][1]);
	});
});