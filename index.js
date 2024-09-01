let mangSo = [];

document.getElementById("themSo").onclick = () =>{
    let so = document.getElementById("so").value *1;
    mangSo.push(so);
    document.getElementById("daySo").innerHTML = mangSo
};
// bài 1
document.getElementById("tinhTong").onclick = () =>{
    let tong = 0;
    for (i of mangSo){
         tong += i ;
    }
    document.getElementById("ketQuaTinhTong").innerHTML = `Tổng: ${tong}`
}


// bài 2 
document.getElementById("DemSo").onclick = () =>{
    let count = 0;
    for (i of mangSo){
        if (i*1 > 0) {
            count++;
        }
    }
    document.getElementById("ketQuaDemSoDuong").innerHTML = `Có ${count} số dương trong mảng`
}

// bài 3
document.getElementById("timSoNhoNhat").onclick = () => {
    let soNhoNhat = Math.min(...mangSo);
    document.getElementById("ketQuaSoNhoNhat").innerHTML =`
    Số nhỏ nhất trong mảng là ${soNhoNhat}`
}

// bài 4 
document.getElementById("timSoDuongNhoNhat").onclick = () =>{
    let mangSoDuong = mangSo.filter(so => so >0);
    let SoDuongNhoNhat = Math.min(...mangSoDuong);
    document.getElementById("ketQuaSoDuongNhoNhat").innerHTML = `Số dương nhỏ nhất là: ${SoDuongNhoNhat}`
}

// bài 5
document.getElementById("timSoChanCuoiCung").onclick = () =>{
    let soChanCuoiCung = mangSo.slice().reverse().find(so => so%2 ===0);
    if (!soChanCuoiCung) {
        return -1
    }
    document.getElementById("ketQuaSoChanCuoiCung").innerHTML = `Số chẵn cuối cùng là: ${soChanCuoiCung}`
}

// bài 6
document.getElementById("doiCho").onclick= () => {
    let viTri1 = document.getElementById("soDoi1").value*1;
    let viTri2 = document.getElementById("soDoi2").value*1;
    let mangSoSauKhiDoi = mangSo.slice();
    let doi = 0;
    doi = mangSoSauKhiDoi[viTri1-1];
    mangSoSauKhiDoi[viTri1-1] = mangSoSauKhiDoi[viTri2-1];
    mangSoSauKhiDoi[viTri2-1] = doi;
    document.getElementById("ketQuaDoiSo").innerHTML = mangSoSauKhiDoi;
}

// bài 7
document.getElementById("sapXepTangDan").onclick= () => {
    let mangSoThuTu = mangSo.sort((a,b) =>  a-b)
    document.getElementById("ketQuaSapXepTangDan").innerHTML = mangSoThuTu;
}

// bài 8
document.getElementById("timSoNguyenToDauTien").onclick= () => {
    function soNguyenTo(num) {
        switch (true) {
            case num <= 1:
                return false;
            case num === 2 :
                return true;
            case num % 2 === 0 :
                return false;
            case num >= 3 :
                for (let i = 3; i <= Math.sqrt(num); i += 2) {
                    if (num % i === 0) return false;
                } return true;
        }
        
    }
    
    function timSoNguyenToDauTien(mangSo){
    for (i of mangSo) {
        if (soNguyenTo(i)) {
        return i;
        }
    }
    }
    console.log(timSoNguyenToDauTien(mangSo));
    document.getElementById("ketQuaSoNguyenToDauTien").innerHTML = `Số nguyên tố đầu tiên là ${timSoNguyenToDauTien(mangSo)}`
}

// bài 9
let mangThem = [];
document.getElementById("themSoMangMoi").onclick = () => {
   let soThem =  document.getElementById("soThem").value*1;
   mangThem.push(soThem);
   document.getElementById("mangThem").innerHTML = mangThem;
}
document.getElementById("demSoNguyen").onclick = () =>{
    countSoNguyen = 0;
    for (i of mangThem){
        if (Number.isInteger(i)){
            countSoNguyen++;
        }
    }
    document.getElementById("ketQuaDemSoNguyen").innerHTML=`Số nguyên có trong mảng: ${countSoNguyen}`
};


// bài 10
document.getElementById("soSanhSoLuongAmDuong").onclick = () => {
    let countSoDuong = 0;
    let countSoAm = 0;
    for (i of mangSo){
        if (i > 0) {
            countSoDuong++;
        } else{
            countSoAm++;
        }
    }
    function soSanh(){
    if (countSoDuong > countSoAm) {
        return ` Số dương > Số âm`;
    }else{
        return ` Số dương < Số âm`;

    }
 }
 document.getElementById("ketQuaSoSanh").innerHTML = soSanh(countSoDuong, countSoAm);

 }