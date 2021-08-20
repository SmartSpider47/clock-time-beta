	var b_anim_Small = true;
	var b_anim_Big = true;

	var b_anim_arr_hour = true;
	var b_anim_arr_minute = true;
	var b_anim_arr_second = true;

	var b_anim_circle = true;


	var s_anim_Small = "1";
	var s_anim_Big = "1";
	var s_anim_arr_hour = "1";
	var s_anim_arr_minute = "1";
	var s_anim_arr_second = "1";
	var s_anim_circle = "1";


	
	var l_sin = [0.0175, 0.0349, 0.0523, 0.0698, 0.0872, 0.1045, 0.1219, 0.1392, 0.1564, 0.1736, 0.1908, 0.2079, 0.225, 0.2419, 0.2588, 0.2756, 0.2924, 0.309, 0.3256, 0.342, 0.3584, 0.3746, 0.3907, 0.4067, 0.4226, 0.4384, 0.454, 0.4695, 0.4848, 0.5, 0.515, 0.5299, 0.5446, 0.5592, 0.5736, 0.5878, 0.6018, 0.6157, 0.6293, 0.6428, 0.6561, 0.6691, 0.682, 0.6947, 0.7071, 0.7193, 0.7314, 0.7431, 0.7547, 0.766, 0.7771, 0.788, 0.7986, 0.809, 0.8192, 0.829, 0.8387, 0.848, 0.8572, 0.866, 0.8746, 0.8829, 0.891, 0.8988, 0.9063, 0.9135, 0.9205, 0.9272, 0.9336, 0.9397, 0.9455, 0.9511, 0.9563, 0.9613, 0.9659, 0.9703, 0.9744, 0.9781, 0.9816, 0.9848, 0.9877, 0.9903, 0.9925, 0.9945, 0.9962, 0.9976, 0.9986, 0.9994, 0.9998, 1];
	var l_cos = [];

	for (var i = l_sin.length - 2; i >= 0; i--) {
		l_sin.push(l_sin[i]);
	}
	l_sin.push(0);
	for (var i = 0; i < 180; i++) {
		l_sin.push(-l_sin[i]);
	}
	l_sin[359] = 0;

	for (var i = 90; i < 360; i++) {
		l_cos.push(l_sin[i]);
	}
	for (var i = 0; i < 90; i++) {
		l_cos.push(l_sin[i]);
	}


	var con = document.getElementById("_DRAW_CONTENT_");
	var tim = document.getElementById("id_time_1");

	var con_width = "400px";
	var con_height = "400px";

	var circleX = "200";
	var circleY = "200";
	var circleR = "150";
	var circleColor = "black";
	var circleBorderColor = "purple";
	var circleBorderWeight = "5";
	var circleBorderDashArray = "";

	var tcircleR = "5";
	var tcircleColor = "white";
	var tcircleBorderColor = "";
	var tcircleBorderWeight = "";
	var tcircleBorderDashArray = "";

	var DivS_Interval = 130;
	var DivS_Length = 10;
	var DivS_Color = "aqua";
	var DivS_Width = "3";
	var DivS_DashArray = "";

	var DivB_Interval = 125;
	var DivB_Length = 15;
	var DivB_Color = "aqua";
	var DivB_Width = "5";
	var DivB_DashArray = "";

	var ArrowHour_Interval = 10;
	var ArrowHour_Length = 70;
	var ArrowHour_Color = "blue";
	var ArrowHour_Width = "8";
	var ArrowHour_DashArray = "";
	var ArrowHour_ID = "id_arrow_hour";

	var ArrowMinute_Interval = 10;
	var ArrowMinute_Length = 85;
	var ArrowMinute_Color = "yellow";
	var ArrowMinute_Width = "4";
	var ArrowMinute_DashArray = "";
	var ArrowMinute_ID = "id_arrow_minute";

	var ArrowSecond_Interval = 10;
	var ArrowSecond_Length = 100;
	var ArrowSecond_Color = "red";
	var ArrowSecond_Width = "2";
	var ArrowSecond_DashArray = "";
	var ArrowSecond_ID = "id_arrow_second";

	var degree_hour = 0;
	var degree_minute = 0;
	var degree_second = 0;

	con.style.width = con_width;
	con.style.height = con_height;

	var temp_circle_anim = "";
	var temp_circle_length = 2 * Math.PI * parseInt(circleR);
	var temp_circle_darray = "";
	temp_circle_darray += circleBorderDashArray;
	if (b_anim_circle) {
		temp_circle_anim += Anim(s_anim_circle, temp_circle_length);
		if (temp_circle_darray == "") {
			temp_circle_darray += temp_circle_length;
		}
	}

	con.innerHTML += "<circle cx=\"" + circleX + "\" cy=\"" + circleY + "\" r=\"" + circleR + "\" stroke=\"" + circleBorderColor + "\" stroke-width=\"" + circleBorderWeight + "\" stroke-dasharray=\"" + temp_circle_darray + "\" stroke-dashoffset=\"" + temp_circle_length + "\" fill=\"" + circleColor + "\">" + temp_circle_anim + "</circle>";
	con.innerHTML += "<circle cx=\"" + circleX + "\" cy=\"" + circleY + "\" r=\"" + tcircleR + "\" stroke=\"" + tcircleBorderColor + "\" stroke-width=\"" + tcircleBorderWeight + "\" stroke-dasharray=\"" + tcircleBorderDashArray + "\" fill=\"" + tcircleColor + "\" />";

	for (var i = 0; i < 360; i += 6) {
		if (i % 30 == 0) {
			AddLine(i, DivB_Interval, DivB_Length, DivB_Color, DivB_Width, DivB_DashArray, b_anim_Big, s_anim_Big);
		}else {
			AddLine(i, DivS_Interval, DivS_Length, DivS_Color, DivS_Width, DivS_DashArray, b_anim_Small, s_anim_Small);
		}
	}

	AddIdLine(0, ArrowSecond_Interval, ArrowSecond_Length, ArrowSecond_Color, ArrowSecond_Width, ArrowSecond_DashArray, ArrowSecond_ID, b_anim_arr_second, s_anim_arr_second);
	AddIdLine(0, ArrowMinute_Interval, ArrowMinute_Length, ArrowMinute_Color, ArrowMinute_Width, ArrowMinute_DashArray, ArrowMinute_ID, b_anim_arr_minute, s_anim_arr_minute);
	AddIdLine(0, ArrowHour_Interval, ArrowHour_Length, ArrowHour_Color, ArrowHour_Width, ArrowHour_DashArray, ArrowHour_ID, b_anim_arr_hour, s_anim_arr_hour);
	//SetDegree(ArrowHour_ID, 90, ArrowHour_Interval, ArrowHour_Length);

	UpdateTime();

	setInterval(function () {
		UpdateTime();
	}, 1000);



	function AddLine (degree, interval, len, col, weight, darray, tb, seconds) {
		var anm = "";
		var tda = "";
		tda += darray;
		if (tda == "" && tb) {
			tda += len;
		}
		if (tb) {
			anm = Anim(seconds, len);
		}
		degree %= 360;
		var tx1 = parseInt(circleX) + (l_sin[degree] * interval);
		var ty1 = parseInt(circleY) - (l_cos[degree] * interval);
		var tx2 = tx1 + (l_sin[degree] * len);
		var ty2 = ty1 - (l_cos[degree] * len);
		//con.innerHTML += "<line x1=\"" + tx1 + "\" y1=\"" + ty1 + "\" x2=\"" + tx2 + "\" y2=\"" + ty2 + "\" stroke=\"" + col + "\" stroke-width=\"" + weight + "\" stroke-dasharray=\"" + darray + "\" />";
		con.innerHTML += "<line x1=\"" + tx1 + "\" y1=\"" + ty1 + "\" x2=\"" + tx2 + "\" y2=\"" + ty2 + "\" stroke=\"" + col + "\" stroke-width=\"" + weight + "\" stroke-dasharray=\"" + tda + "\" stroke-dashoffset=\"" + len + "\" >" + anm + "</line>";
	}

	function AddIdLine (degree, interval, len, col, weight, darray, lid, tb, seconds) {
		var anm = "";
		var tda = "";
		tda += darray;
		if (tda == "" && tb) {
			tda += len;
		}
		if (tb) {
			anm = Anim(seconds, len);
		}
		degree %= 360;
		var tx1 = parseInt(circleX) + (l_sin[degree] * interval);
		var ty1 = parseInt(circleY) - (l_cos[degree] * interval);
		var tx2 = tx1 + (l_sin[degree] * len);
		var ty2 = ty1 - (l_cos[degree] * len);
		//con.innerHTML += "<line x1=\"" + tx1 + "\" y1=\"" + ty1 + "\" x2=\"" + tx2 + "\" y2=\"" + ty2 + "\" stroke=\"" + col + "\" stroke-width=\"" + weight + "\" stroke-dasharray=\"" + darray + "\" />";
		con.innerHTML += "<line id=\"" + lid + "\" x1=\"" + tx1 + "\" y1=\"" + ty1 + "\" x2=\"" + tx2 + "\" y2=\"" + ty2 + "\" stroke=\"" + col + "\" stroke-width=\"" + weight + "\" stroke-dasharray=\"" + tda + "\" stroke-dashoffset=\"" + len + "\" >" + anm + "</line>";
	}

	function SetDegree (lid, degree, interval, len) {
		var target = document.getElementById(lid);
		var tx1 = parseInt(circleX) + (l_sin[degree] * interval);
		var ty1 = parseInt(circleY) - (l_cos[degree] * interval);
		var tx2 = tx1 + (l_sin[degree] * len);
		var ty2 = ty1 - (l_cos[degree] * len);
		target.setAttribute("x1", tx1);
		target.setAttribute("y1", ty1);
		target.setAttribute("x2", tx2);
		target.setAttribute("y2", ty2);
	}

	function Anim (seconds, len) {
		return "<animate attributeName=\"stroke-dashoffset\" from=\"" + len + "\" to=\"0\" dur=\"" + seconds + "s\" fill=\"freeze\" />";
	}

	function Fixed (v) {
		var tstr = "";
		tstr += v;
		if (tstr.length == 1) {
			tstr = "0" + tstr;
		}
		return tstr;
	}

	function UpdateTime () {
		var date = new Date();

		var v_hour = 0;
		var v_minute = 0;
		var v_second = 0;

		v_second += date.getSeconds();
		v_minute += date.getMinutes();
		v_hour += date.getHours();

		degree_second = v_second * 6;
		SetDegree(ArrowSecond_ID, degree_second, ArrowSecond_Interval, ArrowSecond_Length);

		degree_minute = v_minute * 6;
		SetDegree(ArrowMinute_ID, degree_minute, ArrowMinute_Interval, ArrowMinute_Length);

		degree_hour = (v_hour % 12) * 30 + parseInt(v_minute / 12) * 6;
		SetDegree(ArrowHour_ID, degree_hour, ArrowHour_Interval, ArrowHour_Length);

		tim.innerHTML = Fixed(v_hour) + ":" + Fixed(v_minute) + ":" + Fixed(v_second);

	}