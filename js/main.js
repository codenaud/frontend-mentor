// FrontMentor Filter
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');

      items.forEach((item) => {
        if (item.classList.contains(category)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
});
