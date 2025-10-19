// Category data for the e-commerce application
export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxqixYyGsHX-qCLa8w3x2FZF1AWLymr1namktiZi96ZzaNwG7I602jkbg3odMnS9K1do7rw3WwxUQTbGMFTkdENvvtjKO3lXSmzahqSx-tQrvL8T6zYNnJx-9L4Zucjx7zPve7tBB6a8BIZVOJUf72ssoTcJdfkJZErMi7Sr_3aYEvpq6uGsGX47cWZhK7CcjiBegxceP3omeO6vjRh9bZTw-K8tdXqKCQe6sipVbv-YkPpMkk9gYbwLBoIguc3sVj8_znPQppmWtN",
    description: "Latest gadgets and electronic devices",
    productCount: 128
  },
  {
    id: 2,
    name: "Clothing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAvIsyoJo7e50xzP376QgnsKWrrfvyRLksiQb5vpyQ1hLqinlOPENMgVMaZ5Y_kyQkNf0EsqmWe93Y4WqN0VxPFLxHVUGrmfVSh-DHDf1E1WxLsXyHOoDJ-UFL7DCit6dLl1OUfMyhT0fVUah-jedRtqY28z_DV-hDdPInp9NgP5JvuyCROiDfL8rhZKdOt0DLi_Nkx3kYhvwxpjrnKgpOnggX4ACksN1Ta3s3FLG5LvK7BNuJWmwRhYbeGwwWHWw2ihYgT9sEIZc0",
    description: "Fashionable apparel for men and women",
    productCount: 256
  },
  {
    id: 3,
    name: "Home & Kitchen",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCchZIXJfxH3yFptHd4YRms6K2qM7yUoxuTDon0bPXZNfGPKungCtVJ2f2JbxK1Xu1FdGIz_kTYbbta9Fel4-jMZf5wdhc-XXoq9G3c8wYEmxZ6ULvRm8I2HFj0THDXg41RnmRQ0WzarhT5AU1ydrXgGBHb5m4LKulLAmK327RuJnBZ3Q0bi_SnAur_S1BH636akR0qHPkzasQqO0M74xIUjOZs8zcG0_B4ObvPCKkaCKVdivWCLsQxqJ5sxII_c-8LQmV6jHk6_bId",
    description: "Everything for your home and kitchen",
    productCount: 94
  },
  {
    id: 4,
    name: "Beauty & Personal Care",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ5hWigfETOyPw8ePsdCRmBeXtOpo5HU4B_ZiZmZxmNhMRwTatc9bMyFhjus9Y0T1qhuIJv5m-T1SdGjpbdLF6QHHDqMDwcdhd-XILVjYm_RKZ4B2c7jX3mYHb9g6FI5kK6sFWhi3hL9yNwtK4wZmN1OwPIKpuldHoJCx8qEA6ylB4MRCVrFZ-3-VlJXyCMS311HmdNt1Sv_-Qn-4w3ZRg5V_bhTEV5ilIoMrkygA-PB7V39yPqC6i1ioYe9kKDTpdPaRnMqoC3FHR",
    description: "Skincare, makeup, and personal care products",
    productCount: 76
  },
  {
    id: 5,
    name: "Sports & Outdoors",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHsRPx57DR5Atx0PrAIn5iKLYZtgUs61iMPAlJB0A_BhQedRCXGJPoijQJviLF5sOiJ2C6dzRFeXSZwSS1utFbFKajygA7CVmPy1L8hm38DrDbIKyAKeXVT_wizm-KiN8f1yh9HSB0ENWiaw90-amW5zDA5q8Ma0xwCiaujACCiZmn8hd6y55HYngKTcMbi-_c4smb8-H33edQ4gzUvUczih52o2uuK3BtW3_RIcunk_Wx8pcJaMGQREHjwVk6nX_ShKAWegu9lKNQ",
    description: "Fitness equipment and outdoor gear",
    productCount: 88
  },
  {
    id: 6,
    name: "Books & Media",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDse1EDJpKSEGw-eLpilZCSC0ePABtEoA49LqauE4VmIHs-Y8jRz-QyL4WqME-UgrslgVoHZmMrg0BjCTljKo1rTB8pYCctLyGUsWxEVn7ni3j7KMNK0t0GNyqEFf2C5ff7WviXAD1g9ya1_EE_6qVNhidYO_CA5cKe0jryX8MXt3Rc5j_HqwfTYEn3_uvmYxumRFJhmDGLjgWE_N6kRZO7WoOQshANWB-t6YpVmfr_3sRgLAI7Ow9PauIkWf2v1rCr4AmClQQMIhd5",
    description: "Books, music, and movies",
    productCount: 142
  }
];

// Function to get all categories
export const getAllCategories = () => {
  return categories;
};

// Function to get a category by ID
export const getCategoryById = (id) => {
  return categories.find(category => category.id === parseInt(id));
};