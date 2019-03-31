import Upload from '@/components/upload';

window.addEventListener('DOMContentLoaded', () => {
  const uploads = [];

  $.each('.js-upload', el => {
    uploads.push(new Upload(el));
  });
});
