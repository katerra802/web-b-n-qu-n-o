
// ====================script cho side bar menu
function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'block';
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}

// ====================script cho dem nguoc thoi gian
var target_mili_sec = new Date("Jun 30, 2024 23:59:0").getTime();
function timer() {
  var now_mili_sec = new Date().getTime();
  var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000);

  var day = Math.floor(remaining_sec / (3600 * 24));
  var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
  var min = Math.floor((remaining_sec % 3600) / 60);
  var sec = Math.floor(remaining_sec % 60);

  document.querySelector("#day").innerHTML = day;
  document.querySelector("#hour").innerHTML = hour;
  document.querySelector("#min").innerHTML = min;
  document.querySelector("#sec").innerHTML = sec;
}
if(!isEmpty($('#day'))){
  setInterval(timer, 1000);
}


// cart
$("#cart-icon").click(function () {
  hienThongTinCart();
  $('.cart').addClass("active-cart");
});

$('#close-cart').click(function () {
  $('.cart').removeClass("active-cart")
});

function isEmpty(input) {
  return (input == null || input.length == 0);
}

function taoThongTinSSCart(id, ten, gia, hinh) {
  let phanTuCartMoi = {
    id: id,
    soluong: 1,
    ten: ten,
    gia: gia,
    hinh: hinh
  };
  return phanTuCartMoi;
}

function themVaoGioHang(id, ten, gia, hinh) {
  let sSCart = sessionStorage.getItem("cart");
  let cart;
  let phanTuCartMoi;
  if (!isEmpty(sSCart)) {
    cart = JSON.parse(sSCart);
    let flag = true;
    cart.some((element, index) => {
      if (element["id"] == id) {
        element["soluong"] += 1;
        flag = false;
        return true;
      }
    });
    if (flag) {
      phanTuCartMoi = taoThongTinSSCart(id, ten, gia, hinh);
      cart.push(phanTuCartMoi);
    }
  } else {
    cart = [];
    phanTuCartMoi = taoThongTinSSCart(id, ten, gia, hinh);
    cart.push(phanTuCartMoi);
  }
  let NSXJSON = JSON.stringify(cart);
  sessionStorage.setItem("cart", NSXJSON);

  hienThongTinCart();
}

function hienThongTinCart() {
  let sSCart = sessionStorage.getItem("cart");
  $('#cart-content')[0].innerHTML = '';
  if (!isEmpty(sSCart)) {
    let cart = JSON.parse(sSCart);
    cart.forEach(element => {
      const cartBox = document.createElement('div');
      cartBox.className = 'cart-box';

      const cartImg = document.createElement('img');
      cartImg.src = "admin/imgs/products/" + element["hinh"];
      cartImg.alt = 'hinh cua san pham cart';
      cartImg.className = 'cart-img';

      const detailBox = document.createElement('div');
      detailBox.className = 'detail-box';

      const cartProductId = document.createElement('div');
      cartProductId.className = 'cart-product-id';
      cartProductId.style.visibility = "hidden";
      cartProductId.innerText = element["id"];

      const cartProductTitle = document.createElement('div');
      cartProductTitle.className = 'cart-product-title';
      cartProductTitle.innerText = element["ten"];

      const cartPrice = document.createElement('div');
      cartPrice.className = 'cart-price';
      cartPrice.innerText = parseInt(element["gia"]).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

      const cartQuantity = document.createElement('input');
      cartQuantity.type = 'number';
      cartQuantity.value = element["soluong"];
      cartQuantity.className = 'cart-quantity';
      cartQuantity.addEventListener("change", thayDoiSoLuong);

      const cartRemove = document.createElement('i');
      cartRemove.className = 'fa-solid fa-trash cart-remove';
      cartRemove.addEventListener('click', xoaSPKhoiCart);

      detailBox.appendChild(cartProductId);
      detailBox.appendChild(cartProductTitle);
      detailBox.appendChild(cartPrice);
      detailBox.appendChild(cartQuantity);

      cartBox.appendChild(cartImg);
      cartBox.appendChild(detailBox);
      cartBox.appendChild(cartRemove);

      $('#cart-content')[0].appendChild(cartBox);
    });
    tinhTongTien();
  }
}

function tinhTongTien(){
  let cartboxes = $(".cart-box");
  var tong = 0;
  for (let i = 0; i < cartboxes.length; i++) {
    let cartbox = cartboxes[i];
    let priceElement = $(".cart-price")[i];
    let quatityElement = $(".cart-quantity")[i];
    let numberString = priceElement.innerHTML.replace(/[^0-9]/g, '');
    let price = parseInt(numberString, 10);
    let quantity = quatityElement.value;
    tong = tong + (price * quantity);
  }
  $('#total-price')[0].innerHTML = parseInt(tong).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}

function thayDoiSoLuong(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  let soluong = input.value;
  let id = event.target.parentElement.parentElement.children[1].firstChild.innerHTML;
  console.log(id);

  let sSCart = sessionStorage.getItem("cart");
  let cart;
  if (!isEmpty(sSCart)) {
    cart = JSON.parse(sSCart);
    cart.forEach(element => {
      if (element["id"] == id) {
        element["soluong"] = parseInt(soluong);
      }
    });
  }
  let NSXJSON = JSON.stringify(cart);
  sessionStorage.setItem("cart", NSXJSON);
  tinhTongTien();
}

function xoaSPKhoiCart(event){
  var btnClicked = event.target;
  let cart_box_cha = btnClicked.parentElement;
  let id = cart_box_cha.children[1].firstChild.innerHTML;
  let sSCart = sessionStorage.getItem("cart");
  let cart = JSON.parse(sSCart);
  cart.forEach((element, index) => {
    console.log(element["id"] + " " + id);
    // console.log()
    if(element["id"] == id){
      console.log(cart + id);
      cart.splice(index,1);
    }
  });
  let NSXJSON = JSON.stringify(cart);
  sessionStorage.setItem("cart", NSXJSON);
  // console.log(cart_box_cha);
  btnClicked.parentElement.remove();
  tinhTongTien();
}

function muaHang(){
  alert("Bạn đã đặt mua thành công");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  sessionStorage.clear();
  tinhTongTien();
}

//filter products 
const filterBtn = document.querySelectorAll(".container-filter button");
let filterSP;

const filter = e => {
  filterSP = document.querySelectorAll(".products li");
  document.querySelector(".active-filter").classList.remove("active-filter");
  e.target.classList.add("active-filter");

  filterSP.forEach(a => {
    a.classList.add("Hide");
    if (a.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
      a.classList.remove("Hide");
    } else {
    }
  });
};

filterBtn.forEach(button => button.addEventListener("click", filter));

//slideshow
let slideIndex = 1;
if(!isEmpty($('.mySlides'))){
  showSlides(slideIndex);
  autoSlide();
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoSlide();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoSlide()
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Hàm tự động chuyển slide
function autoSlide() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 3000); // Chuyển slide mỗi 3 giây
}

// Hàm reset lại khoảng thời gian tự động chuyển slide
function resetAutoSlide() {
  clearInterval(slideInterval);
  autoSlide();
}