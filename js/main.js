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
        listProducts.push(new Product(i, "Product " + i, i, Date.now(), i + 10, i % 2 == 0 ? true : false));
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
        if (listProduct[i].quality > 0 && listProduct[i].isDelete == false)
            list.push(listProduct[i]);
    }
    return list;
}

/*
 * Bài 13 : Tìm product theo saleDate > date now và isDelete = false using Es6
 */
var filterProductBySaleDateEs6 = (listProduct) => {
    let list = [];
    listProduct.filter((value, index, array) => {
        if (value.quality > 0 && value.isDelete == false)
            list.push(value);
    })
    return list;
}