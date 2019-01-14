import MicroModal from '../libs/micromodal';
import scroll from '../helpers/stop-scroll';

$(window).on('DOMContentLoaded', () => {
  MicroModal.init({
    awaitCloseAnimation: true,
    onShow: () => {
      scroll.disable();
    },
    onClose: () => {
      scroll.enable();
    }
  });
});
