'use strict';
function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [IN PROGRESS] add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');
  /* [DONE] remove class 'active' from all articles */
    //const activeArticles = document.querySelectorAll('.articles a.active');
	const activeArticles = document.querySelectorAll('.posts a.active');
	for(let activeArticle of activeArticles){
		activeArticle.classList.remove('active');
	}
  /* get 'href' attribute from the clicked link */
	const articleSelector = clickedElement.getAttribute("href");
	console.log('articleSelector:', articleSelector);  
	clickedElement.getAttribute("href");
  /* find the correct article using the selector (value of 'href' attribute) */
	const targetArticle = document.querySelector(articleSelector);
	console.log('targetArticle:',targetArticle);
  /* add class 'active' to the correct article */
	targetArticle.classList.add('active'); 
}
	const 	optArticleSelector = '.post',
			optTitleSelector = '.post-title',
			optTitleListSelector = '.titles';
function generateTitleLinks(){
	console.log('generateTitleLinks');
  /* remove contents of titleList */
	//const titleList;
	const titleList= document.querySelector(optTitleListSelector).innerHTML=' ';
		//titleList=.innerHTML='';
		//const titleList = querySelector.innerHTML(optTitleListSelector);
  /* for each article */
	const articles;
	let html = '';
	for(let article of articles){
    /* get the article id */
		const articleId=document.getElementById('id')
    /* find the title element */
    /* get the title from the title element */
		const articleTitle =article.querySelector(optTitleSelector).innerHTML;
    /* create HTML of the link */
    
	
	//const linkHTML = '<li><a href="#"><span></span></a></li>';
	//const linkHTML = '<li><a href="#' + '"><span>' + '</span></a></li>';
	const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
	console.log('generateTitleLinks');
	/* insert link into titleList */
	titleList.innerHTML = titleList.innerHTML + linkHTML;
    /* insert link into html variable */
	 html = html + linkHTML;
	 console.log('html');
	}
	const links = document.querySelectorAll('.titles a');
	console.log('links');
	for(let link of links){
	link.addEventListener('click', titleClickHandler);
	}
  titleList.innerHTML = html;
}
generateTitleLinks();