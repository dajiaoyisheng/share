/**
 * 切换菜单
 * @menuItem 要切换到的菜单标识
 * */ 
// let className = 'content-ele';
// displayMenu('content-ele')
function changeMenu(idx, menuItem){
    // 保存切换到的内容的类名，默认是内容html容器的类名
    let className = null;
    switch (menuItem) {
        // 如果要切换的是 css菜单
        case 'log':
            // 保存css内容容器的类名
            className = 'content-log'
            break;
        // 如果要切换的是 js菜单
        case 'sourses':
            // 保存css内容容器的类名
            className = 'content-sourses'
            break;
        case 'network':
            // 保存css内容容器的类名
            className = 'content-network'
            break;
        case 'performance':
            // 保存css内容容器的类名
            className = 'content-performance'
            break;
        case 'app':
            // 保存css内容容器的类名
            className = 'content-app'
            break;
        case 'code':
            // 保存css内容容器的类名
            className = 'content-code'
            break;
        case 'ajax':
            // 保存css内容容器的类名
            className = 'content-ajax'
            break;
        default:
            className = 'content-ele'
    }   

    menuListEle = Array.from(document.getElementsByClassName('menu-item'))
    menuListEle.forEach((ele, index)=>{
        menuListEle[index].classList.remove("cur-menu-selected");
        menuListEle[idx].classList.add("cur-menu-selected");
    })
    // 调用displayMenu,传入
    displayMenu(className)
}
/**
 * 让点击的菜单内容显示，其他菜单内容隐藏
 * @className 根据类名判断当前要切换的是哪个菜单
 * */ 
function displayMenu(className){
    // 获取到所有的内容容器，因为是类数组，不能使用数组中的方法，Array.from将类数组转为数组
    // 保存为contents
    let contents = Array.from(document.getElementsByClassName('content-item'))
    // 遍历contents
    contents.forEach(element => {
        // 将每个contents样式显示为隐藏
        element.style.display = 'none';
    });
    // 将点击的这个菜单的内容容器显示
    document.getElementsByClassName(className)[0].style.display = 'block';
}