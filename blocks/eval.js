module.exports = {
    name: "Eval",

    author: "Dad_Ju aka Ju#2402",

    description: "Eval a Javasript text",

    category: "Extras",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "snippet",
            "title": "JS-Snippet",
            "description": "Acceptable Types: text.",
            "types": ["unspecified"]
        },
        {
            "name": "message",
            "title": "Message",
            "description": "The Message to use it in Eval (var msg = message)",
            "types": ["object"]
        }
    ],

    options: [],

    outputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        },
        {
            "name": "item",
            "title": "Item",
            "description": "Type: Object; Text, Unspecified\n\nDescription: The value from the Return.",
            "types": ["object", "text", "unspecified"]
        }
    ],

    code: function(cache) {
        const jssnippet = this.GetInputValue("snippet", cache);
        var evalreturn;
        const client = this.client;
        const msg = this.GetInputValue("message", cache);
        try {
            evalreturn = eval(jssnippet); 
        } catch (error) {
            evalreturn = error;
        }
        this.StoreOutputValue(evalreturn, "item", cache);
        this.RunNextBlock("action", cache);
    }
};
