# Sử dụng Node.js phiên bản mới nhất LTS
FROM node:10-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Sao chép package.json và package-lock.json trước
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3030 cho ứng dụng
EXPOSE 3030

# Chạy ứng dụng khi container khởi động
CMD ["node", "index.js"]
