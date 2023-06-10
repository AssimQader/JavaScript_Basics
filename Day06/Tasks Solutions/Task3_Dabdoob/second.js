
let div_suround_image = document.getElementById("header");

let image = div_suround_image.lastElementChild; //reach the image
let imageCopy = image.cloneNode(false); //create a copy


div_suround_image.removeChild(image);//remove the original image


document.body.prepend(imageCopy);//add image to the top of the page.
imageCopy.style.float = 'right'; //move it to the right.


document.body.append(image);//add image to the end of the page.
image.style.margin = '500 0'; //positioning the image bottom of the page.





let nav_suround_list = document.getElementById("navigation");

let ul = nav_suround_list.firstElementChild; //reach the list
ul.style.position = 'fixed';
ul.style.margin = '300 630';
ul.style.listStyle = 'circle';

