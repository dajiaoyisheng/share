/**
 * 切换菜单
 * @menuItem 要切换到的菜单标识
 * */ 
function changeMenu(menuItem){
    // 保存切换到的内容的类名，默认是内容html容器的类名
    let className = 'content-html'
    switch (menuItem) {
        // 如果要切换的是 css菜单
        case 'css':
            // 保存css内容容器的类名
            className = 'content-css'
            break;
        // 如果要切换的是 js菜单
        case 'js':
            // 保存css内容容器的类名
            className = 'content-javascript'
            break;
        case 'brower':
            // 保存css内容容器的类名
            className = 'content-brower'
            break;
    }    
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