<?php
// require_once "../app/repositories/BaseRepository.php";
require_once "../app/models/Categories.php";

class CategoryRepository
{
    public $model;

    public function __construct()
    {
        $this->model = new Categories;
    }

    public function getAll()
    {
        return $this->model->getAllData();
    }

    // public function getMainCategory()
    // {
    //     $sql = "SELECT * FROM categories WHERE parent_id = 0";
    //     $query = $this->model->query($sql);
    //     while($row = $query->fetch_assoc()){
    //         $data[] = $row;
    //     }
    //     return $data;
    // }

    public function getOneCategory($id)
    {
        $sql = "SELECT * FROM categories WHERE id = $id";
        $query = $this->model->query($sql);
        while($row = $query->fetch_assoc()){
            $data[] = $row;
        }
        return $data;
    }
}
