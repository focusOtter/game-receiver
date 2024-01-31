export function request(ctx) {
	console.log('the context', ctx)
	return {
		payload: {
			input: ctx.args.input,
		},
	}
}

export function response(ctx) {
	console.log(ctx.result.input)
	return ctx.result.input
}
