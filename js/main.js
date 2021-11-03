var listProducts = [];

function CallTest() {
    console.log("Fetch list product");
    fetchListProduct();
    console.log(listProducts);

    console.log("Tìm kiếm theo id by for");
    console.log(filterProductById(listProducts, 3));

    console.log("Tìm kiếm by id es6");
    console.log(filterProductByIdEs6(listProducts, 5));

    console.log("Tìm kiếm by quanlity > 0 and isDelete = false using for");
    console.log(filterProductByQuality(listProducts));

    console.log("Tìm kiếm by quanlity > 0 and isDelete = false using Es6");
    console.log(filterProductByQualityEs6(listProducts));

    console.log("Tìm kiếm saleDate lớn hơn ngày hiện tại and isDelete = false using for");
    console.log(filterProductBySaleDate(listProducts));

    console.log("Tìm kiếm saleDate lớn hơn ngày hiện tại and isDelete = false using Es6");
    console.log(filterProductBySaleDateEs6(listProducts));

    console.log(totalProduct(listProducts));
    console.log(totalProductEs6(listProducts));

    console.log("Tìm kiếm có tồn tại product nào có categoryId không, dùng for");
    console.log(isHaveProductInCategory(listProducts, 11));
    console.log(isHaveProductInCategory(listProducts, 10));

    console.log("Tìm kiếm array chứa array string (id, tên) product có saleDate > ngày hiện tại và quality > 0")
    console.log(filterArrayProductBySaleDate(listProducts));
    console.log(filterArrayProductBySaleDateEs6(listProducts));
}

/*
 * Bài 9 : Tạo class product
 */
class Product {

    constructor(id, name, categoryId, saleDate, quality, isDelete) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.saleDate = saleDate;
        this.quality = quality;
        this.isDelete = isDelete;
    }
}

/*
 * Bài 10 : Tạo dữ liệu cho product
 */
var fetchListProduct = () => {
    for (var i = 1; i < 11; i++) {
        listProducts.push(new Product(i, "Product " + i, i, getDateTomorrow(), i + 10, i % 2 == 0 ? true : false));
    }
    return listProducts;
}

/*
 * Bài 11 : Tìm product theo Id using for
 */
var filterProductById = (listProduct, idProduct) => {
    let product = null;
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].id == idProduct)
            product = listProduct[i];
    }
    return product;
}

/*
 * Bài 11 : Tìm product theo Id using es6
 */
var filterProductByIdEs6 = (listProduct, idProduct) => {
    if (!listProduct || idProduct < 0)
        return null;

    let product = null;
    listProduct.find((value, index, array) => {
        if (value.id == idProduct)
            product = value;
    })
    return product;
}

/*
 * Bài 12 : Tìm product theo quality > 0 và isDelete = false 
 */
var filterProductByQuality = (listProduct) => {
    let list = [];
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].quality > 0 && listProduct[i].isDelete == false)
            list.push(listProduct[i]);
    }
    return list;
}

/*
 * Bài 12 : Tìm product theo quality > 0 và isDelete = false using Es6
 */
var filterProductByQualityEs6 = (listProduct) => {
    let list = [];
    listProduct.filter((value, index, array) => {
        if (value.quality > 0 && value.isDelete == false)
            list.push(value);
    })
    return list;
}

/*
 * Bài 13 : Tìm product theo saleDate > date now và isDelete = false using for
 */
var filterProductBySaleDate = (listProduct) => {
    let list = [];
    for (let i = 0; i < listProduct.length; i++) {
        if (compare_dates(listProduct[i].saleDate, getDate()) == 1 && listProduct[i].isDelete == false)
            list.push(listProduct[i])
    }
    return list;
}

/*
 * Bài 13 : Tìm product theo saleDate > date now và isDelete = false using Es6
 */
var filterProductBySaleDateEs6 = (listProduct) => {
    let list = [];
    listProduct.filter((value, index, array) => {
        if (compare_dates(value.saleDate, getDate()) == 1 && value.isDelete == false)
            list.push(value);
    })
    return list;
}

/*
 * Bài 14: Tính tổng các sản phẩm (tổng quality) chưa bị xóa
 */
var totalProduct = (listProduct) => {
    let total = 0;
    if (!listProduct)
        return count;
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].isDelete == true) {
            total += listProduct[i].quality;
        }
    }
    return total;
}

/*
 * Bài 14: Tính tổng các sản phẩm (tổng quality) chưa bị xóa sử dụng Es6
 */
var totalProductEs6 = (listProduct) => {
    if (!listProduct)
        return 0;

    var count = listProduct.reduce((total, value) => {
        if (value.isDelete === true)
            total++;
        return total;
    })
    return count;
}

/*
 * Bài 15
 */
var isHaveProductInCategory = (listProduct, categoryId) => {
    let output = false;
    if (!listProduct || categoryId < 0)
        return false;
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].categoryId === categoryId)
            output = true;
    }
    return output;
}

/*
 * Bài 15 : Es6 Array.find()
 */
var isHaveProductInCategoryEs6 = (listProduct, categoryId) => {
    let output = false;
    if (!listProduct || categoryId < 0)
        return false;
    listProduct.find((value, index, array) => {
        if (value.categoryId == categoryId)
            output = true;
    })
    return output;
}

/*
 * Bài 16 :
 */
var filterArrayProductBySaleDate = (listProduct) => {
    if (!listProduct)
        return null;

    let output = [];
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].quality > 0 && compare_dates(listProduct[i].saleDate, getDate()) == 1) {
            let pr = new Array(
                listProduct[i].id,
                listProduct[i].name
            )
            output.push(pr);
        }
    }
    return output;
}

var filterArrayProductBySaleDateEs6 = (listProduct) => {
    if (!listProduct)
        return null;

    let output = [];
    listProduct.map((value, index, array) => {
        output.push(new Array(value.id, value.name))
    })
    return output;
}


/*
 * Get date now day/moth/year
 */
var getDate = () => {
    let today = new Date();
    return today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
}

/*
 * Get tomorrow 
 */
var getDateTomorrow = () => {
    let today = new Date();
    return today.getMonth() + '/' + (today.getDate() + 1) + '/' + today.getFullYear();
}

/*
 * So sánh 2 ngày 
 */
var compare_dates = function(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    if (d1 > d2)
        return 1
    else if (d1 < d2)
        return -1;
    else
        return 0;
}