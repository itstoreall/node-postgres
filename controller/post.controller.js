const db = require('../db');

class PostController {
  // POST
  async createPost(req, res) {
    const { title, content, user_id } = req.body;
    const newPost = await db.query(
      `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`,
      [title, content, user_id]
    );
    res.json(newPost.rows[0]);
  }

  // GET
  async getPosts(req, res) {
    const posts = await db.query('SELECT * FROM post');
    res.json(posts.rows);
  }
  // GET One
  async getPostByUser(req, res) {
    const id = req.query.id;
    const posts = await db.query(`select * from post where user_id = $1`, [id]);
    res.json(posts.rows);
  }

  // DELETE
  async deletePost(req, res) {
    const id = req.params.id;
    const post = await db.query('DELETE FROM post where id = $1', [id]);
    res.json(post.rows[0]);
  }
}

module.exports = new PostController();

/*
POST:
http://localhost:8080/api/post
{
    "title": "react",
    "content": "single page app",
    "user_id": 2
}

GET
http://localhost:8080/api/post?id=1 - id юзера
*/
