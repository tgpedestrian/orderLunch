const btn = document.querySelector('#btn');
const brunch = document.querySelector('#brunch');
const rice = document.querySelector('#rice');
const noodle = document.querySelector('#noodle');
const buffet = document.querySelector('#buffet');
const others = document.querySelector('#others');
const order = document.querySelector('#order');
const lunch =document.querySelectorAll('.lunch')


const meal = [
    {
        "name": "食在一方",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "日十",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "鹽行站",
        "category": ["buffet", "rice"],
        "filter": false
    },
    {
        "name": "鍋燒麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "小飯糰大飯糰",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "後校門滷肉飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "魚耶",
        "category": ["brunch", "rice", "noodle"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    }
];

btn.addEventListener('click',function(){



    

    let arr = [];

    const checkCity = Array.from(lunch).filter((checkbox) => checkbox.checked).map((checkbox) => checkbox.value);

    //勾選到 checkbox
    console.log(checkCity); 

    if(checkCity.length>0){

            meal.forEach(function(item) {
                if (checkCity.some(city => item.category.includes(city))) {
                arr.push(item);
                // console.log(arr);
                setTimeout(function(){
                const random = Math.floor(Math.random() * arr.length);


                    order.innerHTML = `${arr[random].name}`;
                },100)
                
            }
            
            
        })
    }
        else{
            const random = Math.floor(Math.random() *meal.length);
            
            
            order.innerHTML=`${meal[random].name}`
        }
        
})








    // if(brunch.checked){

    //     brunch.value;
    //     meal.forEach(function(item){
    //         if(item.category.includes(brunch.value)){
    //             arr.push(item);
    //         }
    //             const random = Math.floor(Math.random() *arr.length);
    //             order.innerHTML=`${arr[random].name}`

    //     })
    // //    const result =  meal.filter((item)=> item.category.some(brunch.value))
    // }


    
    // const random = Math.floor(Math.random() *meal.length);
    
    // console.log(meal[random].name);
    
    // order.innerHTML=`${meal[random].name}`




