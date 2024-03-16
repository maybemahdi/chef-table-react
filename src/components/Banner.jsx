const Banner = () => {
  return (
    <div className="relative mb-[70px] rounded-[20px] bg-[url('https://s3-alpha-sig.figma.com/img/2b8f/f4be/d57b5fb5ad84c9f6a9b1eb9782e9b11b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bL~VLdsv-hRuXW~LIvEdTJne2vh1Xx0I33l~ndKRnQxhJymvKrRGAQEFj6iMi9FKXYy9o~JO5tu7XLBaZFPOH4LqdB1ePmBMeVtBNrYLyHB9~tf-aR3ia965uDSadF8m9QECrpx5TnhX8FdpUEJK92nCiDnMD3qy4lc3GT8VZPqyjoSswP6pCW-3xicITpf8wMaczVaq21kbMm970QukhImhycQ6E1BO9yVxh~vqHAWU9ktR5r5JO0tZR35aCGjHhASku9FbOXKdua1Dr2f2fU1yvc6bpsvSBuAb7eW0xUG8Nh0g9HaMoRoyKbhbq~4~Nm9nUEObIm~wIKpDZdh4YA__')] bg-cover bg-center">
      <div className="absolute rounded-[20px] inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-[150px] text-white">
        <h1 className="lg:text-[52px] lg:w-[80%] lg:leading-[76px] mx-auto font-bold text-2xl">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="mt-4 lg:w-[88%] font-normal text-center mx-auto text-[14px] lg:text-lg">
        Recipes are guides for culinary creation, offering precise instructions for crafting delicious dishes. They inspire creativity and experimentation in the kitchen.
        </p>
        <div className="mt-8 flex mx-auto item-center justify-center space-x-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-[50px] text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-[30px] py-[25px] bg-[#0BE58A] text-black hover:bg-[#0ac577] border border-[#0ac577]">
            Explore Now
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-[50px] text-sm font-semibold border border-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-[30px] py-[25px] bg-[#0be58a00] text-white hover:bg-[#0ac577] hover:border-[#0ac577]">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
