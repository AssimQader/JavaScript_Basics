
let countImgs = 0;  //1 or 2 only

let firstImgClicked_id;    
let firstImgClicked_tag;   

function generate_image(image) {
    if (image.src.includes('Moon')) //condition to prevent change the image after clicking on it.
    {
        image.src = `Images/${image.id}.gif`;
        countImgs++; //2

        if (countImgs == 2)
        {
            setTimeout(() => {
                checkSimilarity(image, image.id);  //image الصورة التانية اللي دوستها, image.id بتاعها
            }, 500);

            countImgs = 0; //we compare two images only, so if counter = 2 --> zero it
        }
        else
        {
            firstImgClicked_id = image.id;
            firstImgClicked_tag = image;
        }
    }
}


function checkSimilarity(img, imgID)
{
    if (imgID != firstImgClicked_id)
    {
        img.src = "Images/Moon.gif";
        firstImgClicked_tag.src = "Images/Moon.gif";
    }

    firstImgClicked_id = 0;
    firstImgClicked_tag = null;
}