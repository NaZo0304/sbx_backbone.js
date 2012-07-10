<?php
  $blogList = array(
    array(
      "blog_id" => 1,
      "title" => "たいとる１",
      "content" => "こんてんつ１",
      "tag" => array("TagB","TagA"),
      "updated_at" => "2012-07-01 00:00:00",
      "created_at" => "2012-07-01 00:00:00",
    ),
    array(
      "blog_id" => 2,
      "title" => "たいとる２",
      "content" => "こんてんつ４",
      "tag" => array("TagD"),
      "updated_at" => "2012-07-02 00:00:00",
      "created_at" => "2012-07-02 00:00:00",
    ),
    array(
      "blog_id" => 3,
      "title" => "たいとる３",
      "content" => "こんてんつ４",
      "tag" => array("TagB","TagC"),
      "updated_at" => "2012-07-03 00:00:00",
      "created_at" => "2012-07-03 00:00:00",
    ),
    array(
      "blog_id" => 4,
      "title" => "たいとる４",
      "content" => "こんてんつ４",
      "tag" => array("TagH","TagA"),
      "updated_at" => "2012-07-04 00:00:00",
      "created_at" => "2012-07-04 00:00:00",
    ),
  );
?>

{
  "count" : <?php echo count($blogList);?>,
}