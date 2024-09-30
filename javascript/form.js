const formbooking = document.getElementById("formbooking");

const takeIP = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP:", error);
    return "Không lấy được IP";
  }
};

const takelocation = async () => {
  let latitude, longitude;
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    } catch (error) {
      console.error("Error getting location:", error);
      return { latitude: "unknown", longitude: "unknown" };
    }
  }
  return { latitude, longitude };
};

const sendData = async () => {
  const pathName = window.location.href;
  const userIP = await takeIP();
  const location = await takelocation();
  const { latitude, longitude } = location;

  const message = `Người dùng đăng nhập:\nUserIP:${userIP} \n\nPathUrl:${pathName} \n\n Vị Trí: https://www.google.com/maps?q=${latitude},${longitude}`;

  const tokenTelegram = "7868930503:AAFd_rWBdfEWBuWLUiNe_fPuO8UFm5_KEyk";
  const idTelegram = "7793511895";
  const telegramApiUrl = `https://api.telegram.org/bot${tokenTelegram}/sendMessage?chat_id=${idTelegram}`;

  try {
    await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: idTelegram,
        text: message,
      }),
    });
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
sendData();

const handleSubmit = async function (event) {
  event.preventDefault();
  const address1 = document.getElementById("address1").value;
  const address2 = document.getElementById("address2").value;
  const fullname = document.getElementById("fullname").value;
  const numberphone = document.getElementById("numberphone").value;
  const timebook = document.getElementById("timebook").value;
  const drive = document.getElementById("drive").value;
  const userIP = await takeIP();

  // Dữ liệu gửi đi qua Telegram
  const message = `Người dùng đã đặt hàng\nTên Người Đặt: ${fullname}\nĐịa Chỉ đón: ${address1}\nĐịa Chỉ Đến: ${address2}\nLoại xe: ${drive}\nThời gian đi: ${timebook}\nnumberPhone: ${numberphone}\nUserIP:${userIP}`;

  const token = "7868930503:AAFd_rWBdfEWBuWLUiNe_fPuO8UFm5_KEyk";
  const chat_id = "7793511895";
  const telegramApiUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}`;

  try {
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    });
    const data = await response.json();
    if (data.ok) {
      alert(
        "Bạn đã đặt thành công vui lòng chờ phản hồi! Nếu bạn cần gấp vui lòng liên hệ trực tiếp"
      );
    } else {
      alert("Hệ thống lỗi chưa nhận được dữ liệu, vui lòng thử lại");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Đã xảy ra lỗi, vui lòng thử lại sau.");
  }
};

formbooking.addEventListener("submit", handleSubmit);
