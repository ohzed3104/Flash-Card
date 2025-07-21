# Ứng dụng Flash Card với React

Một ứng dụng flash card (thẻ ghi nhớ) đơn giản nhưng thanh lịch, được xây dựng bằng React và Vite. Dự án này là một công cụ tuyệt vời để học và luyện tập các khái niệm mới thông qua định dạng hỏi-đáp cổ điển.

## 🚀 Tính năng

- **Thẻ tương tác**: Nhấp vào một thẻ để lật nó và xem câu trả lời.
- **Chiều cao động**: Các thẻ tự động điều chỉnh chiều cao để vừa với nội dung của cả câu hỏi và câu trả lời, đảm bảo một bố cục gọn gàng và nhất quán.
- **Thiết kế đáp ứng (Responsive)**: Giao diện tương thích mượt mà với các kích thước màn hình khác nhau.
- **Kiến trúc dựa trên Component**: Được xây dựng với các thành phần React có thể tái sử dụng (`FlashCard`, `FlashCardList`).

## 🛠️ Công nghệ sử dụng

- **[React](https://react.dev/)**: Một thư viện JavaScript để xây dựng giao diện người dùng.
- **[Vite](https://vitejs.dev/)**: Một công cụ build frontend hiện đại mang lại trải nghiệm phát triển nhanh và nhẹ hơn.
- **JavaScript (ES6+)**
- **CSS3** để tạo kiểu và hiệu ứng.

## 📦 Bắt đầu

Làm theo các hướng dẫn sau để tải và chạy dự án trên máy của bạn cho mục đích phát triển và thử nghiệm.

### Yêu cầu

Bạn cần cài đặt [Node.js](https://nodejs.org/en/) và [npm](https://www.npmjs.com/) (hoặc [yarn](https://yarnpkg.com/)) trên máy tính của mình.

### Cài đặt & Thiết lập

1.  **Sao chép (clone) repository:**
    ```sh
    git clone <your-repository-url>
    ```

2.  **Đi đến thư mục dự án:**
    ```sh
    cd flash-card
    ```

3.  **Cài đặt các dependency:**
    ```sh
    npm install
    ```

4.  **Chạy server phát triển:**
    ```sh
    npm run dev
    ```

Ứng dụng sẽ chạy trên `http://localhost:5173` (hoặc một cổng khác nếu 5173 đã được sử dụng).

## 💡 Hướng phát triển trong tương lai

Dự án này có một nền tảng vững chắc có thể được mở rộng với nhiều tính năng hơn:

- **Tải dữ liệu từ API**: Tải dữ liệu thẻ từ một API bên ngoài thay vì sử dụng dữ liệu được code cứng.
- **Nội dung do người dùng tạo**: Xây dựng các form cho phép người dùng tạo, sửa và xóa các thẻ và bộ thẻ của riêng họ.
- **Nhiều bộ thẻ**: Thêm khả năng tạo và quản lý các bộ thẻ khác nhau (ví dụ: "Công thức Toán", "Từ vựng Tiếng Anh").
- **Quản lý State**: Tích hợp một thư viện quản lý trạng thái toàn cục như Redux Toolkit hoặc Zustand cho các trạng thái phức tạp hơn.
- **Backend & Cơ sở dữ liệu**: Tạo một dịch vụ backend (ví dụ: với Node.js/Express) và một cơ sở dữ liệu (ví dụ: MongoDB/PostgreSQL) để lưu trữ dữ liệu người dùng.
- **Xác thực người dùng**: Cho phép người dùng đăng ký và đăng nhập để lưu tiến trình học và các bộ thẻ của họ.
