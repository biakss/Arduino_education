(function(){
  const q = document.querySelector('#q');
  const list = document.querySelectorAll('.list a');
  function filter(){
    const s = q.value.toLowerCase();
    list.forEach(a=>{
      const t = a.textContent.toLowerCase() + ' ' + a.getAttribute('data-path').toLowerCase();
      a.style.display = t.includes(s) ? '' : 'none';
    });
  }
  q && q.addEventListener('input', filter);
})();