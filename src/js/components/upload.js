export default class Upload {
  constructor(el) {
    this.DOM = { el };

    // Инпут
    this.DOM.input = $.qs('.upload__field', this.DOM.el);

    // Превьюшка
    this.DOM.filename = $.qs('.upload__text', this.DOM.el);
    this.originalText = this.DOM.filename.textContent;

    this.TYPES = ['png', 'jpg', 'jpeg'];

    this.initEvents();
  }

  initEvents() {
    this.DOM.input.addEventListener('change', () => {
      this.onFileInputChange();
    });
  }

  onFileInputChange() {
    // Выбираем загруженный файл
    const file = this.DOM.input.files[0];
    const fileName = file.name.toLowerCase();

    // Если имя файла заканчивается на одно из расширений, то isImg === true
    const isImg = this.TYPES.some(type => fileName.endsWith(type));

    if (isImg) {
      this.showPreview(file);
    } else {
      this.clear();
    }
  }

  clear() {
    this.hidePreview();
    this.clearInput();
  }

  clearInput = () => {
    this.DOM.input.value = '';
  };

  hidePreview = () => {
    this.DOM.filename.textContent = this.originalText;
  };

  showPreview = file => {
    const reader = new FileReader();

    // Показываем загруженную картинку после загрузки
    reader.addEventListener('load', () => {
      this.DOM.filename.textContent = file.name;
    });

    // base64
    reader.readAsDataURL(file);
  };
}
