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
            'a' => 'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',  
            'd' => 'đ',
            'e' => 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
            'i' => 'í|ì|ỉ|ĩ|ị',
            'o' => 'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
            'u' => 'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
            'y' => 'ý|ỳ|ỷ|ỹ|ỵ',
            'A' => 'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
            'D' => 'Đ',
            'E' => 'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
            'I' => 'Í|Ì|Ỉ|Ĩ|Ị',
            'O' => 'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
            'U' => 'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
            'Y' => 'Ý|Ỳ|Ỷ|Ỹ|Ỵ',
        );

        foreach($unicode as $nonUnicode=>$uni){
            $str = preg_replace("/($uni)/i", $nonUnicode, $str);
        }
        // $str = str_replace(' ','_',$str);
        return $str;
    }
}
