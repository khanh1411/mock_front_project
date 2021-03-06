<?php
require_once "../app/models/Posts.php";

class PostRepository extends Posts
{
    public $model;

    public function __construct()
    {
        $this->model = new Posts;
    }

    public function getAll()
    {
        return $this->model->getAllData();
    }

    public function getlastPost()
    {
        $sql = "SELECT p.id, p.title, p.content, p.image_url, p.category_id, p.public_time
                FROM posts p
                ORDER BY p.public_time DESC 
                LIMIT 1";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getNewestPost()
    {
        $sql = "SELECT * FROM posts ORDER BY created_at DESC LIMIT 3 OFFSET 1";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getLastPostOfCategory($id)
    {
        $sql = "SELECT p.id, p.title, p.content, p.image_url, p.category_id, p.public_time
                FROM posts p
                WHERE p.category_id = $id
                ORDER BY p.public_time DESC
                LIMIT 1";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getNewestPostOfCategory($id)
    {
        $sql = "SELECT p.id, p.title, p.content, p.image_url, p.category_id, p.public_time
                FROM posts p
                WHERE p.category_id = $id
                ORDER BY p.public_time DESC
                LIMIT 2 OFFSET 1";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getSomeImages($id)
    {
        $sql = "SELECT p.id, p.image_url, p.category_id, p.public_time
                FROM posts p
                WHERE p.category_id = $id";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getAllPostDetailCategory($id)
    {
        $sql = "SELECT *
                FROM posts p
                WHERE p.category_id = $id
                ORDER BY p.public_time DESC";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function getPost($id)
    {
        $sql = "SELECT *
                FROM posts p
                WHERE p.id = $id";
        $query = $this->model->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function searchPost($keyword)
    {
        $keyword =  $this->vn_to_str($keyword); 
        $sql = "SELECT * FROM posts p WHERE p.title LIKE '%$keyword%'  ";
        // print_r($sql); die;
        $query = $this->model->query($sql);
        // print_r($query); die;
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function vn_to_str($str)
    {
        $unicode = array(
            'a' => '??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???',  
            'd' => '??',
            'e' => '??|??|???|???|???|??|???|???|???|???|???',
            'i' => '??|??|???|??|???',
            'o' => '??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???',
            'u' => '??|??|???|??|???|??|???|???|???|???|???',
            'y' => '??|???|???|???|???',
            'A' => '??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???',
            'D' => '??',
            'E' => '??|??|???|???|???|??|???|???|???|???|???',
            'I' => '??|??|???|??|???',
            'O' => '??|??|???|??|???|??|???|???|???|???|???|??|???|???|???|???|???',
            'U' => '??|??|???|??|???|??|???|???|???|???|???',
            'Y' => '??|???|???|???|???',
        );

        foreach($unicode as $nonUnicode=>$uni){
            $str = preg_replace("/($uni)/i", $nonUnicode, $str);
        }
        // $str = str_replace(' ','_',$str);
        return $str;
    }
}
