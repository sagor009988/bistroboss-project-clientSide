import React from "react";
import Sections from "../../../Components/Section/Sections";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxios from "../../../Hooks/useAxios";
import { useForm } from "react-hook-form";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const {name,image,category,recipe,price,_id} = useLoaderData();
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxios();
  const onSubmit = async (data) => {
    // console.log(dataa);
    // image upload to image bb and get a url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send the menu item data to the server with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.display_url,
      };
      const menures = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menures.data);
      if (menures.data.modifiedCount>0
        ) {
        // to do lo
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated  successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data.data);
  };

  
  return (
    <div>
      <Sections subHeading="---repear---" heading="update the item"></Sections>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name *</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Categorry *</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option value="default" disabled>
                  Select one Category!
                </option>
                <option value="salad">salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full flex-1">
              <label className="label">
                <span className="label-text">Price *</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                {...register("price", { required: true })}
                placeholder="price"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
            defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </div>
          <input
            type="file"
           
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
          <button  className="my-4 btn btn-warning bg-amber-400">
            Update ITEM 
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
