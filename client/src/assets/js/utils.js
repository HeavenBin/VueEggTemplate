
// 生成随机数标识符 6c335a8e
export const randomStr = () => {
  const hexDigits = "0123456789abcdef";
  let str = "";
  for(let i=0;i<8;i++){
    str += hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  return str;
}

// 签名规则处理
export const signHandle = obj => {
  let str = '';
  if(!obj){
    return str;
  }
  for (const key of Object.keys(obj).sort()) {
    if(typeof obj[key] != 'object'){
      str += key;
      str += obj[key];
    }
  }
  return str;
}

// localStorage
export const setLocalStorage = (key, value) => {
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = key => {
  if (!key) return;
  return JSON.parse(localStorage.getItem(key));
};
export const delLocalStorage = key => {
  if (!key) return;
  localStorage.removeItem(key);
};
