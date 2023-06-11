fetch("../project/settings.json")
    .then(file => file.json())
    .then(json => setup(json))

const defaultSettings = {
    title: "Untitled Project",
    framerate: 60,
    author: "Anonymous"
};

function merge(json) {
    let obj = {};
    for(const key in defaultSettings) {
        obj[key] = json[key] || defaultSettings[key];
    }
    return obj;
};

function setup(json) {
    const settings = merge(json);
    document.title = settings.title;
};