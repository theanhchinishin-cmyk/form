const express = require("express");
const router = express.Router();
const db = require("../init-db");

router.get("/", async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    const limit = 3;
    const offset = (page - 1) * limit;

    const [countResult] = await db.query("SELECT COUNT(*) AS total FROM blogs");
    const totalBlogs = countResult[0].total;
    const totalPages = Math.ceil(totalBlogs / limit);

    if (page < 1) page = 1;
    if (page > totalPages && totalPages > 0) page = totalPages;

    const querySql =
      "SELECT * FROM blogs ORDER BY created_at DESC LIMIT ? OFFSET ?";
    const [blogs] = await db.query(querySql, [limit, offset]);

    res.render("index", {
      recent: blogs,
      currentPage: page,
      totalPages: totalPages,
    });
  } catch (err) {
    console.error("Lỗi phân trang:", err);
    res.status(500).send("Lỗi server");
  }
});

router.get("/blog/:id", async (req, res) => {
  const blogId = req.params.id;

  try {
    const updateViewSql =
      "UPDATE blogs SET view_count = view_count + 1 WHERE id = ?";
    await db.query(updateViewSql, [blogId]);

    const getblogSql = "SELECT * FROM blogs WHERE id = ?";
    const [rows] = await db.query(getblogSql, [blogId]);

    if (rows.length === 0) {
      return res.status(404).send("Không tìm thấy bài viết");
    }

    const blog = rows[0];

    res.render("blog", { blog: blog });
  } catch (err) {
    console.error("Lỗi khi xem chi tiết bài viết:", err);
    res.status(500).send("Lỗi server");
  }
});

router.get("/blog/:id", async (req, res) => {
  const blogId = req.params.id;

  try {
    const updateViewSql =
      "UPDATE blogs SET view_count = view_count + 1 WHERE id = ?";
    await db.query(updateViewSql, [blogId]);

    const getBlogSql = "SELECT * FROM blogs WHERE id = ?";
    const [rows] = await db.query(getBlogSql, [blogId]);

    if (rows.length === 0) {
      return res.status(404).send("Không tìm thấy bài viết");
    }

    const blog = rows[0];

    res.render("blog", { blog: blog });
  } catch (err) {
    console.error("Lỗi khi xem chi tiết bài viết:", err);
    res.status(500).send("Lỗi server");
  }
});

module.exports = router;
