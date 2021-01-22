const showProfile = document.getElementById('show_profile');
const viewProfile = document.querySelector('.view_profile');
const backDrop = document.querySelector('.backdrop');
const post1 = document.getElementById('post1');
const post2 = document.getElementById('post2');
const article = document.querySelectorAll('.sub_description');

showProfile.addEventListener('click',function(){
	viewProfile.style.display = 'block';
	backDrop.style.display = 'block';
});
backDrop.addEventListener('click',function(){
	backDrop.style.display = 'none';
	viewProfile.style.display = 'none';
});

post1.addEventListener('click',function(){
	article[0].style.height = 'auto';
});

post2.addEventListener('click',function(){
	article[1].style.height = 'auto';
});