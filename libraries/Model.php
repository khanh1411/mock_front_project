<?php
class Model
{
    public $connect;
    public $table;

    public function __construct()
    {
        $db = new Database;
        $this->connect = $db->connection;
    }


    public function getAllData()
    {
        $sql = "SELECT * FROM " . lcfirst($this->table);
        // echo $sql; die;
        $query = $this->query($sql);
        while ($row = $query->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function query($sql)
    {
        return $this->connect->query($sql);
    }
}
