window.onload=function(){
	initTab();
};
function initTab(){
	var lis=byTag('li',byClass('tab-title')[0]);
	for(var j=0;j<lis.length;j++){
		//把排序放在dataIndex中
		lis[j].dataIndex=j;
		lis[j].onclick=function(){
			//标题切换
			byClass('select',byClass('tab-title')[0])[0].className='';
			this.className='select';
			//内容切换
			var father=byClass('tab-content')[0];
			byClass('select',father)[0].className='s';
			getChildren(father)[this.dataIndex].className='select';
		};
	}
}