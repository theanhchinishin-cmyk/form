const express = require("express");
const router = express.Router();
const db = require("../init-db");

// Vào upload lần đầu
router.get("/", (req, res) => {
  res.render("upload", { error: null, success: null });
});

router.post("/", async (req, res) => {
  const { title, description } = req.body;

  // Kiểm tra dữ liệu cơ bản
  if (!title || title.trim() === "") {
    return res.render("upload", {
      error: "Không được để trống tiêu đề",
      success: null,
    });
  }

  try {
    const querySql =
      "INSERT INTO blogs (title, description, view_count) VALUES (?, ?, 0)";
    await db.query(querySql, [title, description]);

    res.render("upload", {
      error: null,
      success: "Đăng tải bài viết thành công!",
    });
  } catch (err) {
    console.error("Lỗi khi thêm blog:", err);
    res.render("upload", {
      error: "Lỗi hệ thống",
      success: null,
    });
  }
});

module.exports = router;
