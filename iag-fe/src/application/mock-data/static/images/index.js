import emptyIcon from "url:./empty_icon.png";
import key6Image from "url:./Key6article.jpg";
import key7Image from "url:./Key7article.jpg";
import key8Image from "url:./Key8article.jpg";
import key9Image from "url:./Key9article.jpg";
import key10Image from "url:./Key10article.jpg";
import key11Image from "url:./Key11article.jpg";

const printImages = (images = [emptyIcon, key6Image, key7Image, key8Image, key9Image, key10Image, key11Image,]) => {
    images.map((image) => {
        console.log(image);
    });
};

const Images = {emptyIcon, key6Image, key7Image, key8Image, key9Image, key10Image, key11Image, printImages}

export default Images;