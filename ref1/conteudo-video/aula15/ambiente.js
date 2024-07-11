let num = [9,2,7,8,87]

num[5] = 9//inclementação de elementos
num.push(65)//método interno do javascript

console.log(`Nossa array tem ${num.length} elementos!!`)

for (var i = 0; i < num.length; i++) {
    console.log(`${i+1}º: ${num[i]}`)
}