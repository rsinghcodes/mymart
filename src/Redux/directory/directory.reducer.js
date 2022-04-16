const INITIAL_STATE = {
  categories: [
    {
      title: "Cookies & Snacks",
      imageUrl: "https://i.ibb.co/M59yT7B/dairy-And-Bakery.jpg",
      id: 1,
      linkUrl: "shop/food-and-snacks",
    },
    {
      title: "Daily Groceries (Flour & Pulses)",
      imageUrl: "https://i.ibb.co/nQ4gkgM/20190709035624-pulses-variety2-g.jpg",
      id: 2,
      linkUrl: "shop/staples",
    },
    {
      title: "Bath & Body",
      imageUrl:
        "https://i.ibb.co/vz4T6TX/photo-1570040546652-7811017b628b-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MTh8f-HNv-YXAl-Mj-Bi-YXJ8-ZW58.jpg",
      id: 3,
      linkUrl: "shop/bath-and-body",
    },
    {
      title: "Toilet & Hygiene",
      imageUrl:
        "https://i.ibb.co/0GvRqxN/photo-1585690359409-9020f3602bdb-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-Mz-V8f-HRva-Wxld-CUy-MHBhc-GVyf.jpg",
      id: 4,
      linkUrl: "shop/toilet-and-hygiene",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
