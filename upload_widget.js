const cloudName = "deqr30pxr";
const uploadPreset = "ml_default";

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);

      //   document
      //     .getElementById("uploadedimage")
      //     .setAttribute("src", result.info.secure_url);
      var img = document.createElement("img");
      img.src = result.info.secure_url;
      document.getElementById("myList").appendChild(img);
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
