CREATE DATABASE IF NOT EXISTS blogweb;
USE blogweb;
CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    view_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Dữ liệu mẫu
INSERT INTO blogs (
        title,
        description,
        view_count
    )
VALUES (
        'A Beautiful Site Deserves a Beautiful Blog',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut alias amet perspiciatis! Quidem dicta praesentium quae corporis quis impedit neque perferendis facilis assumenda eveniet, delectus alias harum quam magnam.',
        130
    ),
    (
        ' Another Blog Post',
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut alias amet perspiciatis! Quidem dicta praesentium quae corporis quis impedit neque perferendis facilis assumenda eveniet, delectus alias harum quam magnam.',
        95
    ),
    (
        ' Hello World! ',
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ut alias amet perspiciatis! Quidem dicta praesentium quae corporis quis impedit neque perferendis facilis assumenda eveniet, delectus alias harum quam magnam. ',
        78
    );