<?php
// namespace app\controllers;

class Base
{
    public function index()
    {
        echo "404 not found";
    }

    public function view($view, $data = [])
    {
        if (file_exists('../app/views/' . $view . '.php')) {
            require_once '../app/views/' . $view . '.php';
        } else {
            die('View does not exist');
        }
    }

    public function response($data)
    {
        header("Content-type: application/json; charset=utf-8");
        echo json_encode($data);
    }
}
