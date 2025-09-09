export default function FormValidation({
  title,
  description,
  price,
  imageUrl,
}: {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}) {
  const errors = {
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  };
  if (title.trim().length < 10 || title.trim().length > 80) {
    errors.title = "Title is required.";
  }
  if (description.trim().length < 20 || description.trim().length > 200) {
    errors.description = "Description is required.";
  }
  if (isNaN(Number(price)) || Number(price) <= 0) {
    errors.price = "Price must be a valid number.";
  }
  if (
    !imageUrl.trim() ||
    !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(imageUrl)
  ) {
    errors.imageUrl = "Image URL is required.";
  }

  return errors;
}
