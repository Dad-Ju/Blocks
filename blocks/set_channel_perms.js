module.exports = {
    name: "Set Channel Perms",

    author: "Dad_Ju aka Ju#2402",

    description: "Allow or Deny Permissons for a Target on a Channel",

    category: "Channel Stuff",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "channel",
            "title": "Channel-Resolvable",
            "description": "Type: Unspecified, Text, Object\n\nDescription: Can be the Channel ID or the Channel as Object himself.",
            "types": ["text", "unspecified", "object"]
        },
        {
            "name": "target",
            "title": "The Target",
            "description": "Type: Unspecified, Object\n\nDescription: The Target, can be a Role or a Member (not User!!)",
            "types": ["unspecified", "object"]
        },
        {
            "name": "set",
            "title": "Set to",
            "description": "Type: Unspecified, boolean, null\n\nDescription: The Value to set this Permisson.",
            "types": ["unspecified", "boolean", "null"]
        }
    ],

    options: [
        {
            "name": "permisson",
            "title": "Permisson type",
            "description": "Description: The Permisson to Edit.\nLook for the Channel Type, 'T = Textchannel' and 'V =  Voicechannel!!!'",
            "type": "SELECT",
            "options": {
                1: "CREATE INSTANT INVITE [T, V]",
                2: "MANAGE CHANNELS [T, V]",
                3: "ADD REACTIONS [T]",
                4: "VIEW CHANNEL [T, V]",
                5: "SEND MESSAGES [T]",
                6: "SEND TTS MESSAGES [T]",
                7: "MANAGE MESSAGES [T]",
                8: "EMBED LINKS [T]",
                9: "ATTACH FILES [T]",
                10: "READ MESSAGE HISTORY [T]",
                11: "MENTION EVERYONE [T]",
                12: "USE EXTERNAL EMOJIS [T]",
                13: "CONNECT [V]",
                14: "SPEAK [V]",
                15: "MUTE MEMBERS [V]",
                16: "DEAFEN MEMBERS [V]",
                17: "MOVE MEMBERS [V]",
                18: "USE VAD [V]",
                19: "PRIORITY SPEAKER [V]",
                20: "STREAM [V]",
                21: "MANAGE ROLES [T, V]",
                22: "MANAGE WEBHOOKS [T, V]"
            }
        }
    ],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "error",
            "title": "ERROR",
            "description": "Type: Action\n\nDescription: Executes blocks if an Error occur.",
            "types": ["action"]
        }
    ],

    code: async function(cache) {
        // Perm Flags are here => https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS or here https://discordapp.com/developers/docs/topics/permissions
        let _this = this;

        let perms = [
            {"name" : "CREATE_INSTANT_INVITE", "type" : ["text", "voice"]},
            {"name" : "MANAGE_CHANNELS", "type" : ["text", "voice"]},
            {"name" : "ADD_REACTIONS", "type" : ["text"]},
            {"name" : "VIEW_CHANNEL", "type" : ["text", "voice"]},
            {"name" : "SEND_MESSAGES", "type" : ["text"]},
            {"name" : "SEND_TTS_MESSAGES", "type" : ["text"]},
            {"name" : "MANAGE_MESSAGES", "type" : ["text"]},
            {"name" : "EMBED_LINKS", "type" : ["text"]},
            {"name" : "ATTACH_FILES", "type" : ["text"]},
            {"name" : "READ_MESSAGE_HISTORY", "type" : ["text"]},
            {"name" : "MENTION_EVERYONE", "type" : ["text"]},
            {"name" : "USE_EXTERNAL_EMOJIS", "type" : ["text"]},
            {"name" : "CONNECT", "type" : ["voice"]},
            {"name" : "SPEAK", "type" : ["voice"]},
            {"name" : "MUTE_MEMBERS", "type" : ["voice"]},
            {"name" : "DEAFEN_MEMBERS", "type" : ["voice"]},
            {"name" : "MOVE_MEMBERS", "type" : ["voice"]},
            {"name" : "USE_VAD", "type" : ["voice"]},
            {"name" : "PRIORITY_SPEAKER", "type" : ["voice"]},
            {"name" : "STREAM", "type" : ["voice"]},
            {"name" : "MANAGE_ROLES", "type" : ["text", "voice"]},
            {"name" : "MANAGE_WEBHOOKS", "type" : ["text", "voice"]}
        ];

        function getInputMode(){
            let input = _this.GetInputValue("set", cache);
            if(typeof input == "boolean" || input == null){
                return input;
            }else{
                return (input == 'true' || input == 'TRUE');
            }
        };

        let permisson = perms[parseInt(this.GetOptionValue("permisson", cache)) - 1];
        let setmode = getInputMode();
        let channel = this.GetInputValue("channel", cache);
        let target = this.GetInputValue("target", cache);
        
        try {
            if(typeof channel !== "object"){
                channel = this.client.channels.get(channel);
            }
            
            if(typeof target !== "object"){
                throw new Error("need an Member or Role Object as Target!!");
            }
            
            if(typeof target.guild !== "object"){
                throw new Error("need an Target is not in a Guild (try member instead of user!!)");
            }
            
            if(!permisson.type.includes(channel.type)){
                throw new Error("the Permisson ''" + permisson.name + "' can't be set for Channel of Type: ''" + channel.type + "'");
            }

            // Generate Object to parse in overwritePermissons();
            let obj = {}; obj[permisson.name] = setmode;
            await channel.overwritePermissions(target, obj);
            
            this.RunNextBlock("action", cache);
        } catch (error) {
            console.log(error);
            this.RunNextBlock("error", cache);
        }
    }
};