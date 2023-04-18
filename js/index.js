const text_A = document.getElementById('txt_A'); 
const btn_cript = document.getElementById('btn_cript');
const btn_descript = document.getElementById('btn_descript');
const aside_text = document.getElementById('aside-txt'); 
const btn_copy = document.getElementById('btn_copy');

btn_cript.addEventListener('click', () => {
  CriptText(text_A.value);
});

btn_descript.addEventListener('click', () => {
  text_A.value = DescriptText(text_A.value);
});

btn_copy.addEventListener('click', () => {
  let text = aside_text;
  navigator.clipboard.writeText(text.innerHTML);
});



const CriptText = (text) => {
  text = text.toLowerCase();
  text = text.replace(/e/g, 'enter');
  text = text.replace(/i/g, 'imes');
  text = text.replace(/a/g, 'ai');
  text = text.replace(/o/g, 'ober');
  text = text.replace(/u/g, 'ufat');
  return aside_text.innerHTML = text;

}

const DescriptText = (text) => {
  text = text.toLowerCase();
  text = text.replace(/enter/g, 'e');
  text = text.replace(/imes/g, 'i');
  text = text.replace(/ai/g, 'a');
  text = text.replace(/ober/g, 'o');
  text = text.replace(/ufat/g, 'u');
  
  return aside_text.innerHTML = text;
}


// render();
