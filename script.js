const controls = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const  btn = document.querySelector('.btn');

controls.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  texto(event) {
    this.element.innerText = event;
  },
  color(event) {
    this.element.style.color = event;
  },
  backgroundColor(event) {
    this.element.style.backgroundColor = event;
  },
  height(event) {
    this.element.style.height = `${event}px`;
  },
  width(event) {
    this.element.style.width = `${event}px`;
  },
  border(event) {
    this.element.style.border = event;
  },
  borderRadius(event) {
    this.element.style.borderRadius = event + 'px';
  },
  fontFamily(event) {
    this.element.style.fontFamily = event;
  },
  fontWeight(event) {
    this.element.style.fontWeight = event;
  },
  fontSize(event) {
    this.element.style.fontSize = `${event}rem`;
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function setValues() {
  const property = Object.keys(localStorage);

  property.forEach(name => {
    handleStyle[name](localStorage[name]);
    controls.elements[name].value = localStorage[name];
  });
  showCss();
}

setValues();

function saveValues(name, value) {
  localStorage[name] = value;
}

function showCss() {
  cssText.innerHTML = `<span>` + btn.style.cssText.split(';').join(';</span><span>'); 
}
