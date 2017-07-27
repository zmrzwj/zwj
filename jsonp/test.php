$callback = !empty($_GET['callback']) ? $_GET['callback'] : 'callback';
echo $callback.'( .json_encode( $data ).')';