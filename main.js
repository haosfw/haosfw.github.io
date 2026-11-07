// 移动端导航
(function(){
  var btn=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){nav.classList.remove('is-open');btn.setAttribute('aria-expanded','false');});
  });
})();
// 数字动画
(function(){
  var nums=document.querySelectorAll('.stat-num[data-count]');
  if(!nums.length||!window.IntersectionObserver) return;
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target,target=parseInt(el.getAttribute('data-count'),10)||0;
      var n=0,step=Math.max(1,Math.ceil(target/40));
      var t=setInterval(function(){
        n+=step; if(n>=target){n=target;clearInterval(t);}
        el.textContent=n;
      },28);
      io.unobserve(el);
    });
  },{threshold:.4});
  nums.forEach(function(el){io.observe(el);});
})();
