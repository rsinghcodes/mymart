const INITIAL_STATE = {
  categories: [
    {
      title: "Dairy & Bakery",
      imageUrl: "https://i.ibb.co/M59yT7B/dairy-And-Bakery.jpg",
      id: 1,
      linkUrl: "shop/dairy-and-bakery",
    },
    {
      title: "Atta, Dal & Pulses",
      imageUrl:
        "https://i.ibb.co/2M6KK1C/photo-1610725664285-7c57e6eeac3f-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MXx8-Zmxvd-XJ8-ZW58-MHx8-MHx8-i.jpg",
      id: 2,
      linkUrl: "shop/staples",
    },
    {
      title: "Soap & Shampoo",
      imageUrl:
        "https://i.ibb.co/vz4T6TX/photo-1570040546652-7811017b628b-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-MTh8f-HNv-YXAl-Mj-Bi-YXJ8-ZW58.jpg",
      id: 3,
      linkUrl: "shop/soap-and-shampoo",
    },
    {
      title: "Toilet & Sanitary",
      imageUrl:
        "https://i.ibb.co/0GvRqxN/photo-1585690359409-9020f3602bdb-ixid-Mnwx-Mj-A3f-DB8-MHxz-ZWFy-Y2h8-Mz-V8f-HRva-Wxld-CUy-MHBhc-GVyf.jpg",
      id: 4,
      linkUrl: "shop/toilet-and-sanitary",
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
