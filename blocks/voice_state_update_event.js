module.exports = {
    "name": "Voice State Update [Event]",

    "author": "Dad_Ju aka Ju#2402",

    "description": "When a user changes voice state - e.g. joins/leaves a Channel, mutes/unmutes, this event will trigger",

    "category": "Events",

    "auto_execute": true,

    "inputs": [],

    "options": [],

    "outputs": [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": [
                "action"
            ]
        },
        {
            "name": "oldmember",
            "title": "old Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member before the Voicestate-Update"
        },
        {
            "name": "newmember",
            "title": "new Member",
            "types": [
                "object"
            ],
            "description": "Type: Object\n\nDescription: The Member after the Voicestate-Update"
        }
    ],
    
    "code": function(cache){
        this.client.on( 'voiceStateUpdate' , (oldmember, newmember) => { 
            this.StoreOutputValue( oldmember , 'oldmember' , cache); 
            this.StoreOutputValue( newmember , 'newmember' , cache);  
            this.RunNextBlock('action', cache); 
        });
    }
}