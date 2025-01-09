// fake api
var posts = [
  {
    id: 1,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Đặt Taxi An Phú : Tổng Đài Đặt Xe Taxi 4 Chỗ - 7 Chỗ - 16 Chỗ",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-an-phu",
  },
  {
    id: 2,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Đặt Taxi Bình Long : Tổng Đài Taxi Giá Rẻ Tại Bình Phước",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-binh-long-binh-phuoc",
  },
  {
    id: 3,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Đặt Taxi Bù Đăng : Tổng Đài Taxi Giá Rẻ Tại Bình Phước",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-bu-dang-binh-phuoc",
  },
  {
    id: 4,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title:
      "Đặt taxi Vĩnh An Vĩnh Cửu Đồng Nai:nhanh chóng - an toàn - tiết kiệm",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-vinh-an-vinh-cuu",
  },
  {
    id: 5,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Tổng đài đặt Taxi Thuận An nhanh chóng giá rẻ 0559023567",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-thuan-an-binh-duong",
  },
  {
    id: 6,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Đặt Taxi Thủ Đức :Taxi 4 chỗ - 7 chỗ - 16 chỗ Thủ Đức",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-thu-duc",
  },
  {
    id: 7,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Tổng đài đặt Taxi Thủ Dầu Một nhanh chóng giá rẻ 0559023567",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-thu-dau-mot-binh-duong",
  },
  {
    id: 8,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title:
      "Tổng Đài Đặt Xe Taxi Tại Long An Dịch Vụ Đặt Xe Qua Website & Hotline 0559023567",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-long-an",
  },
  {
    id: 9,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title:
      "Tổng Đài Đặt Xe Taxi Tại Đồng Nai Dịch Vụ Đặt Xe Qua Website & Hotline 0559023567",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-dong-nai",
  },
  {
    id: 10,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title:
      "Tổng Đài Đặt Xe Taxi Tại Bình Dương Dịch Vụ Đặt Xe Qua Website & Hotline 0559023567",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-binh-duong",
  },
  {
    id: 11,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Đặt Taxi Chơn Thành : Tổng Đài Taxi Giá Rẻ Tại Bình Phước",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-chon-thanh-binh-phuoc",
  },
  {
    id: 12,
    img: "https://taxinhanh247.pro.vn/assets/image/thumb/grab.jpg",
    title: "Đặt Taxi Cần Giờ :Taxi 4 chỗ - 7 chỗ - 16 chỗ Cần Giờ",
    link: "https://taxinhanh247.pro.vn/bai-viet/taxi-can-gio",
  },
];
function fetchPosts() {
  return new Promise(function (resolve) {
    resolve(posts);
  });
}

function getRandomPosts(posts, numberOfPosts) {
  if (posts.length <= numberOfPosts) {
    return posts; // Nếu số bài viết <= số bài cần lấy, trả về tất cả bài viết
  }

  let randomPosts = [];
  let usedIndices = new Set();

  while (randomPosts.length < numberOfPosts) {
    let randomIndex = Math.floor(Math.random() * posts.length);
    if (!usedIndices.has(randomIndex)) {
      randomPosts.push(posts[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return randomPosts;
}

function displayPosts(posts) {
  const postsContainer = document.querySelector(".blogs");
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    const postElement = document.createElement("li");
    postElement.className = "";
    postElement.innerHTML = `<article><figure><img src="${
      post.img || ""
    }" alt="${
      post.title
    }" loading="lazy" /></figure><h3 ><a target="_blank" href="${post.link}">${
      post.title
    }</a></h3></article>`;
    postsContainer.appendChild(postElement);
  });
}

async function main() {
  const posts = await fetchPosts();
  const randomPosts = getRandomPosts(posts, 10);
  displayPosts(randomPosts);
}

main();
