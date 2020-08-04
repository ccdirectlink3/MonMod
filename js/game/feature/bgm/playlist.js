ig.module("monmod.game.feature.bmg.playlist").requires("game.feature.bgm.playlist").defines(function() {
    ig.merge(ig.BGM_TRACK_LIST, {
        "sanctuary": {
            "path": "media/bgm/muSanctuary.ogg",
            "loopEnd": 323,
            "volume": 1
        },
        "heaven": {
            "path": "media/bgm/muHeaven.ogg",
            "loopEnd": 315,
            "volume": 1
        },
        "heavensdoor": {
            "path": "media/bgm/muHeavensDoor.ogg",
            "loopEnd": 424,
            "volume": 1
        }
    });
});