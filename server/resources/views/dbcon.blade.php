<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weigo DB Connection</title>
</head>
<body>
  <div>
    <?php
      if(DB::connection()->getDatabaseName())
        echo "Yes! Successfully connected to the DB: " . DB::connection()->getDatabaseName();
      else
        echo 'Connection unsuccessful.';
    ?>
  </div>
</body>
</html>