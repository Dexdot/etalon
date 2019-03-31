import scroll from '@/helpers/stop-scroll';

// Callbacks
const onOpen = modal => {
  switch (modal) {
    case 'some-modal':
      break;

    default:
      break;
  }
};

const onClose = modal => {
  switch (modal) {
    case 'some-modal':
      break;

    default:
      break;
  }
};

const onEscape = e => {
  if (e.keyCode === 27) {
    const el = $.qs('[data-modal].active');

    if (!el) return false;

    const { modal } = el.dataset;
    close(el, modal);
  }
};

// Init fn
const init = () => {
  $.each('[data-modal]', el => {
    if (!el) return false;

    const { modal } = el.dataset;

    // Toggle
    $.listen(`.js-${modal}-toggle`, 'click', () => {
      if (el.classList.contains('active')) {
        close(el, modal);
      } else {
        open(el, modal);
      }
    });

    // Open
    $.listen(`.js-${modal}-open`, 'click', () => {
      open(el, modal);
    });

    // Close
    $.listen(`.js-${modal}-close`, 'click', () => {
      close(el, modal);
    });
  });
};

window.addEventListener('DOMContentLoaded', init);

// Open / Close
function open(el, modal) {
  const currentActive = $.qs('[data-modal].active');
  if (currentActive) {
    close(currentActive, currentActive.dataset.modal);
  }

  onOpen(modal);
  scroll.disable(el);
  el.classList.add('active');

  window.addEventListener('keydown', onEscape);
}

function close(el, modal) {
  onClose(modal);
  scroll.enable();
  el.classList.remove('active');

  window.removeEventListener('keydown', onEscape);
}
