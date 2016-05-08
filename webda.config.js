module.exports = {
	"*": "lambda-demo.webda.io",
	"lambda-demo.webda.io": {
		"global": {
			"params": {
				"accessKeyId": "AKIAJHJQGLNMLIFKKTJQ",
				"secretAccessKey": "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",
				"region": "us-west-2"
			},
			"services": {
				"Users": {
					"expose": {
						"url": "/users"
					},
					"type": "DynamoStore",
					"table": "webda-demo-users"
				}
			}
		},
		"/": {
			"method": "GET",
			"executor": "string",
			"result": "Webda Demo Root",
			"mime": "text/plain"
		}
	}
}
