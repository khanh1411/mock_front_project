<?php

class Core
{
    protected $currentController = 'Base';
    protected $currentMethod = 'index';
    protected $params = [];

    public function __construct()
    {
        $url = $this->getUrl(); 

        if (file_exists('../app/controllers/' . ucwords($url[0]) . '.php')) { 
            $this->currentController = ucwords($url[0]); 
            unset($url[0]);
        } 

        // Require the controller
        require_once '../app/controllers/' . $this->currentController . '.php';
        // echo $this->currentController; die;

        // Instantiate controller class
        $this->currentController = new $this->currentController; // khởi tạo đối tượng từ controller đó

        // Check for second part of url
        if (isset($url[1])) {
            // Check to see if method exists in controller
            if (method_exists($this->currentController, $url[1])) {  // $url[1] đang là string
                $this->currentMethod = $url[1]; 
                // Unset 1 index
                unset($url[1]);
            }
        }

        // Get params
        $this->params = $url ? array_values($url) : [];

        // Call a callback with array of params
        call_user_func_array([$this->currentController, $this->currentMethod], $this->params);
        // params: là tham số truyền vào function callback. ở đây func callback chính là currentMethod.
        // hàm này sẽ chạy callback => chạy các hàm trong controller.
    }

    public function getUrl()
    {
        if (isset($_GET['url'])) {
            $url = rtrim($_GET['url'], '/'); //bỏ ký tự / cuối url
            // $url = filter_var($url, FILTER_SANITIZE_URL); // loại bỏ các ký tự ko hợp lệ khỏi 1 chuỗi
            $url = explode('/', $url);  // convert string to arr
            return $url;
        }
    }
}
