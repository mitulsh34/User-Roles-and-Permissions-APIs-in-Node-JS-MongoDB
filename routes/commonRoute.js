const express = require('express');
const router = express();

const auth = require('../middlewares/authMiddleware');

const { addCategoryValidator, categoryDeleteValidator, updateCategoryValidator, createPostValidator, postDeleteValidator, updatePostValidator } = require('../helpers/adminValidator');

const { createUserValidator, updateUserValidator, deleteUserValidator } = require('../helpers/userValidator');

const categoryController = require('../controllers/categoryController');

const postController = require('../controllers/postController');

const userController = require('../controllers/userController');


// Authenticated Routes Starts Here (Authorization token needed) -----------


// Category Routes

router.post('/add-category', auth, addCategoryValidator, categoryController.addCategory);
router.get('/get-categories', auth, categoryController.getCategories);
router.post('/delete-category', auth, categoryDeleteValidator, categoryController.deleteCategory);
router.post('/update-category', auth, updateCategoryValidator, categoryController.updateCategory);


//  Post Routes

router.post('/create-post', auth, createPostValidator, postController.createPost);
router.get('/get-posts', auth, postController.getPosts);
router.post('/delete-post', auth, postDeleteValidator, postController.deletePost);
router.post('/update-post', auth, updatePostValidator, postController.updatePost);


// Users Routes

router.post('/create-user', auth, createUserValidator, userController.createNewUser);
router.get('/get-users', auth, userController.getUsers);
router.post('/update-user', auth, updateUserValidator, userController.updateUser);
router.post('/delete-user', auth, deleteUserValidator, userController.deleteUser);

module.exports = router;