export type DataPack = {
    name: string,
    value: string
    price: string
    description: string[],
    color: string
}

export const DataPackList: DataPack[] = [{
    name: "GALAXY (GLX179)",
    value: "8GB",
    price: "179K",
    description: [
        'Tặng 01 tài khoản gói cao cấp Galaxy Play',
        'Free 1500 phút gọi nội mạng',
        'Free 150 phút gọi ngoại mạng'
    ],
    color: "#0066B9"
},
{
    name: "ƯNG QUÁ CHỪNG (BIGME)",
    value: "7GB",
    price: "125K",
    description: [],
    color: '#9248E5'
}, {
    name: "TRÓT YÊU (ME70)",
    value: "1GB",
    price: "70k",
    description: [],
    color: "#E31D93"
},{
    name : "SEE TÌNH (ME90)",
    value : "1GB",
    price : "90K",
    description : [
        'Free 30 phút gọi ngoại mạng',
        'Free gọi nội mạng < 10 phút'
    ],
    color : "#17BEB1"
}]

