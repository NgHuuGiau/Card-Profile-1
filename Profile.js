// Đối tượng chứa toàn bộ nội dung của trang theo từng ngôn ngữ (tiếng Việt và tiếng Anh)
const content = {
    vi: { // Nội dung cho ngôn ngữ tiếng Việt
        windowTitle: "Nguyễn Hữu Giàu - Profile", // Tiêu đề cửa sổ
        aboutTitle: "Giới Thiệu Bản Thân", // Tiêu đề phần Giới Thiệu
        aboutDesc: "Tổng quan về thông tin cá nhân và học vấn của tôi.", // Mô tả phần Giới Thiệu
        name: "Nguyễn Hữu Giàu", // Tên
        major: "Chuyên ngành Công nghệ Thông tin", // Chuyên ngành
        university: "Đại Học Nguyễn Tất Thành (Viện Quốc Tế)", // Trường Đại học
        projectsTitle: "Các Dự Án Nổi Bật", // Tiêu đề phần Dự Án
        projectsDesc: "Những dự án cá nhân và nhóm mà tôi đã thực hiện.", // Mô tả phần Dự Án
        sudokuTitle: "SUDOKU", // Tiêu đề dự án Sudoku
        sudokuDesc: "Dự án Sudoku là một trò chơi giải đố kinh điển được phát triển bằng Python, sử dụng thư viện Pygame cho giao diện đồ họa và Tkinter cho màn hình menu. Trò chơi mang đến trải nghiệm thú vị với bảng Sudoku ngẫu nhiên, hỗ trợ người dùng nhập số, kiểm tra tính hợp lệ và thông báo chiến thắng khi hoàn thành.", // Mô tả dự án Sudoku
        websiteTitle: "Website Cá Nhân", // Tiêu đề dự án Website Cá Nhân
        websiteDesc: "Website Hồ sơ Cá Nhân là nơi trưng bày thông tin cá nhân, kỹ năng và các dự án nổi bật của bạn. Với thiết kế tối giản nhưng hiện đại, website giúp bạn gây ấn tượng với nhà tuyển dụng hoặc đối tác một cách chuyên nghiệp. Đặc biệt, dự án Sudoku của bạn cũng được giới thiệu chi tiết tại đây", // Mô tả dự án Website Cá Nhân
        contactTitle: "Liên Hệ & Mạng Xã Hội", // Tiêu đề phần Liên Hệ
        contactDesc: "Cách tốt nhất để liên lạc và kết nối với tôi.", // Mô tả phần Liên Hệ
        contactInfoHeading: "Thông tin liên hệ", // Tiêu đề phụ Thông tin liên hệ
        emailLabel: "Email:", // Nhãn Email
        phoneLabel: "Số điện thoại:", // Nhãn Số điện thoại
        addressLabel: "Địa chỉ:", // Nhãn Địa chỉ (nếu có)
        socialFollowHeading: "Theo dõi tôi trên các nền tảng", // Tiêu đề phụ Mạng xã hội
        englishButton: "English", // Văn bản nút chuyển đổi ngôn ngữ (sang tiếng Anh)
        vietnameseButton: "Tiếng Việt" // Văn bản nút chuyển đổi ngôn ngữ (sang tiếng Việt)
    },
    en: { // Nội dung cho ngôn ngữ tiếng Anh
        windowTitle: "Nguyen Huu Giau - Profile",
        aboutTitle: "About Me",
        aboutDesc: "An overview of my personal and academic information.",
        name: "Nguyen Huu Giau",
        major: "Information Technology Major",
        university: "Nguyen Tat Thanh University (International Institute)",
        projectsTitle: "Featured Projects",
        projectsDesc: "My personal and group projects.",
        sudokuTitle: "SUDOKU",
        sudokuDesc: "The Sudoku project is a classic puzzle game developed in Python, utilizing the Pygame library for the graphical interface and Tkinter for the menu screen, providing a smooth and intuitive gaming experience.",
        websiteTitle: "Personal Website",
        websiteDesc: "A personal portfolio website is a professional and engaging way to present your information, skills, and outstanding projects, making it easy for recruiters to access your profile.",
        contactTitle: "Contact & Social Media",
        contactDesc: "The best ways to get in touch and connect with me.",
        contactInfoHeading: "Contact Information",
        emailLabel: "Email:",
        phoneLabel: "Phone:",
        addressLabel: "Address:",
        socialFollowHeading: "Follow me on platforms",
        englishButton: "English",
        vietnameseButton: "Vietnamese"
    }
};

let currentLang = 'vi'; // Biến theo dõi ngôn ngữ hiện tại, mặc định là tiếng Việt
let isDarkMode = false; // Biến theo dõi chế độ tối, mặc định là tắt (false)

// Hàm cập nhật nội dung văn bản trên trang dựa trên ngôn ngữ hiện tại
function updateContent() {
    // Lấy tất cả các phần tử HTML có thuộc tính 'data-key'
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key'); // Lấy giá trị của data-key
        // Kiểm tra xem có nội dung tương ứng với key và ngôn ngữ hiện tại không
        if (content[currentLang][key]) {
            // Loại trừ themeToggle và langToggle khỏi việc cập nhật textContent
            // vì chúng được điều khiển bằng icon và text riêng biệt
            if (element.id !== 'themeToggle' && element.id !== 'langToggle') {
                element.textContent = content[currentLang][key]; // Cập nhật nội dung văn bản
            }
        }
    });
    // Cập nhật icon cho nút chuyển đổi ngôn ngữ sau khi cập nhật các phần tử khác
    document.getElementById('langToggle').innerHTML = '<i class="fas fa-globe"></i>'; // Hiển thị icon quả địa cầu
}

// Hàm cập nhật giao diện của nút chuyển đổi chủ đề (icon và nền)
function updateThemeToggleButton() {
    const themeToggleButton = document.getElementById('themeToggle'); // Lấy nút chuyển đổi chủ đề
    if (!themeToggleButton) return; // Thoát khỏi hàm nếu không tìm thấy nút

    if (isDarkMode) { // Nếu đang ở chế độ tối
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>'; // Hiển thị icon mặt trăng
        // Màu nền của nút sẽ được xử lý bằng CSS thông qua class `body.dark-mode`
    } else { // Nếu đang ở chế độ sáng
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Hiển thị icon mặt trời
        // Màu nền của nút sẽ được xử lý bằng CSS thông qua class mặc định (không có `dark-mode`)
    }
}

// Hàm chuyển đổi chế độ sáng/tối
function toggleDarkMode() {
    isDarkMode = !isDarkMode; // Đảo ngược trạng thái của biến isDarkMode (true thành false, false thành true)
    // Thêm hoặc xóa class 'dark-mode' trên thẻ <body>
    // Điều này sẽ kích hoạt các quy tắc CSS cho chế độ tối
    document.body.classList.toggle('dark-mode', isDarkMode);
    updateThemeToggleButton(); // Gọi hàm để cập nhật icon và kiểu của nút chủ đề
    updateContent(); // Gọi hàm để cập nhật nội dung văn bản (nếu có phần nào bị ảnh hưởng bởi theme)
}

// Hàm chuyển đổi ngôn ngữ
function toggleLanguage() {
    // Chuyển đổi ngôn ngữ hiện tại giữa 'vi' (tiếng Việt) và 'en' (tiếng Anh)
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    updateContent(); // Gọi hàm để cập nhật lại toàn bộ nội dung theo ngôn ngữ mới
}


// --- Các Hàm Điều Khiển Cửa Sổ ---

// Hàm phóng to cửa sổ (full màn hình)
function maximizeWindow() {
    const windowFrame = document.querySelector(".window-frame"); // Lấy phần tử khung cửa sổ
    const relaunchLogo = document.getElementById("relaunch"); // Lấy nút khởi động lại
    const mainContent = document.getElementById("mainContent"); // Lấy phần nội dung chính

    // Xóa bất kỳ class trạng thái kích thước trước đó (minimized, restored, initial-reopen-state)
    windowFrame.classList.remove("minimized", "restored", "initial-reopen-state");
    windowFrame.classList.add("maximized"); // Thêm class 'maximized' để áp dụng kiểu phóng to

    // Ẩn nút khởi động lại
    relaunchLogo.style.display = "none";
    
    // Đảm bảo nội dung chính hiển thị và chiếm không gian (nếu trước đó bị ẩn)
    mainContent.style.opacity = "1";
}

// Hàm thu nhỏ cửa sổ
function minimizeWindow() {
    const windowFrame = document.querySelector(".window-frame"); // Lấy phần tử khung cửa sổ
    windowFrame.classList.remove("maximized", "restored"); // Xóa trạng thái phóng to/khôi phục
    windowFrame.classList.add("minimized"); // Thêm class 'minimized' để áp dụng kiểu thu nhỏ
    document.getElementById("relaunch").style.display = "block"; // Hiển thị nút khởi động lại
    document.getElementById("mainContent").style.opacity = "0"; // Ẩn nội dung chính khi thu nhỏ
}

// Hàm chuyển đổi giữa trạng thái phóng to và khôi phục (cửa sổ nhỏ)
function toggleMaximizeRestore() {
    const windowFrame = document.querySelector(".window-frame"); // Lấy phần tử khung cửa sổ
    const mainContent = document.getElementById("mainContent"); // Lấy phần nội dung chính
    const relaunchLogo = document.getElementById("relaunch"); // Lấy nút khởi động lại

    if (windowFrame.classList.contains("maximized")) {
        // Nếu cửa sổ hiện đang ở trạng thái phóng to, chuyển về trạng thái khôi phục (cửa sổ nhỏ hơn)
        windowFrame.classList.remove("maximized");
        windowFrame.classList.add("restored");
        mainContent.style.opacity = "1"; // Đảm bảo nội dung hiển thị
        relaunchLogo.style.display = "none"; // Ẩn nút khởi động lại
    } else if (windowFrame.classList.contains("restored")) {
        // Nếu cửa sổ hiện đang ở trạng thái khôi phục, chuyển về trạng thái phóng to
        windowFrame.classList.remove("restored");
        windowFrame.classList.add("maximized");
        mainContent.style.opacity = "1"; // Đảm bảo nội dung hiển thị
        relaunchLogo.style.display = "none"; // Ẩn nút khởi động lại
    } else {
        // Nếu không ở trong cả hai trạng thái trên (ví dụ: lần tải ban đầu hoặc vừa bị thu nhỏ), phóng to
        maximizeWindow();
    }
}

// Hàm mở lại cửa sổ (sau khi đã bị thu nhỏ/đóng)
function reopenWindow() {
    const windowFrame = document.querySelector(".window-frame"); // Lấy phần tử khung cửa sổ
    const mainContent = document.getElementById("mainContent"); // Lấy phần nội dung chính
    const relaunchLogo = document.getElementById("relaunch"); // Lấy nút khởi động lại

    // Ngay lập tức thêm trạng thái 'initial-reopen-state' để bắt đầu hiệu ứng bật lên từ dưới
    windowFrame.classList.add("initial-reopen-state");
    
    // Buộc trình duyệt vẽ lại để đảm bảo trạng thái ban đầu được áp dụng
    // trước khi thực hiện chuyển đổi sang trạng thái mới (quan trọng cho animation)
    void windowFrame.offsetWidth; 

    // Sau đó loại bỏ các trạng thái cũ và chuyển sang trạng thái "restored" (cửa sổ nhỏ)
    windowFrame.classList.remove("minimized", "maximized", "initial-reopen-state"); // Xóa tất cả các trạng thái kích thước cũ
    windowFrame.classList.add("restored"); // Thêm class "restored" để đặt về cửa sổ nhỏ

    // Hiển thị nội dung chính sau khi cửa sổ đã sẵn sàng
    mainContent.style.opacity = "1";
    relaunchLogo.style.display = "none"; // Ẩn nút khởi động lại

    // Đặt lại ngôn ngữ về trạng thái ban đầu mong muốn khi mở lại
    currentLang = 'vi'; // Giữ ngôn ngữ mặc định là tiếng Việt
    // isDarkMode = true; // Dòng này đã bị xóa để không ép buộc chế độ tối
    // document.body.classList.add('dark-mode'); // Dòng này đã bị xóa để không ép buộc chế độ tối

    updateContent(); // Cập nhật nội dung theo ngôn ngữ đã đặt lại
    updateThemeToggleButton(); // Cập nhật nút chủ đề (sẽ hiển thị đúng icon dựa trên isDarkMode hiện tại)
}

// Hàm đóng cửa sổ (thực chất là thu nhỏ và ẩn nội dung)
function closeWindow() {
    const windowFrame = document.querySelector(".window-frame"); // Lấy phần tử khung cửa sổ
    windowFrame.classList.remove("maximized", "restored"); // Xóa trạng thái phóng to/khôi phục
    windowFrame.classList.add("minimized"); // Thêm class 'minimized' để áp dụng kiểu thu nhỏ
    document.getElementById("relaunch").style.display = "block"; // Hiển thị nút khởi động lại
    document.getElementById("mainContent").style.opacity = "0"; // Ẩn nội dung chính
}

// --- Trình Lắng Nghe Sự Kiện và Thiết Lập Ban Đầu Khi Tải Trang ---
document.addEventListener('DOMContentLoaded', (event) => {
    // Lắng nghe sự kiện khi toàn bộ nội dung HTML đã được tải và phân tích cú pháp
    const windowFrame = document.querySelector(".window-frame"); // Lấy khung cửa sổ
    const relaunchLogo = document.getElementById("relaunch"); // Lấy nút khởi động lại
    const mainContent = document.getElementById("mainContent"); // Lấy phần nội dung chính

    // 1. Đặt trạng thái cửa sổ ban đầu là "restored" (cửa sổ nhỏ) khi tải trang
    windowFrame.classList.remove("maximized", "minimized", "initial-reopen-state"); // Đảm bảo loại bỏ các trạng thái cũ
    windowFrame.classList.add("restored"); // Thêm class "restored" để hiển thị cửa sổ nhỏ

    // Đảm bảo nút khởi động lại bị ẩn và nội dung chính hiển thị
    relaunchLogo.style.display = "none";
    mainContent.style.opacity = "1";

    // 2. Đặt chế độ chủ đề ban đầu là "tối"
    isDarkMode = true; // Đặt biến isDarkMode thành true
    document.body.classList.add('dark-mode'); // Thêm class 'dark-mode' vào thẻ body để áp dụng kiểu CSS

    // 3. Đặt ngôn ngữ ban đầu (giữ nguyên tiếng Việt hoặc theo ý muốn)
    currentLang = 'vi';

    // 4. Cập nhật nội dung và nút chuyển đổi chủ đề dựa trên trạng thái ban đầu đã thiết lập
    updateContent(); // Tải nội dung ngôn ngữ ban đầu
    updateThemeToggleButton(); // Đặt biểu tượng (mặt trăng) và kiểu cho nút chủ đề (vì đang ở chế độ tối)

    // 5. Gắn các trình lắng nghe sự kiện cho các nút tương tác
    document.getElementById('themeToggle').addEventListener('click', toggleDarkMode); // Khi click nút themeToggle, gọi hàm toggleDarkMode
    document.getElementById('langToggle').addEventListener('click', toggleLanguage); // Khi click nút langToggle, gọi hàm toggleLanguage
});