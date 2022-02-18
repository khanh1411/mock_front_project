<?php
// require_once "../libraries/Core.php";
// require_once "../libraries/Database.php";
// require_once "../libraries/Model.php";

spl_autoload_register(function($className){
    require_once "../libraries/".$className.".php";
});
