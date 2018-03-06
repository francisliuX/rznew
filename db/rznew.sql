-- ----------------------------
-- Table structure for `rz_festival_product`
-- ----------------------------
DROP TABLE IF EXISTS `rz_festival_product`;
CREATE TABLE `rz_festival_product` (
  `pid` int(11) NOT NULL auto_increment,
  `title` varchar(64) default NULL,
  `details` varchar(128) default NULL,
  `pic` varchar(128) default NULL,
  `price` decimal(10,2) default NULL,
  `href` varchar(128) default NULL,
  `seq_recommended` tinyint(4) default NULL,
  `seq_new_arrival` tinyint(4) default NULL,
  `seq_top_sale` tinyint(4) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rz_festival_product
-- ----------------------------
INSERT INTO `rz_festival_product` VALUES ('1', '小米Air 金属超轻薄', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD独立显卡', 'img/festival/inner_img.jpg', '3488.00', 'product_details.html?lid=1', '1', '1', '1');
INSERT INTO `rz_festival_product` VALUES ('2', '联想E480C 轻薄系列', '酷睿双核i7处理器|256GB SSD|4GB内存|英特尔HD显卡680M', 'img/festival/inner_img1.jpg', '5399.00', 'product_details.html?lid=2', '2', '2', '2');
INSERT INTO `rz_festival_product` VALUES ('3', '华硕RX310 金属超极本', '酷睿双核i5处理器|512GB SSD|4GB内存|英特尔HD游戏级显卡', 'img/festival/inner_img2.jpg', '4966.00', 'product_details.html?lid=3', '3', '3', '3');
INSERT INTO `rz_festival_product` VALUES ('4', '联想小新700 电竞版游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/festival/inner_img3.jpg', '6299.00', 'product_details.html?lid=4', '4', '4', '4');
INSERT INTO `rz_festival_product` VALUES ('5', '戴尔灵越燃7000 轻薄窄边', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD显卡', 'img/festival/inner_img.jpg', '5199.00', 'product_details.html?lid=5', '5', '5', '5');
INSERT INTO `rz_festival_product` VALUES ('6', '神州战神Z7M 高性价比游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD游戏机独立显卡', 'img/festival/inner_img.jpg', '5799.00', 'product_details.html?lid=6', '6', '6', '6');

INSERT INTO `rz_festival_product` VALUES ('7', 'Apple MacBook Air 13.3英寸笔记本电脑',' 银色(Core i7 处理器/8GB内存/128GB SSD闪存', 'img/festival/inner_apple.jpg', '4966.00', 'product_details.html?lid=7', '7', '7', '7');
INSERT INTO `rz_festival_product` VALUES ('8', 'Apple MacBook Air 13.3英寸笔记本 ','银色(Core i5 处理器/8GB内存/128GB SSD闪存', 'img/festival/inner_apple1.jpg', '6299.00', 'product_details.html?lid=8', '8', '8', '8');
INSERT INTO `rz_festival_product` VALUES ('9', 'Apple MacBook Air 13.3英寸笔记本电脑 ','银色(Core i7 处理器/8GB内存/128GB SSD闪存', 'img/festival/inner_apple2.jpg', '4966.00', 'product_details.html?lid=9', '9', '9', '9');
INSERT INTO `rz_festival_product` VALUES ('10', 'Apple MacBook Air 13.3英寸笔记本 ','银色(Core i5 处理器/8GB内存/128GB SSD闪存', 'img/festival/inner_apple3.jpg', '6299.00', 'product_details.html?lid=10', '10', '10', '10');
