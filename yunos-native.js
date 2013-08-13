

if(!window.tglDevice){
	window.tglDevice = {
		imei: 'none',
		model: 'none',
		uuid:'none'
	}
}
if(!window.navigator.tglPim){
	window.navigator.tglPim = {
		getUserInfo: function() {
			return {kp: 'none',
			loginId: 'none'};
		}
	}
}

/**
@api
*/
var yunos = {
	sendMail:'', //???????
	operator:'', //???? 运营商
	network:'', //????? wifi, mobile, false
	mobileNetwork:'', //??? 移动网络类型：hspa...
	imei: tglDevice.imei,
	model: tglDevice.model,
	uuid:tglDevice.uuid,
	kp: navigator.tglPim.getUserInfo().kp,
	aliyunId: navigator.tglPim.getUserInfo().loginId,
	firmware: '',	//????
	baseband: '',	//????
	kernel: ''	//????
};



/**
@api
*/
yunos.sendMail = function(text, forCheckin){
	var d = new Date();
	d = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
	var subject = "[DogFooding]"+(forCheckin?'签到评分 ':'发表反馈 ')+d+' '+localStorage.getItem('staffId');
    var mail={
    	to: 'yunfantuan@alibaba-inc.com',
    	subject: subject,
    	body: text
    };
    location='mailto:?to='+encodeURIComponent(mail.to)+'&subject='+encodeURIComponent(mail.subject)+'&body='+encodeURIComponent(mail.body);
};

yunos.util={
	toast: function(text){
		alert(text);
		//????????
	}
}