<?php 
require_once "../app/controllers/Base.php";

class Home extends Base
{
    public function index()
    {
        return $this->view('home/index');
    }

   
}