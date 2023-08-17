const router = require("express").Router();
const requireUser = require("../middlewares/requireUser");
const postsController = require("../controllers/postsController");

router.post("/", requireUser, postsController.createPostController);
router.post("/like", requireUser, postsController.likeAndUnlikePost);
router.put("/", requireUser, postsController.updatePostController);
router.delete("/", requireUser, postsController.deletePost);

module.exports = router;
