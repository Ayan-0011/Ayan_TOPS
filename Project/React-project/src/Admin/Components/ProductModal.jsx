import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductModal = ({ closeModal, FetchAllproducts, editProduct }) => {

  const [cate, setCate] = useState([]);

  const fetch_data = async () => {
    const res = await axios.get("http://localhost:5000/categories");
    setCate(res.data);
  };

  useEffect(() => {
    fetch_data();
  }, []);


  const [obj_cate, setData] = useState({
    id: "",
    category: "",
    title: "",
    brand: "",
    price: "",
    discount: "",
    stock: "",
    images: ["", "", ""],
    min_desc: "",
    long_desc: ""
  });


  useEffect(() => {
    if (editProduct) {
      setData({
        id: editProduct.id,
        category: editProduct.category || "",
        title: editProduct.title || "",
        brand: editProduct.brand || "",
        price: editProduct.price || "",
        discount: editProduct.discount || "",
        stock: editProduct.stock || "",
        images: editProduct.images || ["", "", ""],
        min_desc: editProduct.min_desc || "",
        long_desc: editProduct.long_desc || ""
      });
    }
  }, [editProduct]);

  const changeHandel = (e) => {
    const { name, value } = e.target; setData((prev) => ({...prev,[name]: value })); 
};


  const handleImageChange = (e, index) => {
    const newImages = [...obj_cate.images];
    newImages[index] = e.target.value;

    setData((prev) => ({ ...prev,images: newImages }));
  };


  const submitHandel = async (e) => {
    e.preventDefault();

    try {
      if (editProduct) {
        // UPDATE
        await axios.put(`http://localhost:5000/products/${editProduct.id}`,obj_cate);
        toast.success("Product updated successfully");
      } else {
        await axios.post("http://localhost:5000/products", {...obj_cate, id: new Date().getTime().toString()});
        toast.success("Product added successfully");
      }
      FetchAllproducts();
      closeModal();

    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[900px] h-[700px] rounded-lg p-6 relative overflow-auto">

        <button onClick={closeModal} className="absolute top-2 right-2 text-xl">
          ✖
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          {editProduct ? "Update Product" : "Add Product"}
        </h2>

        <form onSubmit={submitHandel} className="space-y-6 bg-gray-50 p-6 rounded-xl">

          {/* CATEGORY */}
          <select name="category" value={obj_cate.category} onChange={changeHandel} className="w-full p-2 border rounded" required >
            <option value="">Select Category</option>
            {cate.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          {/* TITLE */}
          <input  type="text"  name="title" value={obj_cate.title} onChange={changeHandel}  placeholder="Product Name" className="w-full p-2 border rounded" required />

          {/* BRAND & PRICE */}
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="brand" value={obj_cate.brand} onChange={changeHandel} placeholder="Brand" className="p-2 border rounded" />

            <input type="number" name="price" value={obj_cate.price} onChange={changeHandel} placeholder="Price" className="p-2 border rounded" required />

          </div>

          {/* DISCOUNT & STOCK */}
          <div className="grid grid-cols-2 gap-4">
            <input type="number" name="discount"  value={obj_cate.discount}  onChange={changeHandel}  placeholder="Discount %"  className="p-2 border rounded" />

            <input  type="number"  name="stock"  value={obj_cate.stock}  onChange={changeHandel}  placeholder="Stock"  className="p-2 border rounded"  required />
          </div>

          {/* IMAGES */}
          {obj_cate.images.map((img, i) => (
            <input key={i}  type="url"  value={img}  placeholder={`Image URL ${i + 1}`}  onChange={(e) => handleImageChange(e, i)} className="w-full p-2 border rounded"  />
          ))}

          {/* DESCRIPTIONS */}
          <textarea name="min_desc" value={obj_cate.min_desc} onChange={changeHandel}placeholder="Short Description" className="w-full p-2 border rounded" />

          <textarea name="long_desc" value={obj_cate.long_desc} onChange={changeHandel} placeholder="Long Description" className="w-full p-2 border rounded" />

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            {editProduct ? "Update Product" : "Save Product"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ProductModal;
