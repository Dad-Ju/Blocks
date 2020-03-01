module.exports = {
    name: "Get Value from Object (JSON)",

    author: "Dad_Ju aka Ju#2402",

    description: "Get a Value from a Object (JSON) out of the Key.",

    category: "Advanced",

    inputs: [
        {
            "name": "action",
            "title": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "name": "input",
            "title": "Object",
            "description": "Acceptable Types: Unspecified, Text\n\nDescription: The Object from where you want the Key.",
            "types": ["unspecified", "object"]
        },
        {
            "name": "key",
            "title": "Key",
            "description": "Acceptable Types: Unspecified, Text\n\nDescription: The Key that you want to get from the Object.",
            "types": ["unspecified", "text", "object"]
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
            "name": "output",
            "title": "Output",
            "description": "Type: unspecified (could be anything)\n\nDescription: The Value from the Key of the Input.",
            "types": ["object", "text", "unspecified", "list"]
        },
        {
            "name": "error",
            "title": "Error",
            "description": "Type: Action\n\nDescription: Executes blocks, if an Error occor.",
            "types": ["action"]
        }
    ],

    code: function(cache) {
        const key = this.GetInputValue("key", cache);
        const input = this.GetInputValue("input", cache);

        try {
            let out = input[key];
            this.StoreOutputValue(out, "output", cache);
            this.RunNextBlock("action", cache);
        } catch (error) {
            console.log(error);
            this.RunNextBlock("error", cache);
        }
    }
};