import autosize from 'autosize';

const updateAutosizeFields = content => {
  $.qsa('.js-autosize', content).forEach(el => {
    autosize.update(el);
  });
};

const close = tab => {
  // type должен содержать 2 слова, разделенное дефисом:
  // общее_имя_таба-конкретный_таб
  const type = tab.split('-')[0];

  $.each(`.js-tab[data-tab^=${type}]`, el => {
    el.classList.remove('active');
  });

  $.each(`.js-tab-content[data-tab^=${type}]`, el => {
    el.classList.remove('active');
  });
};

window.addEventListener('DOMContentLoaded', () => {
  $.each('.js-tab', el => {
    const { tab } = el.dataset;

    el.addEventListener('click', () => {
      close(tab);

      const content = $.qs(`.js-tab-content[data-tab=${tab}]`);
      el.classList.add('active');
      content.classList.add('active');

      updateAutosizeFields(content);
    });
  });
});
