// eslint-disable-next-line no-unused-vars
var initialState = [
    {
        id: 1,
        name : 'Hà Lan',
        image : 'https://airportcargo.vn/wp-content/uploads/2018/05/van-chuyen-hang-hoa-tu-san-bay-noi-bai-di-ha-lan-1280x720.jpg',
        description : 'Tận hưởng những phút giây lãng mạn',
        price : 40000000,
        inventory : 4,
        rating : 5
    },{
        id: 2,
        name : 'Thai Lan',
        image : 'http://avitour.vn/wp-content/uploads/2019/08/Th%C3%A1i-Lan.jpg',
        description : 'Tận hưởng những phút giây lãng mạn',
        price : 10000000,
        inventory : 3,
        rating : 4
    },{
        id: 3,
        name : 'Phap',
        image : 'https://camnangdulich.com/images/2018/10/du-lich-phap-1280x720.jpg',
        description : 'Tận hưởng những phút giây lãng mạn',
        price : 50000000,
        inventory : 5,
        rating : 5
    }
];

// eslint-disable-next-line no-unused-vars
const products = ( state = initialState,action) => {
    switch(action.type){
        default : return [...state];
    }
}
export default products;