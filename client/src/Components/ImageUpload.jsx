import { useEffect, useState } from "react";
import Button from "./Button";

const ImageUpload = ({ formData, setFormData, onPrev }) => {
  const [images, setImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemove = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    const inputElement = document.getElementById("image-upload-input");
    inputElement.click();
  };

  useEffect(() => {
    setFormData({ ...formData, pictures: images });
  }, [images]);

  return (
    <div className="mx-auto bg-black mt-8 p-4 border border-gray-300 rounded-lg">
      <div
        className="drop-zone border-dashed border-2 p-4 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <p className="text-gray-500">
          Drag & Drop images here or click to select
        </p>
        <input
          id="image-upload-input"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.preview}
              alt={`Preview ${index}`}
              className="w-full h-32 object-cover rounded-md"
            />
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex gap-2 justify-center">
        <Button text="Prev" onClick={onPrev} />
        <Button
          text="Submit"
          onClick={() => {
            console.log(formData);
          }}
        />
      </div>
    </div>
  );
};

export default ImageUpload;
