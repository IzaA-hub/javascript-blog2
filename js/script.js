'use strict';
const optArticleSelector = '.post',
	optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

function titleClickHandler(event) {
	event.preventDefault();

	const clickedElement = this;

	/*remove class 'active' from all article links  */
	const activeLinks = document.querySelectorAll('.titles a.active');

	for(let activeLink of activeLinks){
		activeLink.classList.remove('active');
	}

	/* add class 'active' to the clicked link */
	clickedElement.classList.add('active');

	/*remove class 'active' from all articles */
	const activeArticles = document.querySelectorAll('.posts .active');

	for(let activeArticle of activeArticles){
		activeArticle.classList.remove('active');
	}
	/* get 'href' attribute from the clicked link */
	const articleSelector = clickedElement.getAttribute("href");
	/* find the correct article using the selector (value of 'href' attribute) */
	const targetArticle = document.querySelector(articleSelector);
	// /* add class 'active' to the correct article */
	targetArticle.classList.add('active');
}

function generateTitleLinks(){
	/* remove contents of titleList */
	const titleList = document.querySelector(optTitleListSelector);
	titleList.innerHTML = '';

	/* for each article */
	const articles = document.querySelectorAll(optArticleSelector);
	let html = '';

	for (let article of articles) {
		/* get the article id */
		const articleId = article.id;

		/* find the title element */
		/* get the title from the title element */
		const articleTitle = article.querySelector(optTitleSelector).innerText;

		/* create HTML of the link */
		const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

		/* insert link into html variable */
		html = html + linkHTML;
	}
	/* insert link into titleList */
	titleList.innerHTML = html;

	const links = document.querySelectorAll('.titles a');

	for (let link of links) {
		link.addEventListener('click', titleClickHandler);
	}
}

generateTitleLinks();
function generateTags(){
    /* find all articles */
  
    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);
  
    /* START LOOP: for every article: */
  
    for(let article of articles){
  
      /* find tags wrapper */
  
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log (tagsWrapper);
  
      /* make html variable with empty string */
  
      let html = '';
  
      /* get tags from data-tags attribute */
  
      const articleTags = article.getAttribute('data-tags');
      console.log (articleTags);
  
      /* split tags into array */
  
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
  
      /* START LOOP: for each tag */
  
      for(let tag of articleTagsArray){
  
  
        /* generate HTML of the link */
  
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        console.log (linkHTML);
  
        /* add generated code to html variable */
  
        html = html + linkHTML;
        console.log(html);
  
        /* END LOOP: for each tag */
      }
  
      /* insert HTML of all the links into the tags wrapper */
  
      tagsWrapper.insertAdjacentHTML('beforeend', html);
  
      /* END LOOP: for every article: */
  
    }
  
    const tags = document.querySelectorAll('.post-tags .list li a');
  
    for(let tag of tags){
      tag.addEventListener('click', tagClickHandler);
    }
  }



  generateTags();


  function tagClickHandler(event){
    /* prevent default action for this event */
  
    event.preventDefault();
  
    /* make new constant named "clickedElement" and give it the value of "this" */
  
    const clickedElement = this;
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
  
    const href = clickedElement.getAttribute('href');
    console.log(event);
  
    /* make a new constant "tag" and extract tag from the "href" constant */
  
    const tag = href.replace('#tag-', '');
  
    /* find all tag links with class active */
  
    const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log (tagLinks);
  
    /* START LOOP: for each active tag link */
  
    for(let tagLink of tagLinks){
  
      /* remove class active */
  
      tagLink.classList.remove('active');
  
      /* END LOOP: for each active tag link */
  
    }
  
    /* find all tag links with "href" attribute equal to the "href" constant */
  
    const hreftagLinks = document.querySelectorAll('a[href="' + href + '"]');
  
    /* START LOOP: for each found tag link */
  
    for(let hrefTagLink of hreftagLinks){
  
      /* add class active */
  
    hrefTagLink.classList.add('active');
  
    /* END LOOP: for each found tag link */
  
    }
  
    /* execute function "generateTitleLinks" with article selector as argument */
  
    generateTitleLinks('[data-tags~="' + tag + '"]');
  
  }
