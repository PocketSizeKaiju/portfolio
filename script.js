function showCategory(category) {
  var allCategories = document.querySelectorAll('.categoria');
  allCategories.forEach(function (cat) {
    cat.style.display = 'none';
  });

  var selectedCategory = document.querySelector('#' + category);
  console.log(selectedCategory)
  if (selectedCategory) {
    selectedCategory.style.display = 'block';
  }
}

function changeLanguage(selector) {
  var lang = selector.value;

  if (lang === 'es') {
    document.getElementById('main-es').style.display = 'block';
    document.getElementById('main-en').style.display = 'none';
    document.getElementById('main-jp').style.display = 'none';
  } else if (lang === 'en') {
    document.getElementById('main-en').style.display = 'block';
    document.getElementById('main-es').style.display = 'none';
    document.getElementById('main-jp').style.display = 'none';
  } else if (lang === 'jp') {
    document.getElementById('main-jp').style.display = 'block';
    document.getElementById('main-es').style.display = 'none';
    document.getElementById('main-en').style.display = 'none';
  }
}
