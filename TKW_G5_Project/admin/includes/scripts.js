function changeFrameSrc(mySrc) {
    var newSrc = "";
    switch(mySrc) {
        case 'themSanPham':
            newSrc = "../products/them_sanpham.html";
            break;
        case 'themNhaSanXuat':
            newSrc = "../manufacturers/them_nhasanxuat.html";
            break;
        // case 'logout':
        //     window.location="../index.html"
        //     // newSrc = "../index.html";
        //     break;
        default:
            window.location="../index.html"
            // newSrc = "../root/index.html";
            exit;
    }
    if(newSrc != ""){
        window.parent.postMessage({ type: 'changeFrameSrc', source: newSrc }, '*');
    }
}