module.exports = {
    apps: [{
        name: "fhir-questionaire-generator",
        script: "yarn start",
        env: {
            'NODE_OPTIONS': "--openssl-legacy-provider"
        },
        autorestart: true,
    }]
}
