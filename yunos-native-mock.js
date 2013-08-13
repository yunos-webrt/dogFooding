function createMockYunOsApi(){
	window.JsCloudAPI = {};
	function fn () {
		return 'YunosMockData';
	};
	JsCloudAPI.init = function() {
		return {
			getNetworkInfo:fn,
			getDeviceId:fn,
			getNetworkOperatorName:fn,
			getNetworkType:fn,
			getUserInfo:fn,
			getCloudUUID:fn,
			toast:fn
		};
	};
}
window.yunosApiPlugin = {};
yunosApiPlugin.system = yunosApiPlugin.system || {
	platform: {
		Model:'yunos-model',
		FirmwareVersion: 'FirmwareVersion',
		BandVersion: 'BandVersion',
		KernelVersion: 'KernelVersion'
	},
	get:function (){}
};