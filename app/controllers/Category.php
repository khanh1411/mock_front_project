<?php 
require_once "../app/controllers/Base.php";
require_once "../app/repositories/Category/CategoryRepository.php";

class Category extends Base
{
    public $category;

    public function __construct()
    {
        $this->category = new CategoryRepository();
    }

    public function index()
    {
        return $this->view('categories/index');
    }

    // lấy tất cả thể loại
    public function getAllData()
    {
        // load model va return JSON
        $categories = $this->category->getAll();
        return $this->response($categories);
    }

    // lấy những thể loại chính
    // public function getCenterCategory()
    // {
    //     $category = $this->category->getMainCategory();
    //     return $this->response($category);
    // }

    // lấy 1 thể loại duy nhất
    public function getSingleCategory($id)
    {
        $category = $this->category->getOneCategory($id);
        return $this->response($category);
    }

   
}