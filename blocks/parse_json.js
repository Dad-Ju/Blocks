module.exports = {
    name: "Text to/from JSON-Object",

    author: "Dad_Ju aka Ju#2402",

    description: "Parse an text to an JSON-Object or a JSON to a text.",

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
            "title": "Input",
            "description": "Acceptable Types: Unspecified, Text, Object\n\nDescription: The Text that you want to convert to a JSON-Object.",
            "types": ["unspecified", "text", "object"]
        }
    ],

    options: [
        {
            "name": "type",
            "title": "Mode",
            "description": "Description: What should i do with the Input.",
            "type": "SELECT",
            "options": {
                1: "PARSE (Make Object)",
                2: "STRINGIFY (Make Text)",
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
            "name": "output",
            "title": "Output",
            "description": "Type: Object\n\nDescription: The Object/Text from the Input.",
            "types": ["object", "text"]
        },
        {
            "name": "error",
            "title": "Error",
            "description": "Type: Action\n\nDescription: Executes blocks, if an Error occor.",
            "types": ["action"]
        }
    ],

    code: function (cache) {
        const input = this.GetInputValue("input", cache);
        const mode = parseInt(this.GetOptionValue("type", cache));
        let type;
        switch (mode) {
            case 1: type = "parse"; break;
            case 2: type = "stringify"; break;
        }

        try {
            let out = JSON[type](input);
            this.StoreOutputValue(out, "output", cache);
            this.RunNextBlock("action", cache);
        } catch (error) {
            console.log(error);
            this.RunNextBlock("error", cache);
        }
    }
};