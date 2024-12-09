import { useState } from "react";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

	const handleAddProduct = () => {
		console.log(newProduct);
		setNewProduct({
			name: "",
			price: "",
			image: "",
		});
	};

	return (
		<div className="  flex justify-center items-center">
			<div className="flex justify-center items-center flex-col gap-10 w-fit bg-[#1a202c] py-10 px-32">
				<div className="">
					<h1 className="text-2xl capitalize">create new Product</h1>
				</div>
				<div className="flex flex-col gap-5 w-full items-center">
					<input
						type="text"
						placeholder="Product Name"
						value={newProduct.name}
						onChange={(e) =>
							setNewProduct({
								...newProduct,
								name: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Product Price"
						value={newProduct.price}
						onChange={(e) =>
							setNewProduct({
								...newProduct,
								price: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Product Image"
						value={newProduct.image}
						onChange={(e) =>
							setNewProduct({
								...newProduct,
								image: e.target.value,
							})
						}
					/>
					<input
						type="submit"
						onClick={handleAddProduct}
						value="Add Product"
						className="py-2 px-3 bg-slate-400 rounded-xl w-fit cursor-pointer hover:bg-slate-300"
					/>
				</div>
			</div>
		</div>
	);
};
export default CreatePage;
