const Yup = require('yup')

exports.createShopFormSchema = ()=>{
  return  Yup.object().shape({
        name:Yup.string()
        .required('店铺名称不能为空')
        .min(3,'店铺至少3个字符')
        .max(20,'店铺不可超过20字')
    })
}

