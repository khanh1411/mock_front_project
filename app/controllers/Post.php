<?php 
require_once "../app/controllers/Base.php";
require_once "../app/repositories/Post/PostRepository.php";

class Post extends Base
{
    public $post;

    public function __construct()
    {
        $this->post = new PostRepository;
    }

    // lấy tất cả bài viết
    public function totalPost()
    {
        $res = $this->post->getAll();
        return $this->response($res);
    }

    // lấy bài viết cuối cùng
    public function lastPost()
    {
        $res = $this->post->getlastPost();
        return $this->response($res);
    }   

    // lấy những bài viết gần nhất
    public function newestPost()
    {
        $res = $this->post->getNewestPost();
        return $this->response($res);
    }

    // lấy bài viết cuối cùng theo từng thể loại
    public function lastPostOfCategory($id)
    {
        $res = $this->post->getLastPostOfCategory($id);
        return $this->response($res);
    }

    // lấy những bài viết gần nhất theo từng thể loại
    public function newestPostOfCategory($id)
    {
        $res = $this->post->getNewestPostOfCategory($id);
        return $this->response($res);
    }
    
    // lấy ảnh ở bài viết
    public function getImagePost($id)
    {
        $res = $this->post->getSomeImages($id);
        return $this->response($res);
    }

    

    // lấy tất cả bài viết của từng thể loại trong trang detail
    public function allPostDetailCategory($id)
    {
        $res = $this->post->getAllPostDetailCategory($id);
        return $this->response($res);
    }

    // lấy 1 bài viết
    public function singlePost($id)
    {
        $res = $this->post->getPost($id);
        return $this->response($res);
    }
}