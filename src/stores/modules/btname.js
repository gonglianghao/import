import {defineStore} from 'pinia'
import {ref} from 'vue'

export  const btnameStore = defineStore('name' ,()=>{
    const titleName = ref([])
    const contentAll = ref([])
    titleName.value = ['猪肉','牛肉','羊肉','其他肉类','奶制品',
    '鸡肉','鸭肉','蛋类','贝类','其他海鲜水产','根茎蔬菜','米，面食，粉',
    '瓜果蔬菜','豆制品','菜系','鱼肉','虾类','菌类',]
     
    contentAll.value=[
        {title:'猪肉',typeName:['猪肉','排骨','猪蹄','猪排','猪肝','猪骨','猪腰','猪脑','里脊','猪头','猪血',
        '大排','猪心','猪皮','肘子','肉松','肥肠','腰花','肉皮','猪大肠','火腿','培根','猪耳朵',
        '腊肉','香肠','猪尾巴','猪油','瘦肉','五花肉','猪肺','叉烧','肉末',]},
        {title:'牛肉',typeName:['牛肉','牛排','牛仔骨','牛筋','牛尾','牛百叶','牛杂','肥牛','牛腩','牛肚',]},
        {title:'羊肉',typeName:['羊肉','羊排','羊蝎子','羊腿','羊肚','烤全羊',]},
        {title:'其他肉类',typeName:['兔肉','驴肉','鹿肉','鹅肉','鹅肝','鹅肠','鹅掌',]},
        {title:'奶制品',typeName:['牛奶','奶油','牛肉奶酪','酸奶','黄油','奶粉','炼乳','酥油','淡奶油',]},
        {title:"鸡肉",typeName:['鸡翅','鸡胸','鸡腿','鸡杂','鸡胗','公鸡','小鸡','乌鸡','野鸡','火鸡',
        '鸡肉','土鸡','菜鸡','三黄鸡','童子鸡',]},
        {title:'鸭肉',typeName:['鸭肝','鸭肉','鸭脖','鸭掌','鸭腿','鸭肠','鸭翅','野鸭','老鸭','鸭血',]},
        {title:'蛋类',typeName:['鸡蛋','鸭蛋','鹌鹑蛋','皮蛋','咸蛋','蛋黄','蛋清',] },
        {title:'贝类',typeName:['扇贝','牡蛎','蛤蜊','干贝','带子','瑶柱','花甲','生蚝','河蚌',
        '蛏子','鲍鱼','文蛤','鲜贝','青口',]},
        {title:'其他海鲜水产',typeName:['田螺','泥鳅','黄鳝','甲鱼','鳝鱼','牛蛙','田鸡','海参','鱿鱼',
        '紫菜','章鱼','墨鱼','海螺','海带','海兔','海藻','海胆','乌贼','裙带菜']}
    ]

    return {
        titleName,
        contentAll
    }
},
  {
    persist:true
  }
)