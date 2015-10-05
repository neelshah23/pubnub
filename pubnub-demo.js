///**
// * Created by neel on 5/10/15.
// */
//
//var PUBNUB_demo = PUBNUB.init({
//    publish_key   : 'pub-c-bb66a03a-bebc-47fc-ad9c-484708ddd8c7',
//    subscribe_key : 'sub-c-52d8f97a-6b2c-11e5-a06b-02ee2ddab7fe'
//});
//
//
//// Subscribe to the demo_tutorial channel
//PUBNUB_demo.subscribe({
//    channel: 'myChannel',
//    message: function(m){console.log(m)}
//});
//
////publish message
//PUBNUB_demo.publish({
//    channel: 'myChannel',
//    message: {"color":"blue"}
//});


    var PUBNUB_demo = PUBNUB.init({
        publish_key   : 'pub-c-bb66a03a-bebc-47fc-ad9c-484708ddd8c7',
        subscribe_key : 'sub-c-52d8f97a-6b2c-11e5-a06b-02ee2ddab7fe'
        //secret_key    : 'sec-c-ODhkZTRkZTktMjc0OC00NmIxLTgwYjUtODA1NTYyOTA1ZDZj'
    });
    //PUBNUB_demo.grant({
    //    channel: 'nss',
    //    auth_key: '123nlsdnflkasdlkfmlkasmdfk',
    //    read: true,
    //    write: true,
    //    ttl: 5,
    //    callback: function(m){
    //        $("body").append("<p>"+m.text+"</p>");
    //    }
    //});

    PUBNUB_demo.subscribe({
        channel: 'nss',
        message: function(m){

        }
    });


