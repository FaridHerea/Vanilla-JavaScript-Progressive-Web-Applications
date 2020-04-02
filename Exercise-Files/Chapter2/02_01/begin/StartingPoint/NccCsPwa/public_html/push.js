var webPush = require('web-push');

var pushSub = {"endpoint":"https://fcm.googleapis.com/fcm/send/dwCupWrLdK0:APA91bEX1iMlTFPV9fMq2tKjarIHJ7A651WyRNTO62z5EneVkz4OP9RmjwP6b1IIi8UgsVi5xMlQTlBOSBVm-D0FJr8C3RW69Kfd51g1IVl2-yPx-vtpTgNUSP6ZZmra2zvdLPjdM12g","expirationTime":null,"keys":{"p256dh":"BDfkACMN1EKTmxYAKYVbzBC5xxJmz3lxZ21VvULj-jb-WJJUDVd1fM0vFPhLMAgQ9JyKCWUJr_VVayefmD_59Z0","auth":"9Ow8E3jgGtKoj4uFA8PbdQ"}}

var options = {
    TTL: 60,
    gcmAPIKey: 'AAAArkMDzVU:APA91bHwCE3_sLy-BvhpsO7tlkSr2pf94SZ-jlQHhMBEDPhcvoXpJzQ9WcHiqxf18Gf4gIhaIHdkLeWVDsWhsp1hH2ohomfd-6OczGxnXcAwsaXDUlhcm7hrxG_f709KBpZb-f2Duwbx'
};

var payload = 'index.html#programs';

webPush.sendNotification(pushSub, payload, options);